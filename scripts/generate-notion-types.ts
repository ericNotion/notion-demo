#!/usr/bin/env bun
/**
 * Generate Zod schemas and TypeScript types from the Notion Prototypes database.
 *
 * This script fetches the database schema from Notion and generates:
 * - Zod schemas for validation
 * - TypeScript types inferred from the schemas
 *
 * Usage:
 *   bun run scripts/generate-notion-types.ts
 *
 * Required environment variables:
 *   - NOTION_TOKEN: Notion integration token
 *   - NOTION_PROTOTYPES_DATABASE_ID: Notion database ID
 *
 * Output:
 *   - src/lib/notion/generated-schemas.ts
 */

import { promises as fs } from "fs";
import path from "path";
import { notion } from "../src/lib/notion/client";

const OUTPUT_PATH = path.join(
  process.cwd(),
  "src/lib/notion/generated-schemas.ts",
);

// Notion property types mapped to Zod schema strings
const NOTION_TYPE_TO_ZOD: Record<string, string> = {
  title: "z.string()",
  text: "z.string().optional()",
  rich_text: "z.string().optional()",
  number: "z.number().optional()",
  checkbox: "z.boolean().optional()",
  date: "z.string().optional()", // ISO date string
  url: "z.string().url().optional().nullable()",
  email: "z.string().email().optional()",
  phone_number: "z.string().optional()",
  select: "z.string().optional()",
  multi_select: "z.array(z.string()).optional()",
  person: "z.string().optional()", // Person name or ID
  people: "z.array(z.string()).optional()",
  files: "z.array(z.string()).optional()",
  relation: "z.array(z.string()).optional()",
  formula: "z.unknown().optional()",
  rollup: "z.unknown().optional()",
  created_time: "z.string().optional()",
  created_by: "z.string().optional()",
  last_edited_time: "z.string().optional()",
  last_edited_by: "z.string().optional()",
  status: "z.string().optional()",
  unique_id: "z.string().optional()",
};

interface NotionPropertySchema {
  name: string;
  type: string;
  description?: string;
}

/**
 * Convert a Notion property name to a valid TypeScript identifier
 */
function toIdentifier(name: string): string {
  // Remove "userDefined:" prefix if present
  const cleanName = name.replace(/^userDefined:/, "");
  // Convert to camelCase
  return cleanName
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/\s+/g, "")
    .replace(/^(.)/, (_, c) => c.toLowerCase());
}

/**
 * Convert a Notion property name to a schema key (preserves original for mapping)
 */
function toSchemaKey(name: string): string {
  // Handle special "userDefined:" prefix
  if (name.startsWith("userDefined:")) {
    return name.replace("userDefined:", "");
  }
  return name;
}

/**
 * Fetch the database schema from Notion using the Data Sources API (SDK v5+)
 *
 * In SDK v5, properties live on Data Sources, not Databases.
 * 1. First we retrieve the database to get the data source ID(s)
 * 2. Then we retrieve the data source to get the schema/properties
 */
async function fetchDatabaseSchema(): Promise<NotionPropertySchema[]> {
  const databaseId = process.env.NOTION_PROTOTYPES_DATABASE_ID;
  if (!databaseId) {
    throw new Error("NOTION_PROTOTYPES_DATABASE_ID not set");
  }

  // Step 1: Get data source ID from database
  console.log("   Retrieving database to get data source ID...");
  const db = await notion.databases.retrieve({ database_id: databaseId });

  const dataSources = (
    db as { data_sources?: Array<{ id: string; name: string }> }
  ).data_sources;
  if (!dataSources || dataSources.length === 0) {
    throw new Error("No data sources found on database");
  }

  const dataSourceId = dataSources[0].id;
  console.log(`   Found data source: ${dataSources[0].name} (${dataSourceId})`);

  // Step 2: Retrieve the data source to get its schema
  console.log("   Retrieving data source schema...");
  const dataSource = await notion.dataSources.retrieve({
    data_source_id: dataSourceId,
  });

  // The schema is in the 'properties' field of the data source response
  const properties = (
    dataSource as {
      properties?: Record<
        string,
        { name: string; type: string; description?: string }
      >;
    }
  ).properties;
  if (!properties) {
    throw new Error("No properties found on data source");
  }

  return Object.entries(properties).map(([key, prop]) => ({
    name: prop.name || key,
    type: prop.type,
    description: prop.description,
  }));
}

/**
 * Generate the Zod schema code
 */
function generateSchemaCode(properties: NotionPropertySchema[]): string {
  const schemaFields: string[] = [];
  const fieldMappings: string[] = [];

  for (const prop of properties) {
    const zodType = NOTION_TYPE_TO_ZOD[prop.type] || "z.unknown().optional()";
    const schemaKey = toSchemaKey(prop.name);
    const tsKey = toIdentifier(prop.name);

    // Add JSDoc comment if there's a description
    const comment = prop.description ? `  /** ${prop.description} */\n` : "";

    schemaFields.push(`${comment}  ${JSON.stringify(schemaKey)}: ${zodType},`);

    // Track the mapping from Notion name to TS identifier
    if (schemaKey !== tsKey) {
      fieldMappings.push(`  "${schemaKey}": "${tsKey}",`);
    }
  }

  return schemaFields.join("\n");
}

/**
 * Generate the full output file
 */
function generateOutputFile(properties: NotionPropertySchema[]): string {
  const schemaCode = generateSchemaCode(properties);

  // Build the property name mapping
  const mappings: Record<string, string> = {};
  for (const prop of properties) {
    const schemaKey = toSchemaKey(prop.name);
    const tsKey = toIdentifier(prop.name);
    mappings[schemaKey] = tsKey;
  }

  // Build reverse mapping (for converting from camelCase back to Notion names)
  const reverseMappings: Record<string, string> = {};
  for (const prop of properties) {
    const schemaKey = toSchemaKey(prop.name);
    const tsKey = toIdentifier(prop.name);
    if (schemaKey !== tsKey) {
      reverseMappings[tsKey] = schemaKey;
    }
  }

  return `/**
 * AUTO-GENERATED FILE - DO NOT EDIT
 *
 * Generated by: scripts/generate-notion-types.ts
 * Generated at: ${new Date().toISOString()}
 *
 * To regenerate, run: bun run notion:types
 */

import { z } from "zod";

/**
 * Raw schema matching Notion database property names exactly.
 * Use this for parsing webhook payloads and Notion API responses.
 */
export const NotionPrototypeRawSchema = z.object({
${schemaCode}
});

/**
 * Type for raw Notion prototype data (matches database property names)
 */
export type NotionPrototypeRaw = z.infer<typeof NotionPrototypeRawSchema>;

/**
 * Mapping from Notion property names to camelCase TypeScript keys
 */
export const NOTION_TO_TS_KEYS = ${JSON.stringify(mappings, null, 2)} as const;

/**
 * Mapping from camelCase TypeScript keys to Notion property names
 */
export const TS_TO_NOTION_KEYS = ${JSON.stringify(reverseMappings, null, 2)} as const;

/**
 * Normalized prototype schema with camelCase keys.
 * Use this for internal application code.
 */
export const PrototypeSchema = z.object({
  /** Unique identifier in format "username/slug" */
  id: z.string(),
  /** The username (directory owner) */
  username: z.string(),
  /** The prototype slug (directory name) */
  slug: z.string(),
  /** Display title */
  title: z.string(),
  /** Optional description */
  description: z.string().optional(),
  /** External URL for linked prototypes */
  externalUrl: z.string().url().optional().nullable(),
  /** ISO date string for creation time */
  createdAt: z.string(),
  /** ISO date string for last update */
  updatedAt: z.string(),
  /** Whether the prototype is archived */
  archived: z.boolean().optional(),
  /** Author name (from Notion person property) */
  author: z.string().optional(),
  /** Whether this is a template */
  isTemplate: z.boolean().optional(),
  /** Version group ID for related versions */
  versionGroupId: z.string().optional(),
  /** Version number */
  version: z.number().optional(),
  /** Version this was branched from */
  branchedFromVersion: z.number().optional(),
});

/**
 * Normalized prototype type with camelCase keys
 */
export type Prototype = z.infer<typeof PrototypeSchema>;

/**
 * Schema for creating a new prototype in Notion
 */
export const CreatePrototypeSchema = z.object({
  username: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  externalUrl: z.string().url().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  notionUserId: z.string().uuid().optional(),
  isTemplate: z.boolean().optional(),
  versionGroupId: z.string().optional(),
  version: z.number().int().positive().optional(),
  branchedFromVersion: z.number().int().positive().optional(),
});

export const CreatePrototypeInputSchema = CreatePrototypeSchema;

export type CreatePrototypeInput = z.infer<typeof CreatePrototypeInputSchema>;

/**
 * Schema for updating an existing prototype
 */
export const UpdatePrototypeSchema = z.object({
  username: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().optional(),
  description: z.string().optional(),
  externalUrl: z.string().url().optional(),
  updatedAt: z.string().optional(),
});

export const UpdatePrototypeInputSchema = UpdatePrototypeSchema;

export type UpdatePrototypeInput = z.infer<typeof UpdatePrototypeInputSchema>;

export function validateCreateInput(input: unknown): CreatePrototypeInput {
  return CreatePrototypeInputSchema.parse(input);
}

export function safeValidateCreateInput(input: unknown) {
  return CreatePrototypeInputSchema.safeParse(input);
}

export function validateUpdateInput(input: unknown): UpdatePrototypeInput {
  return UpdatePrototypeInputSchema.parse(input);
}

export function safeValidateUpdateInput(input: unknown) {
  return UpdatePrototypeInputSchema.safeParse(input);
}

/**
 * Schema for Notion webhook payload.
 * Notion automations can send properties in various formats.
 */
export const NotionWebhookPayloadSchema = z.object({
  // Properties can come as raw values or Notion property objects
  Name: z.union([
    z.string(),
    z.object({ title: z.array(z.object({ plain_text: z.string() })).optional() }),
  ]).optional(),
  ID: z.union([
    z.string(),
    z.object({ rich_text: z.array(z.object({ plain_text: z.string() })).optional() }),
  ]).optional(),
  Description: z.union([
    z.string(),
    z.object({ rich_text: z.array(z.object({ plain_text: z.string() })).optional() }),
  ]).optional(),
  "External URL": z.union([
    z.string(),
    z.object({ url: z.string().nullable().optional() }),
  ]).optional(),
  Author: z.union([
    z.string(),
    z.object({ people: z.array(z.object({ name: z.string() })).optional() }),
  ]).optional(),
  Version: z.union([
    z.number(),
    z.object({ number: z.number().nullable().optional() }),
  ]).optional(),
  "Branched From Version": z.union([
    z.number(),
    z.object({ number: z.number().nullable().optional() }),
  ]).optional(),
  // Also support flat/alternative property names
  title: z.string().optional(),
  id: z.string().optional(),
  description: z.string().optional(),
  externalUrl: z.string().optional(),
  author: z.string().optional(),
  version: z.number().optional(),
  branchedFromVersion: z.number().optional(),
  username: z.string().optional(),
  slug: z.string().optional(),
}).passthrough(); // Allow additional properties

export type NotionWebhookPayload = z.infer<typeof NotionWebhookPayloadSchema>;

/**
 * Parse a Notion webhook payload and extract prototype data.
 * Handles various formats that Notion might send.
 */
export function parseWebhookPayload(payload: unknown): Prototype | null {
  const parsed = NotionWebhookPayloadSchema.safeParse(payload);
  if (!parsed.success) {
    console.error("Failed to parse webhook payload:", parsed.error);
    return null;
  }

  const data = parsed.data;

  // Extract ID (username/slug format)
  let id = "";
  if (typeof data.ID === "string") {
    id = data.ID;
  } else if (data.ID?.rich_text?.[0]?.plain_text) {
    id = data.ID.rich_text[0].plain_text;
  } else if (data.id) {
    id = data.id;
  }

  const [username, slug] = id.includes("/")
    ? id.split("/")
    : [data.username || "", data.slug || ""];

  if (!username || !slug) {
    return null;
  }

  // Extract title
  let title = "";
  if (typeof data.Name === "string") {
    title = data.Name;
  } else if (data.Name?.title?.[0]?.plain_text) {
    title = data.Name.title[0].plain_text;
  } else if (data.title) {
    title = data.title;
  }
  title = title || slug || "Untitled";

  // Extract description
  let description: string | undefined;
  if (typeof data.Description === "string") {
    description = data.Description;
  } else if (data.Description?.rich_text?.[0]?.plain_text) {
    description = data.Description.rich_text[0].plain_text;
  } else if (data.description) {
    description = data.description;
  }

  // Extract external URL
  let externalUrl: string | undefined;
  if (typeof data["External URL"] === "string") {
    externalUrl = data["External URL"];
  } else if (
    data["External URL"] &&
    typeof data["External URL"] === "object" &&
    "url" in data["External URL"]
  ) {
    externalUrl = data["External URL"].url || undefined;
  } else if (data.externalUrl) {
    externalUrl = data.externalUrl;
  }

  // Extract version info
  let version: number | undefined;
  if (typeof data.Version === "number") {
    version = data.Version;
  } else if (data.Version?.number != null) {
    version = data.Version.number;
  } else if (data.version != null) {
    version = data.version;
  }

  let branchedFromVersion: number | undefined;
  if (typeof data["Branched From Version"] === "number") {
    branchedFromVersion = data["Branched From Version"];
  } else if (data["Branched From Version"]?.number != null) {
    branchedFromVersion = data["Branched From Version"].number;
  } else if (data.branchedFromVersion != null) {
    branchedFromVersion = data.branchedFromVersion;
  }

  // Extract author
  let author: string | undefined;
  if (typeof data.Author === "string") {
    author = data.Author;
  } else if (data.Author?.people?.[0]?.name) {
    author = data.Author.people[0].name;
  } else if (data.author) {
    author = data.author;
  }

  return {
    id,
    username,
    slug,
    title,
    description,
    externalUrl,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author,
    version,
    branchedFromVersion,
  };
}
`;
}

async function main() {
  console.log("🔄 Generating Notion types...");

  // Check environment variables
  if (!process.env.NOTION_TOKEN) {
    console.error("❌ NOTION_TOKEN not set");
    console.log(
      "   Set NOTION_TOKEN and NOTION_PROTOTYPES_DATABASE_ID to generate types",
    );
    process.exit(1);
  }

  if (!process.env.NOTION_PROTOTYPES_DATABASE_ID) {
    console.error("❌ NOTION_PROTOTYPES_DATABASE_ID not set");
    process.exit(1);
  }

  try {
    // Fetch schema from Notion
    console.log("📥 Fetching database schema from Notion...");
    const properties = await fetchDatabaseSchema();
    console.log(`   Found ${properties.length} properties`);

    // Generate output
    console.log("📝 Generating TypeScript code...");
    const output = generateOutputFile(properties);

    // Write to file
    await fs.writeFile(OUTPUT_PATH, output, "utf-8");
    console.log(`✅ Generated: ${OUTPUT_PATH}`);

    // Format with prettier if available
    try {
      const { execSync } = await import("child_process");
      execSync(`bunx prettier --write "${OUTPUT_PATH}"`, { stdio: "inherit" });
      console.log("✨ Formatted with Prettier");
    } catch {
      // Prettier not available, skip formatting
    }
  } catch (error) {
    console.error("❌ Error generating types:", error);
    process.exit(1);
  }
}

if (import.meta.main) {
  main();
}
