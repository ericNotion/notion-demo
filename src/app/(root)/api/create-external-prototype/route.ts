import {
  getPlaygroundConfigPath,
  getPrototypeDirectory,
  getUserDirectory,
} from "@/root/lib/fs-utils";
import type { PrototypeMetadataJson } from "@/root/lib/metadata-schema";
import {
  extractOriginalSlug,
  generateVersionSlug,
  getMaxVersion,
  readPrototypeMetadata,
} from "@/root/lib/version-utils";
import { allowFileSystemOperations } from "@/utils/env";
import { slugify } from "@/utils/slugify";
import { exec } from "child_process";
import { promises as fs } from "fs";
import path from "path";
import { promisify } from "util";
import { generateStaticData } from "../../../../../scripts/generate-static-data";

const execAsync = promisify(exec);

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

  const key = `${username}/${slug}`;
  dates[key] = new Date().toISOString();

  const sorted: Record<string, string> = {};
  Object.keys(dates)
    .sort()
    .forEach((k) => {
      sorted[k] = dates[k];
    });

  await fs.writeFile(
    CREATION_DATES_FILE,
    JSON.stringify(sorted, null, 2) + "\n",
    "utf-8",
  );
}

function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  // File system operations are only allowed in development
  if (!allowFileSystemOperations()) {
    return new Response("File operations not allowed in production", {
      status: 405,
    });
  }

  const { url, title, description, sourceSlug, sourceUsername } =
    await req.json();
  const isVersioning = Boolean(sourceSlug && sourceUsername);

  if (!url || !title) {
    return new Response("Missing url or title", { status: 400 });
  }

  // Validate URL
  if (!isValidUrl(url)) {
    return new Response("Invalid URL format", { status: 400 });
  }

  // Read username from .playground
  const configFile = getPlaygroundConfigPath();
  let username: string | undefined;
  try {
    const buf = await fs.readFile(configFile);
    const content = buf.toString("utf-8");
    const match = content.match(/^USERNAME=(.+)$/m);
    if (match) username = match[1].trim();
  } catch {}
  if (!username) {
    return new Response("No username found in .playground", { status: 400 });
  }

  // For versioning, verify user can only version their own prototypes
  if (isVersioning && sourceUsername !== username) {
    return new Response("Can only create versions of your own prototypes", {
      status: 403,
    });
  }

  // Handle versioning: read source metadata and compute version info
  let versionGroupId: string | undefined;
  let version: number | undefined;
  let branchedFromVersion: number | undefined;
  let slug: string;

  if (isVersioning) {
    // Read source prototype metadata
    const srcMetadata = await readPrototypeMetadata(sourceUsername, sourceSlug);
    if (!srcMetadata) {
      return new Response("Source prototype not found", { status: 404 });
    }

    // Determine version info
    const sourceVersion = srcMetadata.version || 1;
    versionGroupId =
      srcMetadata.versionGroupId || `${sourceUsername}/${sourceSlug}`;

    // Get the current max version in the group
    const maxVersion = await getMaxVersion(versionGroupId);
    version = maxVersion + 1;
    branchedFromVersion = sourceVersion;

    // If this is the first version (source has no version metadata),
    // update the source prototype to be v1
    if (!srcMetadata.version || !srcMetadata.versionGroupId) {
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

    // Generate versioned slug
    const originalSlug = extractOriginalSlug(sourceSlug);
    slug = await generateVersionSlug(username, originalSlug, version);
  } else {
    // Normal flow: slugify the title
    slug = slugify(title);

    // Check for duplicate prototype
    const protoDir = getPrototypeDirectory(username, slug);
    try {
      await fs.access(protoDir);
      return new Response("Prototype with this name already exists", {
        status: 409,
      });
    } catch {}
  }

  // Create prototype directory
  const protoDir = getPrototypeDirectory(username, slug);
  await fs.mkdir(protoDir, { recursive: true });

  // Create metadata.json with externalUrl field (no page.tsx needed - UI links directly)
  // Include version fields if versioning
  const metadataFile = path.join(protoDir, "metadata.json");
  const metadata: PrototypeMetadataJson = {
    title,
    description: description || "",
    externalUrl: url,
    ...(versionGroupId && { versionGroupId }),
    ...(version !== undefined && { version }),
    ...(branchedFromVersion !== undefined && { branchedFromVersion }),
  };
  const metadataContent = JSON.stringify(metadata, null, 2);
  await fs.writeFile(metadataFile, metadataContent + "\n", "utf-8");

  // Add creation date to centralized file
  await addCreationDate(username, slug);

  // Format the generated file with Prettier
  try {
    await execAsync(`bunx prettier --write "${metadataFile}"`);
  } catch {
    // Prettier formatting is nice-to-have, don't fail if it errors
  }

  // Regenerate static data to include the new external prototype
  await generateStaticData();

  return new Response(
    JSON.stringify({
      slug,
      title,
      description,
      url,
      ...(version !== undefined && {
        version,
        versionGroupId,
        branchedFromVersion,
      }),
    }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    },
  );
}
