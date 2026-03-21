import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import { notion, notionFetchHeaders } from "./client";

const NOTION_SHARE_TOKENS_DATABASE_ID =
  process.env.NOTION_SHARE_TOKENS_DATABASE_ID;

function getDatabaseId(): string {
  if (!NOTION_SHARE_TOKENS_DATABASE_ID) {
    throw new Error(
      "NOTION_SHARE_TOKENS_DATABASE_ID environment variable is not set",
    );
  }
  return NOTION_SHARE_TOKENS_DATABASE_ID;
}

export interface ShareTokenRecord {
  id: string;
  tokenId: string;
  name: string;
  prototypePath: string;
  expiresAt: string;
  createdBy: string;
  shareUrl: string;
  notes?: string;
}

export interface SaveShareTokenInput {
  tokenId: string;
  name: string;
  prototypePath: string;
  expiresAt: string;
  createdBy: string;
  shareUrl: string;
  notes?: string;
}

export async function saveShareTokenRecord(
  input: SaveShareTokenInput,
): Promise<string> {
  const databaseId = getDatabaseId();

  const response = await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Name: {
        title: [{ text: { content: input.name || input.prototypePath } }],
      },
      "Token ID": {
        rich_text: [{ text: { content: input.tokenId } }],
      },
      "Prototype Path": {
        rich_text: [{ text: { content: input.prototypePath } }],
      },
      "Expires At": {
        date: { start: input.expiresAt },
      },
      "Created By": {
        rich_text: [{ text: { content: input.createdBy } }],
      },
      "Share URL": {
        rich_text: [{ text: { content: input.shareUrl } }],
      },
      Notes: {
        rich_text: input.notes ? [{ text: { content: input.notes } }] : [],
      },
    } as Parameters<typeof notion.pages.create>[0]["properties"],
  });

  return response.id;
}

export async function revokeShareToken(pageId: string): Promise<void> {
  await notion.pages.update({
    page_id: pageId,
    archived: true,
  });
}

async function queryDatabase(options: {
  filter?: Record<string, unknown>;
  sorts?: Array<{ property: string; direction: "ascending" | "descending" }>;
  startCursor?: string;
}): Promise<{ results: unknown[] }> {
  const databaseId = getDatabaseId();

  const res = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: notionFetchHeaders(),
      body: JSON.stringify({
        filter: options.filter,
        sorts: options.sorts,
        start_cursor: options.startCursor,
      }),
    },
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Notion query failed");
  }

  return res.json();
}

export async function listShareTokens(
  path?: string,
): Promise<ShareTokenRecord[]> {
  const filter = path
    ? { property: "Prototype Path", rich_text: { equals: path } }
    : undefined;

  const response = await queryDatabase({
    filter,
    sorts: [{ property: "Expires At", direction: "descending" }],
  });

  const pages = response.results.filter(
    (r): r is PageObjectResponse =>
      r !== null && typeof r === "object" && "properties" in r,
  );

  return pages.map(extractRecord);
}

function extractRecord(page: PageObjectResponse): ShareTokenRecord {
  const props = page.properties;

  const getText = (prop: unknown): string => {
    const p = prop as { rich_text?: Array<{ plain_text: string }> };
    return p?.rich_text?.[0]?.plain_text || "";
  };

  const getTitle = (prop: unknown): string => {
    const p = prop as { title?: Array<{ plain_text: string }> };
    return p?.title?.[0]?.plain_text || "";
  };

  const getDate = (prop: unknown): string => {
    const p = prop as { date?: { start: string } };
    return p?.date?.start || "";
  };

  return {
    id: page.id,
    tokenId: getText(props["Token ID"]),
    name: getTitle(props.Name),
    prototypePath: getText(props["Prototype Path"]),
    expiresAt: getDate(props["Expires At"]),
    createdBy: getText(props["Created By"]),
    shareUrl: getText(props["Share URL"]),
    notes: getText(props.Notes) || undefined,
  };
}
