import { getPlaygroundConfigPath, getUserDirectory } from "@/root/lib/fs-utils";
import { allowFileSystemOperations } from "@/utils/env";
import { generateUniqueSlug, slugify } from "@/utils/slugify";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  // File system operations are only allowed in development
  if (!allowFileSystemOperations()) {
    return new Response("File operations not allowed in production", {
      status: 405,
    });
  }

  const { username, oldSlug, name, description, externalUrl } =
    await req.json();
  if (!username || !oldSlug || !name) {
    return new Response("Missing required fields", { status: 400 });
  }

  // Read current username from .playground for security
  const configFile = getPlaygroundConfigPath();
  let currentUser: string | undefined;
  try {
    const buf = await fs.readFile(configFile);
    const content = buf.toString("utf-8");
    const match = content.match(/^USERNAME=(.+)$/m);
    if (match) currentUser = match[1].trim();
  } catch {}
  if (!currentUser || currentUser !== username) {
    return new Response("No username found in .playground or mismatch", {
      status: 400,
    });
  }

  // Paths
  const userDir = getUserDirectory(username);
  const oldDir = path.join(userDir, oldSlug);
  const oldMetadataPath = path.join(oldDir, "metadata.json");

  // Slugify new name
  let newSlug = slugify(name);
  const slugChanged = newSlug !== oldSlug;

  // Check for duplicate if slug changed
  if (slugChanged) {
    const userEntries = await fs.readdir(userDir, { withFileTypes: true });
    const existingSlugs = userEntries
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    if (existingSlugs.includes(newSlug)) {
      newSlug = generateUniqueSlug(name, existingSlugs);
      if (existingSlugs.includes(newSlug)) {
        return new Response("Prototype with this name already exists", {
          status: 409,
        });
      }
    }
  }

  // Update metadata.json
  let existingMetadata: any = {};
  try {
    const existingData = await fs.readFile(oldMetadataPath, "utf-8");
    existingMetadata = JSON.parse(existingData);
  } catch {
    // File doesn't exist or is invalid, will create new one
  }

  const newMetadata = {
    ...existingMetadata, // Preserve all existing fields (versionGroupId, version, branchedFromVersion, etc.)
    title: name,
    description,
    // Handle externalUrl: if explicitly provided, use it (allows clearing with empty string)
    ...(externalUrl !== undefined ? { externalUrl } : {}),
  };
  try {
    await fs.writeFile(
      oldMetadataPath,
      JSON.stringify(newMetadata, null, 2),
      "utf-8",
    );
  } catch {
    return new Response("Failed to update metadata", { status: 500 });
  }

  // If slug changed, rename directory
  if (slugChanged) {
    const newDir = path.join(userDir, newSlug);
    try {
      await fs.rename(oldDir, newDir);
    } catch {
      return new Response("Failed to rename prototype directory", {
        status: 500,
      });
    }
  }

  return new Response(JSON.stringify({ slug: newSlug }), { status: 200 });
}
