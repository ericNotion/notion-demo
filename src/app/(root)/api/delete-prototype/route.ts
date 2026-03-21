import {
  getPlaygroundConfigPath,
  getPrototypeDirectory,
} from "@/root/lib/fs-utils";
import { allowFileSystemOperations } from "@/utils/env";
import { promises as fs } from "fs";
import path from "path";

const CREATION_DATES_FILE = path.join(
  process.cwd(),
  "src/data/prototype-creation-dates.json",
);

/**
 * Remove a creation date entry from the centralized file
 */
async function removeCreationDate(
  username: string,
  slug: string,
): Promise<void> {
  try {
    const content = await fs.readFile(CREATION_DATES_FILE, "utf-8");
    const dates: Record<string, string> = JSON.parse(content);

    const key = `${username}/${slug}`;
    delete dates[key];

    await fs.writeFile(
      CREATION_DATES_FILE,
      JSON.stringify(dates, null, 2) + "\n",
      "utf-8",
    );
  } catch {
    // File doesn't exist or couldn't be read, nothing to remove
  }
}

async function deleteDirRecursive(dir: string) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await deleteDirRecursive(fullPath);
      } else {
        await fs.unlink(fullPath);
      }
    }),
  );
  await fs.rmdir(dir);
}

export async function POST(req: Request) {
  // File system operations are only allowed in development
  if (!allowFileSystemOperations()) {
    return new Response("File operations not allowed in production", {
      status: 405,
    });
  }

  const { username, slug } = await req.json();
  if (!username || !slug) {
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

  // Path to prototype directory
  const protoDir = getPrototypeDirectory(username, slug);

  try {
    await deleteDirRecursive(protoDir);
  } catch {
    return new Response("Failed to delete prototype directory", {
      status: 500,
    });
  }

  // Remove the creation date entry
  await removeCreationDate(username, slug);

  return new Response("Deleted", { status: 200 });
}
