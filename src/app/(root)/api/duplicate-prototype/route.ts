import { getPlaygroundConfigPath } from "@/root/lib/fs-utils";
import { allowFileSystemOperations } from "@/utils/env";
import { generateUniqueSlug, slugify } from "@/utils/slugify";
import { promises as fs } from "fs";
import path from "path";
import { generateStaticData } from "../../../../../scripts/generate-static-data";

interface PrototypeMetadata {
  title: string;
  description?: string;
  externalUrl?: string;
  [key: string]: unknown;
}

function getSourceRoot(playgroundContent: string): string {
  const match = playgroundContent.match(/^SOURCE_PATH=(.+)$/m);
  return match?.[1]?.trim() || process.cwd();
}

function getCreationDatesFilePath(sourceRoot: string): string {
  return path.join(sourceRoot, "src/data/prototype-creation-dates.json");
}

/**
 * Add a creation date entry to the centralized file
 */
async function addCreationDate(
  username: string,
  slug: string,
  sourceRoot: string,
): Promise<void> {
  let dates: Record<string, string> = {};

  try {
    const content = await fs.readFile(
      getCreationDatesFilePath(sourceRoot),
      "utf-8",
    );
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
    getCreationDatesFilePath(sourceRoot),
    JSON.stringify(sorted, null, 2) + "\n",
    "utf-8",
  );
}

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

    console.log("[duplicate-prototype] POST called");
    const { sourceUsername, sourceSlug } = await req.json();
    console.log(
      "[duplicate-prototype] sourceUsername:",
      sourceUsername,
      "sourceSlug:",
      sourceSlug,
    );
    if (!sourceUsername || !sourceSlug) {
      console.error(
        "[duplicate-prototype] Missing sourceUsername or sourceSlug",
      );
      return new Response("Missing sourceUsername or sourceSlug", {
        status: 400,
      });
    }

    // Read current username from .playground
    const configFile = getPlaygroundConfigPath();
    let username: string | undefined;
    let sourceRoot = process.cwd();
    try {
      const buf = await fs.readFile(configFile);
      const content = buf.toString("utf-8");
      const match = content.match(/^USERNAME=(.+)$/m);
      if (match) username = match[1].trim();
      sourceRoot = getSourceRoot(content);
      console.log(
        "[duplicate-prototype] Found username in .playground:",
        username,
      );
      console.log("[duplicate-prototype] Found source root:", sourceRoot);
    } catch (err) {
      console.error("[duplicate-prototype] Error reading .playground:", err);
    }
    if (!username) {
      console.error("[duplicate-prototype] No username found in .playground");
      return new Response("No username found in .playground", { status: 400 });
    }

    // Source and destination directories
    // Templates are in a route group folder (templates) -> src/app/(templates)/templates/
    const sourceDir =
      sourceUsername === "templates"
        ? path.join(sourceRoot, "src/app/(templates)/templates")
        : path.join(sourceRoot, "src/app", sourceUsername);
    const srcDir = path.join(sourceDir, sourceSlug);
    const userDir = path.join(sourceRoot, "src/app", username);
    console.log("[duplicate-prototype] srcDir:", srcDir);
    console.log("[duplicate-prototype] userDir:", userDir);

    // Read source metadata
    const srcMetadataPath = path.join(srcDir, "metadata.json");
    let metadata: PrototypeMetadata;
    let originalTitle = sourceSlug;
    try {
      const data = await fs.readFile(srcMetadataPath, "utf-8");
      metadata = JSON.parse(data) as PrototypeMetadata;
      originalTitle = metadata.title || sourceSlug;
      console.log("[duplicate-prototype] Read source metadata:", metadata);
    } catch (err) {
      console.error(
        "[duplicate-prototype] Source prototype metadata not found or error reading:",
        err,
      );
      return new Response("Source prototype metadata not found", {
        status: 404,
      });
    }

    // Find unique slug for the copy
    let userEntries;
    try {
      userEntries = await fs.readdir(userDir, { withFileTypes: true });
    } catch (err) {
      console.error("[duplicate-prototype] Error reading userDir:", err);
      return new Response("User directory not found", { status: 404 });
    }
    const existingSlugs = userEntries
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    const copyTitle = `${originalTitle} (copy)`;
    let copySlug = slugify(originalTitle);
    if (existingSlugs.includes(copySlug)) {
      copySlug = generateUniqueSlug(originalTitle, existingSlugs);
    }
    const destDir = path.join(userDir, copySlug);
    console.log("[duplicate-prototype] destDir:", destDir);

    // Copy all files recursively
    try {
      await copyDir(srcDir, destDir);
      console.log("[duplicate-prototype] Copied directory");
    } catch (err) {
      console.error("[duplicate-prototype] Error copying directory:", err);
      return new Response("Failed to copy prototype directory", {
        status: 500,
      });
    }

    // Update import paths inside the copied prototype
    try {
      await updateImportPaths(destDir, sourceUsername, username);
      console.log("[duplicate-prototype] Updated import paths");
    } catch (err) {
      console.error("[duplicate-prototype] Error updating import paths:", err);
    }

    // Update metadata.json in the copy (no timestamps - those go in centralized files)
    const destMetadataPath = path.join(destDir, "metadata.json");
    try {
      const newMetadata: PrototypeMetadata = {
        title: copyTitle,
        description: metadata.description || "",
      };
      // Copy any other properties from original metadata except title, createdAt, updatedAt
      for (const key in metadata) {
        if (
          key !== "title" &&
          key !== "createdAt" &&
          key !== "updatedAt" &&
          !(key in newMetadata)
        ) {
          newMetadata[key] = metadata[key];
        }
      }
      await fs.writeFile(
        destMetadataPath,
        JSON.stringify(newMetadata, null, 2),
        "utf-8",
      );
      console.log("[duplicate-prototype] Updated metadata.json");
    } catch (err) {
      console.error("[duplicate-prototype] Error updating metadata.json:", err);
      // ignore, fallback to copied metadata
    }

    // Add creation date to centralized file
    await addCreationDate(username, copySlug, sourceRoot);

    // Regenerate static data to reflect the duplicated prototype
    try {
      await generateStaticData();
    } catch (error) {
      console.error(
        "[duplicate-prototype] Failed to regenerate static data:",
        error,
      );
      // Don't fail the request if static data generation fails
    }

    return new Response(JSON.stringify({ slug: copySlug }), { status: 201 });
  } catch (err) {
    console.error("[duplicate-prototype] Unhandled error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
