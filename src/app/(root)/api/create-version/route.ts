/**
 * API Route: Create Version
 *
 * Creates a new version of an existing prototype.
 * The new version is branched from the source prototype's version.
 *
 * POST /api/create-version
 * Body: { sourceUsername: string, sourceSlug: string }
 *
 * Response: {
 *   slug: string,
 *   version: number,
 *   versionGroupId: string,
 *   branchedFromVersion: number
 * }
 */

import { getPlaygroundConfigPath, getUserDirectory } from "@/root/lib/fs-utils";
import type { PrototypeMetadataJson } from "@/root/lib/metadata-schema";
import {
  extractOriginalSlug,
  generateVersionSlug,
  getMaxVersion,
  readPrototypeMetadata,
} from "@/root/lib/version-utils";
import { allowFileSystemOperations } from "@/utils/env";
import { promises as fs } from "fs";
import path from "path";
import { generateStaticData } from "../../../../../scripts/generate-static-data";

const CREATION_DATES_FILE = path.join(
  process.cwd(),
  "src/data/prototype-creation-dates.json",
);

/**
 * Add a creation date entry to the centralized file
 */
async function addCreationDate(username: string, slug: string): Promise<void> {
  let dates: Record<string, string> = {};

  try {
    const content = await fs.readFile(CREATION_DATES_FILE, "utf-8");
    dates = JSON.parse(content);
  } catch {}

  dates[`${username}/${slug}`] = new Date().toISOString();

  const sorted = Object.fromEntries(
    Object.entries(dates).sort(([a], [b]) => a.localeCompare(b)),
  );

  await fs.writeFile(
    CREATION_DATES_FILE,
    JSON.stringify(sorted, null, 2) + "\n",
    "utf-8",
  );
}

/**
 * Recursively copy a directory
 */
async function copyDir(src: string, dest: string) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

/**
 * Update import paths in copied files
 */
async function updateImportPaths(
  dir: string,
  fromUser: string,
  toUser: string,
) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await updateImportPaths(fullPath, fromUser, toUser);
    } else if (entry.isFile() && /(ts|tsx|js|jsx)$/.test(entry.name)) {
      try {
        const content = await fs.readFile(fullPath, "utf-8");
        const updated = content.replace(
          new RegExp(`@/${fromUser}/(?!components/)`, "g"),
          `@/${toUser}/`,
        );
        if (updated !== content) {
          await fs.writeFile(fullPath, updated, "utf-8");
        }
      } catch {
        // ignore read/write errors
      }
    }
  }
}

export async function POST(req: Request) {
  try {
    // File system operations are only allowed in development
    if (!allowFileSystemOperations()) {
      return new Response("File operations not allowed in production", {
        status: 405,
      });
    }

    console.log("[create-version] POST called");
    const { sourceUsername, sourceSlug } = await req.json();
    console.log(
      "[create-version] sourceUsername:",
      sourceUsername,
      "sourceSlug:",
      sourceSlug,
    );

    if (!sourceUsername || !sourceSlug) {
      console.error("[create-version] Missing sourceUsername or sourceSlug");
      return new Response("Missing sourceUsername or sourceSlug", {
        status: 400,
      });
    }

    // Read current username from .playground
    const configFile = getPlaygroundConfigPath();
    let username: string | undefined;
    try {
      const buf = await fs.readFile(configFile);
      const content = buf.toString("utf-8");
      const match = content.match(/^USERNAME=(.+)$/m);
      if (match) username = match[1].trim();
      console.log("[create-version] Found username in .playground:", username);
    } catch (err) {
      console.error("[create-version] Error reading .playground:", err);
    }

    if (!username) {
      console.error("[create-version] No username found in .playground");
      return new Response("No username found in .playground", { status: 400 });
    }

    // Only allow creating versions of your own prototypes
    if (sourceUsername !== username) {
      console.error(
        "[create-version] Cannot create version of another user's prototype",
      );
      return new Response("Can only create versions of your own prototypes", {
        status: 403,
      });
    }

    // Read source prototype metadata
    const srcMetadata = await readPrototypeMetadata(sourceUsername, sourceSlug);
    if (!srcMetadata) {
      console.error("[create-version] Source prototype metadata not found");
      return new Response("Source prototype metadata not found", {
        status: 404,
      });
    }

    // Determine version info
    // If source already has a versionGroupId, use it; otherwise create one
    const sourceVersion = srcMetadata.version || 1;
    const versionGroupId =
      srcMetadata.versionGroupId || `${sourceUsername}/${sourceSlug}`;

    // Get the current max version in the group
    const maxVersion = await getMaxVersion(versionGroupId);
    const newVersion = maxVersion + 1;

    console.log(
      "[create-version] versionGroupId:",
      versionGroupId,
      "sourceVersion:",
      sourceVersion,
      "maxVersion:",
      maxVersion,
      "newVersion:",
      newVersion,
    );

    // If this is the first version (source has no version metadata),
    // update the source prototype to be v1
    if (!srcMetadata.version || !srcMetadata.versionGroupId) {
      console.log("[create-version] Updating source to be v1");
      const srcMetadataPath = path.join(
        getUserDirectory(sourceUsername),
        sourceSlug,
        "metadata.json",
      );
      const updatedSrcMetadata: PrototypeMetadataJson = {
        ...srcMetadata,
        versionGroupId,
        version: 1,
      };
      await fs.writeFile(
        srcMetadataPath,
        JSON.stringify(updatedSrcMetadata, null, 2),
        "utf-8",
      );
    }

    // Generate the new version slug
    // Extract the original slug (without version suffix) for clean naming
    const originalSlug = extractOriginalSlug(sourceSlug);
    const newSlug = await generateVersionSlug(
      username,
      originalSlug,
      newVersion,
    );

    console.log("[create-version] newSlug:", newSlug);

    // Copy the source directory
    const srcDir = path.join(getUserDirectory(sourceUsername), sourceSlug);
    const destDir = path.join(getUserDirectory(username), newSlug);

    try {
      await copyDir(srcDir, destDir);
      console.log("[create-version] Copied directory");
    } catch (err) {
      console.error("[create-version] Error copying directory:", err);
      return new Response("Failed to copy prototype directory", {
        status: 500,
      });
    }

    // Update import paths (for self-references)
    try {
      // Update from the source slug to the new slug path
      await updateImportPaths(destDir, sourceSlug, newSlug);
      console.log("[create-version] Updated import paths");
    } catch (err) {
      console.error("[create-version] Error updating import paths:", err);
    }

    // Update metadata.json for the new version
    const destMetadataPath = path.join(destDir, "metadata.json");
    try {
      const newMetadata: PrototypeMetadataJson = {
        title: srcMetadata.title, // Keep the same title
        description: srcMetadata.description,
        // Don't copy externalUrl - new version is a local copy
        versionGroupId,
        version: newVersion,
        branchedFromVersion: sourceVersion,
      };
      await fs.writeFile(
        destMetadataPath,
        JSON.stringify(newMetadata, null, 2),
        "utf-8",
      );
      console.log("[create-version] Updated metadata.json");
    } catch (err) {
      console.error("[create-version] Error updating metadata.json:", err);
      return new Response("Failed to update metadata", { status: 500 });
    }

    // Add creation date to centralized file
    await addCreationDate(username, newSlug);

    // Regenerate static data to reflect the new version
    try {
      await generateStaticData();
    } catch (error) {
      console.error(
        "[create-version] Failed to regenerate static data:",
        error,
      );
      // Don't fail the request if static data generation fails
    }

    // Return success response
    return new Response(
      JSON.stringify({
        slug: newSlug,
        version: newVersion,
        versionGroupId,
        branchedFromVersion: sourceVersion,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error("[create-version] Unhandled error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
