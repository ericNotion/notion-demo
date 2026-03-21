/**
 * Version utilities for prototype versioning system
 *
 * These utilities help manage prototype versions, including:
 * - Finding all versions of a prototype (by versionGroupId)
 * - Generating version slugs
 * - Calculating next version number
 */

import { promises as fs } from "fs";
import path from "path";
import { getUserDirectory } from "./fs-utils";
import type { PrototypeMetadataJson } from "./metadata-schema";

const APP_DIR = path.join(process.cwd(), "src/app");

/**
 * Information about a specific version
 */
export interface VersionInfo {
  username: string;
  slug: string;
  version: number;
  versionGroupId: string;
  branchedFromVersion?: number;
  title: string;
}

/**
 * Read metadata.json for a prototype
 */
export async function readPrototypeMetadata(
  username: string,
  slug: string,
): Promise<PrototypeMetadataJson | null> {
  const metadataPath = path.join(APP_DIR, username, slug, "metadata.json");

  try {
    const content = await fs.readFile(metadataPath, "utf-8");
    return JSON.parse(content);
  } catch {
    return null;
  }
}

/**
 * Write metadata.json for a prototype
 */
export async function writePrototypeMetadata(
  username: string,
  slug: string,
  metadata: PrototypeMetadataJson,
): Promise<void> {
  const metadataPath = path.join(APP_DIR, username, slug, "metadata.json");
  await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2), "utf-8");
}

/**
 * Find all prototypes in a user's directory
 */
async function findUserPrototypes(username: string): Promise<string[]> {
  const userDir = getUserDirectory(username);

  try {
    const entries = await fs.readdir(userDir, { withFileTypes: true });
    return entries
      .filter(
        (e) =>
          e.isDirectory() &&
          !e.name.startsWith(".") &&
          !e.name.startsWith("(") &&
          !["api", "lib", "components"].includes(e.name),
      )
      .map((e) => e.name);
  } catch {
    return [];
  }
}

/**
 * Find all versions of a prototype by versionGroupId
 * Scans all prototypes in the user's directory
 */
export async function findVersions(
  versionGroupId: string,
): Promise<VersionInfo[]> {
  // The versionGroupId format is "username/original-slug"
  const [username] = versionGroupId.split("/");
  if (!username) return [];

  const prototypeSlugs = await findUserPrototypes(username);
  const versions: VersionInfo[] = [];

  for (const slug of prototypeSlugs) {
    const metadata = await readPrototypeMetadata(username, slug);
    if (!metadata) continue;

    // Check if this prototype belongs to the version group
    const protoVersionGroupId =
      metadata.versionGroupId || `${username}/${slug}`;
    if (protoVersionGroupId === versionGroupId) {
      versions.push({
        username,
        slug,
        version: metadata.version || 1,
        versionGroupId: protoVersionGroupId,
        branchedFromVersion: metadata.branchedFromVersion,
        title: metadata.title,
      });
    }
  }

  // Sort by version number
  return versions.sort((a, b) => a.version - b.version);
}

/**
 * Get the maximum version number for a version group
 */
export async function getMaxVersion(versionGroupId: string): Promise<number> {
  const versions = await findVersions(versionGroupId);
  if (versions.length === 0) return 0;
  return Math.max(...versions.map((v) => v.version));
}

/**
 * Generate a unique versioned slug
 *
 * For the original prototype (my-prototype), version 2 becomes my-prototype-v2
 * If my-prototype-v2 exists (collision), tries my-prototype-v2-1, my-prototype-v2-2, etc.
 */
export async function generateVersionSlug(
  username: string,
  originalSlug: string,
  version: number,
): Promise<string> {
  const existingSlugs = new Set(await findUserPrototypes(username));

  // Base versioned slug
  const versionedSlug = `${originalSlug}-v${version}`;

  // If no collision, use it
  if (!existingSlugs.has(versionedSlug)) {
    return versionedSlug;
  }

  // Handle collision by appending incrementing suffix
  let suffix = 1;
  while (existingSlugs.has(`${versionedSlug}-${suffix}`)) {
    suffix++;
  }

  return `${versionedSlug}-${suffix}`;
}

/**
 * Extract the original slug from a versioned slug
 * e.g., "my-prototype-v2" -> "my-prototype"
 * e.g., "my-prototype-v2-1" -> "my-prototype"
 */
export function extractOriginalSlug(slug: string): string {
  // Match -v{N} or -v{N}-{suffix} at the end
  const versionPattern = /-v\d+(-\d+)?$/;
  return slug.replace(versionPattern, "");
}

/**
 * Determine version info for a prototype
 *
 * If the prototype has explicit version metadata, use that.
 * Otherwise, treat it as a standalone v1 prototype.
 */
export async function getVersionInfo(
  username: string,
  slug: string,
): Promise<{
  versionGroupId: string;
  version: number;
  branchedFromVersion?: number;
  isVersioned: boolean;
}> {
  const metadata = await readPrototypeMetadata(username, slug);

  if (metadata?.versionGroupId && metadata?.version) {
    return {
      versionGroupId: metadata.versionGroupId,
      version: metadata.version,
      branchedFromVersion: metadata.branchedFromVersion,
      isVersioned: true,
    };
  }

  // Treat as standalone v1 prototype
  return {
    versionGroupId: `${username}/${slug}`,
    version: 1,
    isVersioned: false,
  };
}

/**
 * Get the latest version in a version group
 */
export async function getLatestVersion(
  versionGroupId: string,
): Promise<VersionInfo | null> {
  const versions = await findVersions(versionGroupId);
  // findVersions returns sorted ascending, so last element is latest
  return versions.at(-1) ?? null;
}
