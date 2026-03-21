const ALGORITHM = { name: "HMAC", hash: "SHA-256" } as const;

const revocationCache = new Map<
  string,
  { active: boolean; checkedAt: number }
>();
const CACHE_TTL_MS = 60_000;
const CACHE_MAX_SIZE = 1000;

let cachedKey: CryptoKey | null = null;

interface ShareTokenPayload {
  /** Prototype path, e.g. "brian/my-prototype" */
  p: string;
  /** Expiry as unix timestamp (seconds) */
  e: number;
  /** Token ID (8 chars) */
  i: string;
}

function getSecret(): string {
  const secret = process.env.SHARE_TOKEN_SECRET;
  if (!secret) {
    throw new Error("SHARE_TOKEN_SECRET environment variable is not set");
  }
  return secret;
}

async function getKey(): Promise<CryptoKey> {
  if (cachedKey) return cachedKey;
  const secret = getSecret();
  cachedKey = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    ALGORITHM,
    false,
    ["sign", "verify"],
  );
  return cachedKey;
}

function generateId(): string {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return base64urlEncode(bytes).slice(0, 8);
}

function base64urlEncode(data: Uint8Array): string {
  const binary = String.fromCharCode(...data);
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64urlDecode(str: string): Uint8Array {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}

/**
 * Create a share token for a prototype path.
 * @param path - Prototype path without leading slash, e.g. "brian/my-prototype"
 * @param expiresAt - Expiry date
 * @returns The encoded token string
 */
export async function createShareToken(
  path: string,
  expiresAt: Date,
): Promise<{ token: string; id: string }> {
  const id = generateId();
  const payload: ShareTokenPayload = {
    p: path,
    e: Math.floor(expiresAt.getTime() / 1000),
    i: id,
  };

  const payloadBytes = new TextEncoder().encode(JSON.stringify(payload));
  const payloadB64 = base64urlEncode(payloadBytes);

  const key = await getKey();
  const signature = await crypto.subtle.sign(ALGORITHM.name, key, payloadBytes);
  const signatureB64 = base64urlEncode(new Uint8Array(signature));

  return { token: `${payloadB64}.${signatureB64}`, id };
}

export interface ValidatedToken {
  path: string;
  expiresAt: number;
  id: string;
}

/**
 * Validate a share token. Returns the payload if valid, null if invalid or expired.
 */
export async function validateShareToken(
  token: string,
): Promise<ValidatedToken | null> {
  const dotIndex = token.indexOf(".");
  if (dotIndex === -1) return null;

  try {
    const payloadB64 = token.slice(0, dotIndex);
    const signatureB64 = token.slice(dotIndex + 1);

    const payloadBytes = base64urlDecode(payloadB64);
    const signatureBytes = base64urlDecode(signatureB64);

    const key = await getKey();
    const valid = await crypto.subtle.verify(
      ALGORITHM.name,
      key,
      signatureBytes,
      payloadBytes,
    );
    if (!valid) return null;

    const payload: ShareTokenPayload = JSON.parse(
      new TextDecoder().decode(payloadBytes),
    );

    if (payload.e < Math.floor(Date.now() / 1000)) return null;

    return { path: payload.p, expiresAt: payload.e, id: payload.i };
  } catch {
    return null;
  }
}

/**
 * Check if a share token is still active (not revoked) in Notion.
 * Uses raw fetch (Edge-compatible) with a 60s in-memory cache.
 * Returns true if active. Fails closed in production; fails open in development.
 */
export async function isShareTokenActive(tokenId: string): Promise<boolean> {
  const cached = revocationCache.get(tokenId);
  if (cached && Date.now() - cached.checkedAt < CACHE_TTL_MS) {
    return cached.active;
  }

  const notionToken = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_SHARE_TOKENS_DATABASE_ID;
  if (!notionToken || !databaseId) {
    return process.env.NODE_ENV !== "production";
  }

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${notionToken}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            property: "Token ID",
            rich_text: { equals: tokenId },
          },
        }),
      },
    );

    if (!res.ok) return process.env.NODE_ENV !== "production";

    const data = await res.json();
    const active = data.results?.length > 0;
    if (revocationCache.size >= CACHE_MAX_SIZE) {
      const oldest = revocationCache.keys().next().value;
      if (oldest) revocationCache.delete(oldest);
    }
    revocationCache.set(tokenId, { active, checkedAt: Date.now() });
    return active;
  } catch {
    return process.env.NODE_ENV !== "production";
  }
}

/**
 * Returns true if pathname is within the scope of the token's path.
 * Requires exact match or trailing-slash prefix to prevent token scope bypass
 * (e.g. a token for "brian/chat" must not grant access to "brian/chat-builder").
 */
export function isPathAllowed(pathname: string, tokenPath: string): boolean {
  return pathname === `/${tokenPath}` || pathname.startsWith(`/${tokenPath}/`);
}
