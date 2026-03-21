/**
 * Notion Database Client for Prototype Metadata
 *
 * This module provides CRUD operations for managing prototype metadata
 * in a Notion database. Used by:
 * - GitHub Actions (sync-to-notion.ts) to create/update records on PR merge
 * - Vercel prebuild (generate-static-data.ts) to fetch data for static generation
 */

import type {
  PageObjectResponse,
  QueryDataSourceResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { notion } from "./client";

// Environment variable for prototypes database
const NOTION_PROTOTYPES_DATABASE_ID = process.env.NOTION_PROTOTYPES_DATABASE_ID;

// Base URL for prototype links
const PLAYGROUND_BASE_URL = "https://playground.makenotion.com";

function getDatabaseId(): string {
  if (!NOTION_PROTOTYPES_DATABASE_ID) {
    throw new Error(
      "NOTION_PROTOTYPES_DATABASE_ID environment variable is not set",
    );
  }
  return NOTION_PROTOTYPES_DATABASE_ID;
}

// Cache for data source ID (avoids repeated lookups)
let cachedDataSourceId: string | null = null;

/**
 * Get the data source ID for the prototypes database.
 * In SDK v5, properties live on Data Sources, not Databases.
 * The database ID != data source ID, so we need to fetch it.
 */
async function getDataSourceId(): Promise<string> {
  if (cachedDataSourceId) {
    return cachedDataSourceId;
  }

  const databaseId = getDatabaseId();
  const db = await notion.databases.retrieve({ database_id: databaseId });
  const dataSources = (db as { data_sources?: { id: string }[] }).data_sources;

  if (!dataSources || dataSources.length === 0) {
    throw new Error("No data sources found on database");
  }

  cachedDataSourceId = dataSources[0].id;
  return cachedDataSourceId;
}

// Types for prototype metadata
export interface PrototypeMetadata {
  id: string; // Format: "username/slug"
  username: string;
  slug: string;
  title: string;
  description?: string;
  externalUrl?: string;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
  archived?: boolean;
  // Version fields
  versionGroupId?: string; // Shared ID across all versions
  version?: number; // Version number (1, 2, 3...)
  branchedFromVersion?: number; // Which version this was branched from
}

export interface CreatePrototypeInput {
  username: string;
  slug: string;
  title: string;
  description?: string;
  externalUrl?: string;
  createdAt: string;
  updatedAt: string;
  notionUserId?: string; // For Author (people) property
  isTemplate?: boolean; // For Template (checkbox) property
  // Version fields
  versionGroupId?: string; // Shared ID across all versions
  version?: number; // Version number (1, 2, 3...)
  branchedFromVersion?: number; // Which version this was branched from
}

export interface UpdatePrototypeInput {
  username: string;
  slug: string;
  title?: string;
  description?: string;
  externalUrl?: string;
  updatedAt?: string; // Optional - only provided when timestamp should be bumped
}

/**
 * Check if Notion prototypes database is configured (has required env vars)
 */
export function isPrototypesDbConfigured(): boolean {
  return Boolean(
    process.env.NOTION_TOKEN && process.env.NOTION_PROTOTYPES_DATABASE_ID,
  );
}

/**
 * Create a new prototype record in Notion
 */
export async function createPrototype(
  input: CreatePrototypeInput,
): Promise<string> {
  const databaseId = getDatabaseId();
  const prototypeId = `${input.username}/${input.slug}`;

  // Use externalUrl if available, otherwise construct playground URL
  const prototypeUrl =
    input.externalUrl ||
    `${PLAYGROUND_BASE_URL}/${input.username}/${input.slug}`;

  const response = await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      // Name is the title property with link to prototype
      Name: {
        title: [
          { text: { content: input.title, link: { url: prototypeUrl } } },
        ],
      },
      // ID is rich_text (unique identifier: username/slug)
      ID: {
        rich_text: [{ text: { content: prototypeId } }],
      },
      Slug: {
        rich_text: [{ text: { content: input.slug } }],
      },
      Description: {
        rich_text: input.description
          ? [{ text: { content: input.description } }]
          : [],
      },
      "External URL": {
        url: input.externalUrl || null,
      },
      "Created at": {
        date: { start: input.createdAt },
      },
      "Updated at": {
        date: { start: input.updatedAt },
      },
      Archived: {
        checkbox: false,
      },
      Author: {
        people: input.notionUserId
          ? [{ object: "user", id: input.notionUserId }]
          : [],
      },
      Template: {
        checkbox: input.isTemplate || false,
      },
      // Version fields
      "Version Group ID": {
        rich_text: input.versionGroupId
          ? [{ text: { content: input.versionGroupId } }]
          : [],
      },
      Version: {
        number: input.version ?? 1,
      },
      "Branched From Version": {
        number: input.branchedFromVersion ?? null,
      },
    } as Parameters<typeof notion.pages.create>[0]["properties"],
  });

  return response.id;
}

/**
 * Update an existing prototype record by its Notion page ID
 */
export async function updatePrototype(
  pageId: string,
  input: UpdatePrototypeInput,
): Promise<void> {
  // Build properties object with proper typing
  const properties: Record<string, unknown> = {};

  // Only include Updated at if provided (timestamp should be bumped)
  if (input.updatedAt) {
    properties["Updated at"] = {
      date: { start: input.updatedAt },
    };
  }

  if (input.title !== undefined) {
    // Use externalUrl if available, otherwise construct playground URL
    const prototypeUrl =
      input.externalUrl ||
      `${PLAYGROUND_BASE_URL}/${input.username}/${input.slug}`;
    properties.Name = {
      title: [{ text: { content: input.title, link: { url: prototypeUrl } } }],
    };
  }

  if (input.description !== undefined) {
    properties.Description = {
      rich_text: input.description
        ? [{ text: { content: input.description } }]
        : [],
    };
  }

  if (input.externalUrl !== undefined) {
    properties["External URL"] = {
      url: input.externalUrl || null,
    };
  }

  await notion.pages.update({
    page_id: pageId,
    // @ts-expect-error - Properties type is complex, but this structure works
    properties,
  });
}

/**
 * Archive a prototype (soft delete)
 */
export async function archivePrototype(pageId: string): Promise<void> {
  await notion.pages.update({
    page_id: pageId,
    properties: {
      Archived: {
        checkbox: true,
      },
    },
  });
}

/**
 * Query the database using dataSources.query (SDK v5+)
 */
async function queryDatabase(options: {
  filter?: Record<string, unknown>;
  sorts?: Array<{ property: string; direction: "ascending" | "descending" }>;
  startCursor?: string;
}): Promise<QueryDataSourceResponse> {
  const dataSourceId = await getDataSourceId();

  return notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: options.filter as Parameters<
      typeof notion.dataSources.query
    >[0]["filter"],
    sorts: options.sorts,
    start_cursor: options.startCursor,
  });
}

/**
 * Find a prototype by username/slug
 * Returns the Notion page ID if found, null otherwise
 */
export async function findPrototype(
  username: string,
  slug: string,
): Promise<{ pageId: string; metadata: PrototypeMetadata } | null> {
  const prototypeId = `${username}/${slug}`;

  const response = await queryDatabase({
    filter: {
      property: "ID",
      rich_text: {
        equals: prototypeId,
      },
    },
  });

  const pageResults = response.results.filter(
    (r): r is PageObjectResponse => "properties" in r,
  );

  if (pageResults.length === 0) {
    return null;
  }

  const page = pageResults[0];
  return {
    pageId: page.id,
    metadata: extractMetadataFromPage(page),
  };
}

/**
 * Get all non-archived prototypes from Notion
 */
export async function getAllPrototypes(): Promise<PrototypeMetadata[]> {
  const allResults: PageObjectResponse[] = [];
  let cursor: string | undefined = undefined;

  // Paginate through all results
  do {
    const response = await queryDatabase({
      filter: {
        property: "Archived",
        checkbox: {
          equals: false,
        },
      },
      sorts: [
        {
          property: "Updated at",
          direction: "descending",
        },
      ],
      startCursor: cursor,
    });

    const pageResults = response.results.filter(
      (r): r is PageObjectResponse => "properties" in r,
    );
    allResults.push(...pageResults);
    cursor = response.has_more
      ? (response.next_cursor ?? undefined)
      : undefined;
  } while (cursor);

  return allResults.map(extractMetadataFromPage);
}

/**
 * Get all prototypes including archived ones (for sync comparison)
 */
export async function getAllPrototypesIncludingArchived(): Promise<
  PrototypeMetadata[]
> {
  const allResults: PageObjectResponse[] = [];
  let cursor: string | undefined = undefined;

  do {
    const response = await queryDatabase({
      startCursor: cursor,
    });

    const pageResults = response.results.filter(
      (r): r is PageObjectResponse => "properties" in r,
    );
    allResults.push(...pageResults);
    cursor = response.has_more
      ? (response.next_cursor ?? undefined)
      : undefined;
  } while (cursor);

  return allResults.map(extractMetadataFromPage);
}

/**
 * Extract metadata from a Notion page object
 */
function extractMetadataFromPage(page: PageObjectResponse): PrototypeMetadata {
  const props = page.properties;

  // Helper to extract text from rich_text property
  const getText = (prop: unknown): string => {
    const richTextProp = prop as { rich_text?: Array<{ plain_text: string }> };
    return richTextProp?.rich_text?.[0]?.plain_text || "";
  };

  // Helper to extract title
  const getTitle = (prop: unknown): string => {
    const titleProp = prop as { title?: Array<{ plain_text: string }> };
    return titleProp?.title?.[0]?.plain_text || "";
  };

  // Helper to extract date
  const getDate = (prop: unknown): string => {
    const dateProp = prop as { date?: { start: string } };
    return dateProp?.date?.start || new Date().toISOString();
  };

  // Helper to extract URL
  const getUrl = (prop: unknown): string | undefined => {
    const urlProp = prop as { url?: string | null };
    return urlProp?.url || undefined;
  };

  // Helper to extract checkbox
  const getCheckbox = (prop: unknown): boolean => {
    const checkboxProp = prop as { checkbox?: boolean };
    return checkboxProp?.checkbox || false;
  };

  // Helper to extract select
  const getSelect = (prop: unknown): string | undefined => {
    const selectProp = prop as { select?: { name: string } | null };
    return selectProp?.select?.name || undefined;
  };

  // Helper to extract number
  const getNumber = (prop: unknown): number | undefined => {
    const numberProp = prop as { number?: number | null };
    return numberProp?.number ?? undefined;
  };

  // ID is rich_text containing "username/slug", Name is the title
  const id = getText(props.ID);
  const [username, slug] = id.split("/");

  return {
    id,
    username: username || "",
    slug: slug || getText(props.Slug),
    title: getTitle(props.Name) || slug || "Untitled",
    description: getText(props.Description) || undefined,
    externalUrl: getUrl(props["External URL"]),
    createdAt: getDate(props["Created at"]),
    updatedAt: getDate(props["Updated at"]),
    archived: getCheckbox(props.Archived),
    // Version fields
    versionGroupId: getText(props["Version Group ID"]) || undefined,
    version: getNumber(props.Version),
    branchedFromVersion: getNumber(props["Branched From Version"]),
  };
}

/**
 * Batch create prototypes (with rate limiting)
 * Notion API rate limit is ~3 requests/second average
 */
export async function batchCreatePrototypes(
  prototypes: CreatePrototypeInput[],
  onProgress?: (completed: number, total: number) => void,
): Promise<{ created: number; errors: string[] }> {
  const errors: string[] = [];
  let created = 0;

  for (let i = 0; i < prototypes.length; i++) {
    const proto = prototypes[i];
    try {
      await createPrototype(proto);
      created++;
    } catch (error) {
      const errorMsg = `Failed to create ${proto.username}/${proto.slug}: ${error}`;
      errors.push(errorMsg);
      console.error(errorMsg);
    }

    onProgress?.(i + 1, prototypes.length);

    // Rate limiting: wait 350ms between requests (roughly 3 req/sec)
    if (i < prototypes.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 350));
    }
  }

  return { created, errors };
}
