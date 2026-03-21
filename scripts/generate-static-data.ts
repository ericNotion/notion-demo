#!/usr/bin/env bun
/**
 * Generate static data for the prototype playground.
 *
 * Data Sources:
 * - Production (NOTION_TOKEN set): Fetches from Notion database
 * - Local development: Reads from filesystem + JSON files
 *
 * Filesystem sources (local dev):
 * - metadata.json files: title, description, externalUrl
 * - prototype-creation-dates.json: createdAt timestamps
 * - prototype-timestamps.json: updatedAt timestamps
 *
 * The output is written to src/data/static-data.json for use by the frontend.
 */

import { createHash } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import {
  getAllPrototypes,
  isPrototypesDbConfigured,
  type PrototypeMetadata,
} from "../src/lib/notion"; // @ts-expect-error removed in fork
import { Prototype, UserPrototypes } from "../src/types/prototypes";

export type StaticData = {
  users: UserPrototypes[];
  currentUsername?: string;
};

async function getSourceRootAsync(): Promise<string> {
  try {
    const playgroundPath = path.join(process.cwd(), ".playground");
    const content = await fs.readFile(playgroundPath, "utf-8");
    const match = content.match(/^SOURCE_PATH=(.+)$/m);
    return match?.[1]?.trim() || process.cwd();
  } catch {
    return process.cwd();
  }
}

function getDataDirectory(rootDir: string): string {
  return path.join(rootDir, "src/data");
}

type CreationDates = Record<string, string>;

/**
 * Fetch prototype data from Notion and transform to UserPrototypes format
 */
async function generateFromNotion(): Promise<UserPrototypes[]> {
  console.log(" 🔄 Fetching data from Notion...");

  const notionPrototypes = await getAllPrototypes();
  console.log(` ✅ Fetched ${notionPrototypes.length} prototypes from Notion`);

  // Group by username
  const byUser = new Map<string, PrototypeMetadata[]>();
  for (const proto of notionPrototypes) {
    const existing = byUser.get(proto.username) || [];
    existing.push(proto);
    byUser.set(proto.username, existing);
  }

  // Transform to UserPrototypes format
  const users: UserPrototypes[] = [];
  for (const [username, prototypes] of byUser) {
    const transformedPrototypes: Prototype[] = prototypes
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        description: p.description,
        createdAt: new Date(p.createdAt),
        updatedAt: new Date(p.updatedAt),
        externalUrl: p.externalUrl,
        // Version fields
        versionGroupId: p.versionGroupId,
        version: p.version,
        branchedFromVersion: p.branchedFromVersion,
      }))
      .sort((a, b) => {
        // Sort by updatedAt (most recent first)
        const dateComparison =
          (b.updatedAt?.getTime() ?? b.createdAt.getTime()) -
          (a.updatedAt?.getTime() ?? a.createdAt.getTime());
        if (dateComparison === 0) {
          return a.slug.localeCompare(b.slug);
        }
        return dateComparison;
      });

    users.push({ username, prototypes: transformedPrototypes });
  }

  return users.sort((a, b) => a.username.localeCompare(b.username));
}

/**
 * Load prototype creation dates from the centralized file
 */
async function loadCreationDates(): Promise<CreationDates> {
  const sourceRoot = await getSourceRootAsync();
  const filePath = path.join(
    getDataDirectory(sourceRoot),
    "prototype-creation-dates.json",
  );
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch {
    return {};
  }
}

/**
 * Get prototype metadata from its metadata.json file
 * Reads title, description, externalUrl, and version fields
 */
async function getPrototypeMetadata(protoDir: string, fallbackName: string) {
  const metadataPath = path.join(protoDir, "metadata.json");
  try {
    const data = await fs.readFile(metadataPath, "utf-8");
    const {
      title,
      description,
      externalUrl,
      versionGroupId,
      version,
      branchedFromVersion,
    } = JSON.parse(data);
    return {
      title: title || fallbackName,
      description: description || undefined,
      externalUrl: externalUrl || undefined,
      // Version fields
      versionGroupId: versionGroupId || undefined,
      version: version || undefined,
      branchedFromVersion: branchedFromVersion || undefined,
    };
  } catch {
    return { title: fallbackName };
  }
}

async function getUserPrototypes(
  userDir: string,
  username: string,
  creationDates: CreationDates,
): Promise<Prototype[]> {
  let prototypes: Prototype[] = [];
  try {
    const userEntries = await fs.readdir(userDir, { withFileTypes: true });
    const protoResults = await Promise.all(
      userEntries
        .filter((entry) => entry.isDirectory())
        .map(async (proto) => {
          const protoDir = path.join(userDir, proto.name);
          const pagePath = path.join(protoDir, "page.tsx");
          const metadata = await getPrototypeMetadata(protoDir, proto.name);

          // Include if has page.tsx OR has externalUrl in metadata
          const hasPageFile = await fs
            .access(pagePath)
            .then(() => true)
            .catch(() => false);
          const isExternalPrototype = Boolean(metadata.externalUrl);

          if (!hasPageFile && !isExternalPrototype) {
            return null;
          }

          // Build the prototype key for timestamp lookups
          const protoKey = `${username}/${proto.name}`;

          // Get createdAt from centralized file
          let createdAt: Date;
          if (creationDates[protoKey]) {
            createdAt = new Date(creationDates[protoKey]);
          } else {
            // Fall back to filesystem if not in creation dates file
            try {
              const stat = await fs.stat(protoDir);
              createdAt = stat.birthtime;
            } catch {
              createdAt = new Date();
            }
          }

          // Locally, we use createdAt for sorting (updatedAt comes from Notion in production)
          const result: Prototype = {
            slug: proto.name,
            title: metadata.title,
            description: metadata.description,
            createdAt,
            updatedAt: createdAt,
            externalUrl: metadata.externalUrl,
            // Version fields
            versionGroupId: metadata.versionGroupId,
            version: metadata.version,
            branchedFromVersion: metadata.branchedFromVersion,
          };
          return result;
        }),
    );
    prototypes = protoResults
      .filter((p): p is Prototype => p !== null)
      .sort((a, b) => {
        // Sort by updatedAt date (most recently updated first)
        const dateComparison =
          (b.updatedAt?.getTime() ?? b.createdAt.getTime()) -
          (a.updatedAt?.getTime() ?? a.createdAt.getTime());
        // Tie-breaker: alphabetical by slug
        if (dateComparison === 0) {
          return a.slug.localeCompare(b.slug);
        }
        return dateComparison;
      });
  } catch {}
  return prototypes;
}

// Reserved directory names that are not user directories
const RESERVED_DIRS = new Set(["(root)", "(nds)", "(templates)", "api"]);

async function getAllUserPrototypes(
  appDir: string,
  creationDates: CreationDates,
): Promise<UserPrototypes[]> {
  const entries = await fs.readdir(appDir, { withFileTypes: true });

  // User directories are direct children of src/app
  // Filter out reserved directories, route groups, and root files
  const userDirs = entries.filter(
    (entry) =>
      entry.isDirectory() &&
      !RESERVED_DIRS.has(entry.name) &&
      !entry.name.startsWith("(") &&
      !entry.name.startsWith("."),
  );

  const userResults = await Promise.all(
    userDirs.map(async (userDir) => {
      const username = userDir.name;
      const userPath = path.join(appDir, username);
      const prototypes = await getUserPrototypes(
        userPath,
        username,
        creationDates,
      );
      return { username, prototypes };
    }),
  );

  // Also include the (templates)/templates directory as a "templates" user
  const templatesPath = path.join(appDir, "(templates)", "templates");
  try {
    await fs.access(templatesPath);
    const templatePrototypes = await getUserPrototypes(
      templatesPath,
      "templates",
      creationDates,
    );
    if (templatePrototypes.length > 0) {
      userResults.push({
        username: "templates",
        prototypes: templatePrototypes,
      });
    }
  } catch {
    // Templates directory doesn't exist, skip
  }

  return userResults;
}

async function generateContentHash(appDir: string): Promise<string> {
  const hash = createHash("sha256");
  const sourceRoot = await getSourceRootAsync();

  try {
    const entries = await fs.readdir(appDir, { withFileTypes: true });
    const sortedEntries = entries.sort((a, b) => a.name.localeCompare(b.name));

    for (const entry of sortedEntries) {
      if (
        entry.isDirectory() &&
        !RESERVED_DIRS.has(entry.name) &&
        !entry.name.startsWith("(") &&
        !entry.name.startsWith(".")
      ) {
        const userDir = path.join(appDir, entry.name);
        try {
          const userEntries = await fs.readdir(userDir, {
            withFileTypes: true,
          });

          const protoDirs = userEntries.filter((e) => e.isDirectory());
          hash.update(`${entry.name}:${protoDirs.length}`);

          for (const protoDir of protoDirs) {
            const metadataPath = path.join(
              userDir,
              protoDir.name,
              "metadata.json",
            );
            try {
              const metadataContent = await fs.readFile(metadataPath, "utf-8");
              hash.update(`${protoDir.name}:metadata:${metadataContent}`);
            } catch {
              hash.update(`${protoDir.name}:no-metadata`);
            }
          }
        } catch {}
      }
    }
  } catch {}

  // Also hash templates
  const templatesPath = path.join(appDir, "(templates)", "templates");
  try {
    const templatesEntries = await fs.readdir(templatesPath, {
      withFileTypes: true,
    });
    const templateProtoDirs = templatesEntries.filter((e) => e.isDirectory());
    hash.update(`templates:${templateProtoDirs.length}`);
    for (const protoDir of templateProtoDirs) {
      const metadataPath = path.join(
        templatesPath,
        protoDir.name,
        "metadata.json",
      );
      try {
        const metadataContent = await fs.readFile(metadataPath, "utf-8");
        hash.update(`${protoDir.name}:metadata:${metadataContent}`);
      } catch {
        hash.update(`${protoDir.name}:no-metadata`);
      }
    }
  } catch {}

  // Hash the timestamps files as well - changes to these should trigger regeneration
  try {
    const creationDatesContent = await fs.readFile(
      path.join(getDataDirectory(sourceRoot), "prototype-creation-dates.json"),
      "utf-8",
    );
    hash.update(`creation-dates:${creationDatesContent}`);
  } catch {}

  return hash.digest("hex");
}

async function generateStaticData(): Promise<void> {
  console.log(" 📦 Generating static data...");

  const rootDir = await getSourceRootAsync();
  const appDir = path.join(rootDir, "src/app");
  const outputPath = path.join(getDataDirectory(rootDir), "static-data.json");

  // Only use Notion as the data source for production builds on Vercel
  const useNotion =
    isPrototypesDbConfigured() && process.env.VERCEL_ENV === "production";

  if (useNotion) {
    console.log(" 💾 Data source: Notion database");

    // Always regenerate when using Notion (no caching)
    const users = await generateFromNotion();

    // Merge filesystem-discovered templates that aren't in Notion yet
    const templatesPath = path.join(appDir, "(templates)", "templates");
    try {
      await fs.access(templatesPath);
      const creationDates = await loadCreationDates();
      const fsTemplates = await getUserPrototypes(
        templatesPath,
        "templates",
        creationDates,
      );
      const notionTemplatesUser = users.find((u) => u.username === "templates");
      const notionSlugs = new Set(
        notionTemplatesUser?.prototypes.map((p) => p.slug) ?? [],
      );
      const newTemplates = fsTemplates.filter((t) => !notionSlugs.has(t.slug));
      if (newTemplates.length > 0) {
        if (notionTemplatesUser) {
          notionTemplatesUser.prototypes.push(...newTemplates);
        } else {
          users.push({ username: "templates", prototypes: newTemplates });
        }
        console.log(
          ` 🆕 Merged ${newTemplates.length} new template(s) from filesystem`,
        );
      }
    } catch {
      // Templates directory doesn't exist, skip
    }

    const staticData: StaticData = {
      users,
      currentUsername: undefined,
    };

    // Ensure the data directory exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    // Write the data with pretty formatting
    const jsonReplacer = (_key: string, value: unknown) => {
      if (value instanceof Date) {
        return value.toISOString();
      }
      return value;
    };
    await fs.writeFile(
      outputPath,
      JSON.stringify(staticData, jsonReplacer, 2) + "\n",
      "utf-8",
    );

    const protoCount = users.reduce((sum, u) => sum + u.prototypes.length, 0);
    console.log(
      ` 📝 Generated static data for ${users.length} users (${protoCount} prototypes)`,
    );
    console.log(` 📝 Written to: ${outputPath}`);
    return;
  }

  // Local development: use filesystem
  console.log(" 💾 Data source: Filesystem (local development)");

  // Verify the app directory exists
  try {
    await fs.access(appDir);
  } catch {
    throw new Error(
      `Cannot find src/app directory at: ${appDir}\nCurrent working directory: ${rootDir}`,
    );
  }

  const cacheFile = path.join(rootDir, ".next/cache/static-data-hash.txt");

  // Check if we can skip generation by comparing content hash
  const currentHash = await generateContentHash(appDir);
  let skipGeneration = false;

  try {
    const cachedHash = await fs.readFile(cacheFile, "utf-8");
    if (
      cachedHash.trim() === currentHash &&
      (await fs
        .access(outputPath)
        .then(() => true)
        .catch(() => false))
    ) {
      console.log(" ➡️ Static data unchanged, skipping generation");
      skipGeneration = true;
    }
  } catch {
    // No cache file or can't read it, proceed with generation
  }

  if (!skipGeneration) {
    // Load centralized creation dates
    const creationDates = await loadCreationDates();

    console.log(
      ` ✅ Loaded ${Object.keys(creationDates).length} creation dates`,
    );

    const users = await getAllUserPrototypes(appDir, creationDates);

    // Sort users alphabetically by username for consistent output
    const sortedUsers = users.sort((a, b) =>
      a.username.localeCompare(b.username),
    );

    const staticData: StaticData = {
      users: sortedUsers,
      currentUsername: undefined,
    };

    // Ensure the data directory exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    // Write the data with pretty formatting
    const jsonReplacer = (_key: string, value: unknown) => {
      if (value instanceof Date) {
        return value.toISOString();
      }
      return value;
    };
    await fs.writeFile(
      outputPath,
      JSON.stringify(staticData, jsonReplacer, 2) + "\n",
      "utf-8",
    );

    // Update cache hash
    await fs.mkdir(path.dirname(cacheFile), { recursive: true });
    await fs.writeFile(cacheFile, currentHash, "utf-8");

    console.log(` 📝 Generated static data for ${users.length} users`);
    console.log(` 📝 Written to: ${outputPath}`);
  }
}

// Run the script if called directly
if (import.meta.main) {
  generateStaticData().catch((error) => {
    console.error(" ❌ Error generating static data:", error);
    process.exit(1);
  });
}

export { generateStaticData };
