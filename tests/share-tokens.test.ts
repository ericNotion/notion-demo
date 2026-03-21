import { afterEach, beforeEach, describe, expect, it, mock } from "bun:test";
import {
  createShareToken,
  isPathAllowed,
  isShareTokenActive,
  validateShareToken,
} from "../src/lib/share-tokens";

process.env.SHARE_TOKEN_SECRET = "test-secret-for-unit-tests";

const FUTURE = new Date(Date.now() + 86400 * 1000);
const PAST = new Date(Date.now() - 1000);

// ============================================================
// createShareToken + validateShareToken
// ============================================================

describe("createShareToken + validateShareToken", () => {
  it("accepts a valid token", async () => {
    const { token } = await createShareToken("brian/my-proto", FUTURE);
    expect(await validateShareToken(token)).not.toBeNull();
  });

  it("preserves path, id, and expiry through the token", async () => {
    const { token, id } = await createShareToken("brian/my-proto", FUTURE);
    const result = await validateShareToken(token);
    expect(result?.path).toBe("brian/my-proto");
    expect(result?.id).toBe(id);
    expect(result?.expiresAt).toBe(Math.floor(FUTURE.getTime() / 1000));
  });

  it("generates a unique id per token", async () => {
    const { id: a } = await createShareToken("brian/proto", FUTURE);
    const { id: b } = await createShareToken("brian/proto", FUTURE);
    expect(a).not.toBe(b);
  });

  it("rejects an expired token", async () => {
    const { token } = await createShareToken("brian/my-proto", PAST);
    expect(await validateShareToken(token)).toBeNull();
  });
});

// ============================================================
// validateShareToken — invalid / tampered input
// ============================================================

describe("validateShareToken - rejects invalid tokens", () => {
  it("rejects an empty string", async () => {
    expect(await validateShareToken("")).toBeNull();
  });

  it("rejects a token with no separator", async () => {
    expect(await validateShareToken("nodothere")).toBeNull();
  });

  it("rejects garbage input", async () => {
    expect(await validateShareToken("!!!.???")).toBeNull();
  });

  it("rejects a token that has been corrupted", async () => {
    const { token } = await createShareToken("brian/my-proto", FUTURE);
    const mid = Math.floor(token.length / 2);
    const flipped = token[mid] === "A" ? "B" : "A";
    const corrupted = token.slice(0, mid) + flipped + token.slice(mid + 1);
    expect(await validateShareToken(corrupted)).toBeNull();
  });

  it("rejects a token whose path has been swapped for another token's path", async () => {
    const { token: tokenA } = await createShareToken("brian/chat", FUTURE);
    const { token: tokenB } = await createShareToken("attacker/evil", FUTURE);
    // Swap payload from tokenB with signature from tokenA
    const [, sigA] = tokenA.split(".");
    const [payloadB] = tokenB.split(".");
    expect(await validateShareToken(`${payloadB}.${sigA}`)).toBeNull();
  });
});

// ============================================================
// isPathAllowed — scope boundary enforcement
// The critical security property fixed in the AppSec review:
// a token for "brian/chat" must not grant access to "brian/chat-builder".
// ============================================================

describe("isPathAllowed - scope boundaries", () => {
  it("allows exact path match", () => {
    expect(isPathAllowed("/brian/chat", "brian/chat")).toBe(true);
  });

  it("allows sub-paths under the token path", () => {
    expect(isPathAllowed("/brian/chat/session/123", "brian/chat")).toBe(true);
  });

  it("denies a path that shares a prefix but has no slash boundary", () => {
    expect(isPathAllowed("/brian/chat-builder", "brian/chat")).toBe(false);
    expect(isPathAllowed("/brian/chatroom", "brian/chat")).toBe(false);
    expect(isPathAllowed("/brian/chat2", "brian/chat")).toBe(false);
  });

  it("denies a sibling prototype", () => {
    expect(isPathAllowed("/brian/other-proto", "brian/chat")).toBe(false);
  });

  it("denies a different user's path", () => {
    expect(isPathAllowed("/kathy/chat", "brian/chat")).toBe(false);
  });

  it("denies a parent path when token is scoped to a sub-path", () => {
    expect(isPathAllowed("/brian", "brian/chat")).toBe(false);
  });

  it("token scoped to user root grants access to all user paths", () => {
    expect(isPathAllowed("/brian", "brian")).toBe(true);
    expect(isPathAllowed("/brian/anything", "brian")).toBe(true);
  });

  it("user-root token does not grant access to other users", () => {
    expect(isPathAllowed("/kathy/anything", "brian")).toBe(false);
  });
});

// ============================================================
// isShareTokenActive — fail-open / fail-closed / caching
// ============================================================

describe("isShareTokenActive - no Notion env vars configured", () => {
  const origNotion = process.env.NOTION_TOKEN;
  const origDb = process.env.NOTION_SHARE_TOKENS_DATABASE_ID;
  const origEnv = process.env.NODE_ENV;

  beforeEach(() => {
    delete process.env.NOTION_TOKEN;
    delete process.env.NOTION_SHARE_TOKENS_DATABASE_ID;
  });

  afterEach(() => {
    if (origNotion !== undefined) process.env.NOTION_TOKEN = origNotion;
    if (origDb !== undefined)
      process.env.NOTION_SHARE_TOKENS_DATABASE_ID = origDb;
    process.env.NODE_ENV = origEnv;
  });

  it("fails open in development", async () => {
    process.env.NODE_ENV = "development";
    expect(await isShareTokenActive("any-id")).toBe(true);
  });

  it("fails closed in production", async () => {
    process.env.NODE_ENV = "production";
    expect(await isShareTokenActive("any-id")).toBe(false);
  });
});

describe("isShareTokenActive - with mocked Notion", () => {
  const origNotion = process.env.NOTION_TOKEN;
  const origDb = process.env.NOTION_SHARE_TOKENS_DATABASE_ID;
  const origEnv = process.env.NODE_ENV;
  let originalFetch: typeof globalThis.fetch;

  beforeEach(() => {
    process.env.NOTION_TOKEN = "fake-notion-token";
    process.env.NOTION_SHARE_TOKENS_DATABASE_ID = "fake-db-id";
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    if (origNotion !== undefined) process.env.NOTION_TOKEN = origNotion;
    else delete process.env.NOTION_TOKEN;
    if (origDb !== undefined)
      process.env.NOTION_SHARE_TOKENS_DATABASE_ID = origDb;
    else delete process.env.NOTION_SHARE_TOKENS_DATABASE_ID;
    process.env.NODE_ENV = origEnv;
  });

  it("returns true when Notion finds the token", async () => {
    globalThis.fetch = mock(async () =>
      Response.json({ results: [{ id: "page-123" }] }),
    );
    expect(await isShareTokenActive("active-notion-id-1")).toBe(true);
  });

  it("returns false when Notion finds no results (revoked)", async () => {
    globalThis.fetch = mock(async () => Response.json({ results: [] }));
    expect(await isShareTokenActive("revoked-notion-id-1")).toBe(false);
  });

  it("fails closed in production when Notion returns an error", async () => {
    process.env.NODE_ENV = "production";
    globalThis.fetch = mock(async () => new Response("error", { status: 500 }));
    expect(await isShareTokenActive("error-notion-id-prod")).toBe(false);
  });

  it("fails closed in production when fetch throws", async () => {
    process.env.NODE_ENV = "production";
    globalThis.fetch = mock(async () => {
      throw new Error("Network error");
    });
    expect(await isShareTokenActive("throw-notion-id-prod")).toBe(false);
  });

  it("fails open in development when fetch throws", async () => {
    process.env.NODE_ENV = "development";
    globalThis.fetch = mock(async () => {
      throw new Error("Network error");
    });
    expect(await isShareTokenActive("throw-notion-id-dev")).toBe(true);
  });

  it("caches Notion results so repeated calls do not re-fetch", async () => {
    let fetchCount = 0;
    globalThis.fetch = mock(async () => {
      fetchCount++;
      return Response.json({ results: [{ id: "page-abc" }] });
    });
    const id = "cache-dedup-id-1";
    const first = await isShareTokenActive(id);
    const second = await isShareTokenActive(id);
    const third = await isShareTokenActive(id);
    expect(first).toBe(true);
    expect(second).toBe(first);
    expect(third).toBe(first);
    expect(fetchCount).toBe(1);
  });
});
