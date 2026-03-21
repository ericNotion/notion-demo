#!/usr/bin/env bun
/**
 * Sync prototype metadata to Notion database.
 *
 * This script runs in GitHub Actions after a PR merges to main.
 * It creates/updates Notion records for prototypes owned by the PR author,
 * and archives records for deleted prototypes.
 *
 * Required environment variables (in CI):
 * - GITHUB_TOKEN: GitHub API token (provided automatically in Actions)
 * - GITHUB_SHA: The commit SHA (provided automatically in Actions)
 * - GITHUB_REPOSITORY: The repository (e.g., "owner/repo")
 * - NOTION_TOKEN: Notion integration token
 * - NOTION_PROTOTYPES_DATABASE_ID: Notion database ID for prototypes
 *
 * Local testing options:
 * - --dry-run: Show what would be synced without making changes
 * - --test-user=USERNAME: Simulate a specific GitHub username
 *
 * Examples:
 *   NOTION_TOKEN=xxx NOTION_PROTOTYPES_DATABASE_ID=xxx bun run scripts/sync-to-notion.ts --dry-run --test-user=brianlovin
 */

import { execSync } from "child_process";
import { promises as fs } from "fs";
import path from "path";
import {
  archivePrototype,
  createPrototype,
  findPrototype,
  getAllPrototypesIncludingArchived,
  isPrototypesDbConfigured,
  updatePrototype,
  type CreatePrototypeInput,
} from "../src/lib/notion";
import {
  loadGitHubUsernames,
  loadNotionUserIds,
  normalizeUuid,
} from "../src/lib/notion/users";

const DATA_DIR = path.join(process.cwd(), "src/data");
const APP_DIR = path.join(process.cwd(), "src/app");

// Top-level directories in src/app that are NOT user prototype directories
const EXCLUDED_APP_DIRECTORIES = ["api", "lib", "components", "auth"];

// Parse command line arguments
const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const TEST_USER_ARG = args.find((a) => a.startsWith("--test-user="));
const TEST_USER = TEST_USER_ARG ? TEST_USER_ARG.split("=")[1] : null;
const FORCE_PROTOTYPES_ARG = args.find((a) =>
  a.startsWith("--force-prototypes="),
);
const FORCE_PROTOTYPES = FORCE_PROTOTYPES_ARG
  ? FORCE_PROTOTYPES_ARG.split("=")[1].split(",")
  : null;

interface PrototypeMetadataJson {
  title?: string;
  description?: string;
  externalUrl?: string;
  // Version fields
  versionGroupId?: string;
  version?: number;
  branchedFromVersion?: number;
}

/**
 * Load the prototype creation dates for createdAt values
 */
async function loadCreationDates(): Promise<Record<string, string>> {
  const datesPath = path.join(DATA_DIR, "prototype-creation-dates.json");
  try {
    const content = await fs.readFile(datesPath, "utf-8");
    return JSON.parse(content);
  } catch {
    return {};
  }
}

/**
 * Read metadata.json for a prototype
 */
async function readPrototypeMetadata(
  username: string,
  slug: string,
): Promise<PrototypeMetadataJson | null> {
  // Handle templates special case
  const metadataPath =
    username === "templates"
      ? path.join(APP_DIR, "(templates)", "templates", slug, "metadata.json")
      : path.join(APP_DIR, username, slug, "metadata.json");

  try {
    const content = await fs.readFile(metadataPath, "utf-8");
    return JSON.parse(content);
  } catch {
    return null;
  }
}

/**
 * Check if a prototype directory exists and is a valid prototype.
 * A prototype is valid if it has page.tsx OR metadata.json with an externalUrl.
 */
async function prototypeExists(
  username: string,
  slug: string,
): Promise<boolean> {
  const protoPath =
    username === "templates"
      ? path.join(APP_DIR, "(templates)", "templates", slug)
      : path.join(APP_DIR, username, slug);

  try {
    const stat = await fs.stat(protoPath);
    if (!stat.isDirectory()) return false;

    // Check for page.tsx (local prototype)
    const pagePath = path.join(protoPath, "page.tsx");
    try {
      await fs.stat(pagePath);
      return true;
    } catch {
      // No page.tsx, check for external prototype
    }

    // Check for metadata.json with externalUrl (external prototype)
    const metadata = await readPrototypeMetadata(username, slug);
    return Boolean(metadata?.externalUrl);
  } catch {
    return false;
  }
}

/**
 * Get all valid prototype directories for a user (has page.tsx or externalUrl)
 */
async function getUserPrototypes(username: string): Promise<string[]> {
  const userDir =
    username === "templates"
      ? path.join(APP_DIR, "(templates)", "templates")
      : path.join(APP_DIR, username);

  try {
    const entries = await fs.readdir(userDir, { withFileTypes: true });
    const candidates = entries.filter(
      (e) =>
        e.isDirectory() &&
        !e.name.startsWith(".") &&
        !e.name.startsWith("(") &&
        !EXCLUDED_APP_DIRECTORIES.includes(e.name),
    );

    const validPrototypes: string[] = [];
    for (const entry of candidates) {
      if (await prototypeExists(username, entry.name)) {
        validPrototypes.push(entry.name);
      }
    }
    return validPrototypes;
  } catch {
    return [];
  }
}

/**
 * Get the PR author for the current commit using GitHub API
 */
async function getPRAuthor(): Promise<string | null> {
  const token = process.env.GITHUB_TOKEN;
  const sha = process.env.GITHUB_SHA;
  const repo = process.env.GITHUB_REPOSITORY;

  if (!token || !sha || !repo) {
    console.log("Missing GitHub environment variables, skipping PR lookup");
    return null;
  }

  try {
    const searchUrl = `https://api.github.com/repos/${repo}/commits/${sha}/pulls`;
    const searchResponse = await fetch(searchUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!searchResponse.ok) {
      console.log(
        `GitHub API error: ${searchResponse.status} ${searchResponse.statusText}`,
      );
      return null;
    }

    const pulls = await searchResponse.json();

    if (pulls.length === 0) {
      console.log("No PR found for commit, falling back to commit author");
      return getCommitAuthor();
    }

    const prAuthor = pulls[0].user.login;
    console.log(`Found PR author: ${prAuthor}`);
    return prAuthor;
  } catch (error) {
    console.error("Error fetching PR author:", error);
    return null;
  }
}

/**
 * Get the commit author as fallback when no PR is found
 */
function getCommitAuthor(): string | null {
  try {
    const email = execSync("git log -1 --format=%ae", {
      encoding: "utf-8",
    }).trim();

    const noreplyMatch = email.match(
      /(\d+\+)?([^@]+)@users\.noreply\.github\.com/,
    );
    if (noreplyMatch) {
      return noreplyMatch[2];
    }

    const username = email.split("@")[0];
    console.log(`Commit author email: ${email} -> username: ${username}`);
    return username;
  } catch {
    console.error("Could not determine commit author");
    return null;
  }
}

/**
 * Get list of changed files in the current commit
 */
function getChangedFiles(): string[] {
  try {
    const output = execSync("git diff --name-only HEAD~1 HEAD", {
      encoding: "utf-8",
    });
    return output.trim().split("\n").filter(Boolean);
  } catch {
    console.error("Could not get changed files");
    return [];
  }
}

/**
 * Check if the commit message contains [skip-update]
 */
function shouldSkipUpdate(): boolean {
  try {
    const message = execSync("git log -1 --format=%B", { encoding: "utf-8" });
    return message.includes("[skip-update]");
  } catch {
    return false;
  }
}

/**
 * Result of categorizing changed files by prototype
 */
interface ChangedPrototypes {
  all: Set<string>; // All changed prototypes
  withCodeChanges: Set<string>; // Prototypes with code file changes (not just metadata.json)
}

/**
 * Extract prototype paths from changed files and categorize by change type
 */
function extractChangedPrototypes(files: string[]): ChangedPrototypes {
  const all = new Set<string>();
  const withCodeChanges = new Set<string>();

  const userProtoPattern = /^src\/app\/([^/()]+)\/([^/]+)\//;
  const templateProtoPattern = /^src\/app\/\(templates\)\/templates\/([^/]+)\//;

  for (const file of files) {
    const userMatch = file.match(userProtoPattern);
    if (userMatch) {
      const [, username, slug] = userMatch;
      if (
        !username.startsWith("(") &&
        !EXCLUDED_APP_DIRECTORIES.includes(username) &&
        !EXCLUDED_APP_DIRECTORIES.includes(slug)
      ) {
        const protoKey = `${username}/${slug}`;
        all.add(protoKey);

        // Check if this is a code file (not metadata.json)
        if (!file.endsWith("metadata.json")) {
          withCodeChanges.add(protoKey);
        }
      }
      continue;
    }

    const templateMatch = file.match(templateProtoPattern);
    if (templateMatch) {
      const protoKey = `templates/${templateMatch[1]}`;
      all.add(protoKey);

      // Check if this is a code file (not metadata.json)
      if (!file.endsWith("metadata.json")) {
        withCodeChanges.add(protoKey);
      }
    }
  }

  return { all, withCodeChanges };
}

/**
 * Sync a single prototype to Notion
 */
async function syncPrototype(
  username: string,
  slug: string,
  creationDates: Record<string, string>,
  notionUserIds: Record<string, string>,
  now: string,
  isTemplate: boolean = false,
  shouldUpdateTimestamp: boolean = true,
): Promise<{ action: "created" | "updated" | "skipped"; reason?: string }> {
  const protoKey = `${username}/${slug}`;

  // Read metadata from filesystem
  const metadata = await readPrototypeMetadata(username, slug);
  const title = metadata?.title || slug;
  const description = metadata?.description;
  const externalUrl = metadata?.externalUrl;
  // Version fields
  const versionGroupId = metadata?.versionGroupId;
  const version = metadata?.version;
  const branchedFromVersion = metadata?.branchedFromVersion;

  // Check if prototype exists in Notion
  const existing = await findPrototype(username, slug);

  if (existing) {
    // Update existing record
    if (DRY_RUN) {
      return { action: "updated", reason: "dry run" };
    }

    await updatePrototype(existing.pageId, {
      username,
      slug,
      title,
      description,
      externalUrl,
      // Only include updatedAt when timestamp should be bumped
      updatedAt: shouldUpdateTimestamp ? now : undefined,
    });

    return { action: "updated" };
  } else {
    // Create new record
    const createdAt = creationDates[protoKey] || now;

    if (DRY_RUN) {
      return { action: "created", reason: "dry run" };
    }

    // Look up Notion user ID for the Author property
    const rawUserId = notionUserIds[username];
    const notionUserId = rawUserId
      ? (normalizeUuid(rawUserId) ?? undefined)
      : undefined;
    if (!notionUserId) {
      console.log(`    Note: No Notion user ID mapping for "${username}"`);
    }

    const input: CreatePrototypeInput = {
      username,
      slug,
      title,
      description,
      externalUrl,
      createdAt,
      updatedAt: now,
      notionUserId,
      isTemplate,
      // Version fields
      versionGroupId,
      version,
      branchedFromVersion,
    };

    await createPrototype(input);
    return { action: "created" };
  }
}

/**
 * Check for deleted prototypes and archive them
 */
async function archiveDeletedPrototypes(
  directoryOwner: string,
): Promise<string[]> {
  console.log("\nChecking for deleted prototypes...");

  // Get all prototypes for this user from Notion
  const allNotionPrototypes = await getAllPrototypesIncludingArchived();
  const userNotionPrototypes = allNotionPrototypes.filter(
    (p) => p.username === directoryOwner && !p.archived,
  );

  // Get all prototypes for this user from filesystem
  const filesystemPrototypes = await getUserPrototypes(directoryOwner);
  const filesystemSet = new Set(filesystemPrototypes);

  // Find prototypes that exist in Notion but not in filesystem
  const deletedPrototypes: string[] = [];

  for (const notionProto of userNotionPrototypes) {
    if (!filesystemSet.has(notionProto.slug)) {
      deletedPrototypes.push(`${notionProto.username}/${notionProto.slug}`);

      if (!DRY_RUN) {
        const found = await findPrototype(
          notionProto.username,
          notionProto.slug,
        );
        if (found) {
          await archivePrototype(found.pageId);
        }
      }
    }
  }

  return deletedPrototypes;
}

async function main() {
  console.log("=== Sync Prototypes to Notion ===\n");

  if (DRY_RUN) {
    console.log("DRY RUN MODE - no changes will be made\n");
  }
  if (TEST_USER) {
    console.log(`TEST MODE - simulating GitHub user: ${TEST_USER}\n`);
  }

  // Check Notion configuration
  if (!DRY_RUN && !isPrototypesDbConfigured()) {
    console.error("NOTION_TOKEN and NOTION_PROTOTYPES_DATABASE_ID must be set");
    process.exit(1);
  }

  // Check for skip flag
  if (shouldSkipUpdate()) {
    console.log("Commit message contains [skip-update], skipping Notion sync");
    return;
  }

  let allChangedPrototypes: Set<string>;
  let prototypesWithTimestampBump: Set<string>;
  let directoryOwner: string | null = null;

  if (FORCE_PROTOTYPES) {
    console.log("Force-sync mode: bypassing author lookup and git diff\n");
    console.log("Step 3: Finding changed prototypes...");
    console.log(`  Force-syncing: ${FORCE_PROTOTYPES.join(", ")}`);
    allChangedPrototypes = new Set(FORCE_PROTOTYPES);
    prototypesWithTimestampBump = new Set(FORCE_PROTOTYPES);
  } else {
    // Step 1: Get PR/commit author
    console.log("Step 1: Determining author...");
    const githubUsername = TEST_USER || (await getPRAuthor());

    if (!githubUsername) {
      console.log("Could not determine author, skipping sync");
      return;
    }
    console.log(`  GitHub username: ${githubUsername}\n`);

    // Step 2: Map to directory owner
    console.log("Step 2: Looking up directory mapping...");
    const usernameMap = await loadGitHubUsernames();
    directoryOwner = usernameMap[githubUsername];

    if (!directoryOwner) {
      console.log(`  No mapping found for GitHub user "${githubUsername}"`);
      console.log("  Add this user to src/data/users.json");
      console.log("  Skipping Notion sync\n");
      return;
    }
    console.log(`  Directory owner: ${directoryOwner}\n`);

    // Step 3: Get changed files and categorize by change type
    console.log("Step 3: Finding changed prototypes...");
    const changedFiles = getChangedFiles();
    console.log(`  Changed files: ${changedFiles.length}`);

    const { all, withCodeChanges } = extractChangedPrototypes(changedFiles);
    allChangedPrototypes = all;
    console.log(`  Changed prototypes: ${allChangedPrototypes.size}`);
    console.log(`  Prototypes with code changes: ${withCodeChanges.size}`);

    console.log("\nStep 4: Analyzing ownership and change types...");
    prototypesWithTimestampBump = new Set<string>();
    for (const protoKey of allChangedPrototypes) {
      const [username] = protoKey.split("/");
      const isOwner = username === directoryOwner;
      const hasCodeChanges = withCodeChanges.has(protoKey);
      if (isOwner && hasCodeChanges) {
        prototypesWithTimestampBump.add(protoKey);
      }
    }
  }
  console.log(
    `  Prototypes to sync: ${allChangedPrototypes.size} (all changed)`,
  );
  console.log(
    `  Prototypes with timestamp bump: ${prototypesWithTimestampBump.size} (owner + code changes)`,
  );

  // Step 5: Load data and sync
  console.log("\nStep 5: Syncing to Notion...");
  const creationDates = await loadCreationDates();
  const notionUserIds = await loadNotionUserIds();
  const now = new Date().toISOString();

  let created = 0;
  let updated = 0;
  let updatedWithTimestamp = 0;
  let updatedMetadataOnly = 0;
  const errors: string[] = [];

  // Sync ALL changed prototypes (not just owned ones)
  for (const protoKey of allChangedPrototypes) {
    const [username, slug] = protoKey.split("/");

    // Check if prototype still exists (might have been deleted)
    const exists = await prototypeExists(username, slug);
    if (!exists) {
      console.log(`  Skipping ${protoKey} (deleted)`);
      continue;
    }

    try {
      // Mark as template if in the templates directory
      const isTemplate = username === "templates";

      // Only bump timestamp if owner made code changes
      const shouldUpdateTimestamp = prototypesWithTimestampBump.has(protoKey);

      const result = await syncPrototype(
        username,
        slug,
        creationDates,
        notionUserIds,
        now,
        isTemplate,
        shouldUpdateTimestamp,
      );

      if (result.action === "created") {
        created++;
        console.log(`  Created: ${protoKey}`);
      } else if (result.action === "updated") {
        updated++;
        if (shouldUpdateTimestamp) {
          updatedWithTimestamp++;
          console.log(`  Updated: ${protoKey} (with timestamp bump)`);
        } else {
          updatedMetadataOnly++;
          console.log(`  Updated: ${protoKey} (metadata only)`);
        }
      }

      // Rate limiting
      await new Promise((resolve) => setTimeout(resolve, 350));
    } catch (error) {
      const errorMsg = `Failed to sync ${protoKey}: ${error}`;
      errors.push(errorMsg);
      console.error(`  Error: ${errorMsg}`);
    }
  }

  // Step 6: Check for deleted prototypes (skip in force mode)
  if (directoryOwner) {
    const archived = await archiveDeletedPrototypes(directoryOwner);
    if (archived.length > 0) {
      console.log(`\nArchived ${archived.length} deleted prototypes:`);
      for (const protoKey of archived) {
        console.log(`  - ${protoKey}`);
      }
    }
  }

  // Summary
  console.log("\n" + "═".repeat(50));
  console.log("Sync Summary");
  console.log("═".repeat(50));
  console.log(`  Created: ${created}`);
  console.log(`  Updated: ${updated}`);
  if (updated > 0) {
    console.log(`    - With timestamp bump: ${updatedWithTimestamp}`);
    console.log(`    - Metadata only: ${updatedMetadataOnly}`);
  }
  console.log(`  Archived: ${archived.length}`);
  console.log(`  Errors: ${errors.length}`);

  if (errors.length > 0) {
    console.log("\nErrors:");
    for (const error of errors) {
      console.log(`  - ${error}`);
    }
  }

  if (DRY_RUN) {
    console.log("\nDRY RUN - no actual changes were made");
  } else {
    console.log("\n✅ Notion sync complete!");
  }

  // Output for Slack notification (number of new prototypes)
  if (created > 0) {
    // Write to file for Slack notification step to read
    await fs.writeFile("new-prototypes-count.txt", created.toString(), "utf-8");
  }
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
