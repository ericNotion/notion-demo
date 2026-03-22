import { promises as fs } from "fs";
import path from "path";
import { generateStaticData } from "../../../../scripts/generate-static-data";
import { Prototype, UserPrototypes } from "../../../types/prototypes";

const APP_DIR = path.join(process.cwd(), "src/app");
const STATIC_DATA_PATH = path.join(process.cwd(), "src/data/static-data.json");

// Directories to skip when scanning for user directories
const SKIP_DIRS = new Set([
  "(root)",
  "(templates)",
  "api",
  "lib",
  "components",
]);

/**
 * Get the project root directory
 */
function getProjectRoot(): string {
  return path.resolve(process.cwd(), "./");
}

/**
 * Get the playground config file path
 */
export function getPlaygroundConfigPath(): string {
  return path.join(getProjectRoot(), ".playground");
}

/**
 * Get the user's directory path within the Next.js app
 */
export function getUserDirectory(username: string): string {
  return path.join(process.cwd(), "src/app", username);
}

/**
 * Get a specific prototype directory path
 */
export function getPrototypeDirectory(username: string, slug: string): string {
  return path.join(getUserDirectory(username), slug);
}

/**
 * Get the template directory path
 */
export function getTemplateDirectory(): string {
  return path.join(process.cwd(), "src/app/(root)/template");
}

// Types for static data
type StaticData = {
  users: UserPrototypes[];
  currentUsername?: string;
};

/**
 * Check if static data is stale by comparing file modification times.
 * Returns true if any user/prototype directory has been modified after the static data file.
 */
async function isStaticDataStale(): Promise<boolean> {
  try {
    const staticDataStat = await fs.stat(STATIC_DATA_PATH);
    const staticDataMtime = staticDataStat.mtimeMs;

    // Get all directories in the app folder (these are user directories)
    const appEntries = await fs.readdir(APP_DIR, { withFileTypes: true });
    const userDirs = appEntries.filter(
      (e) =>
        e.isDirectory() &&
        !e.name.startsWith(".") &&
        !e.name.startsWith("(") &&
        !SKIP_DIRS.has(e.name),
    );

    // Check each user directory for modifications
    for (const userEntry of userDirs) {
      const userDir = path.join(APP_DIR, userEntry.name);
      const userStat = await fs.stat(userDir);
      if (userStat.mtimeMs > staticDataMtime) {
        return true;
      }

      // Also check immediate subdirectories (prototype folders)
      const protoEntries = await fs.readdir(userDir, { withFileTypes: true });
      for (const entry of protoEntries) {
        if (
          entry.isDirectory() &&
          !entry.name.startsWith(".") &&
          !entry.name.startsWith("(") &&
          !SKIP_DIRS.has(entry.name)
        ) {
          const protoDir = path.join(userDir, entry.name);
          const protoStat = await fs.stat(protoDir);
          if (protoStat.mtimeMs > staticDataMtime) {
            return true;
          }
        }
      }
    }

    return false;
  } catch {
    // Static data file doesn't exist or error reading, needs generation
    return true;
  }
}

/**
 * Load static data from JSON file.
 * Regenerates if the data is stale (prototype directories modified since last generation).
 */
async function loadStaticData(): Promise<StaticData | null> {
  try {
    // Check if we need to regenerate due to manual file system changes
    const stale = await isStaticDataStale();
    if (stale) {
      console.log("Static data is stale, regenerating...");
      await generateStaticData();
    }

    const data = await fs.readFile(STATIC_DATA_PATH, "utf-8");
    const parsed = JSON.parse(data);

    // Convert date strings back to Date objects
    if (parsed.generatedAt) {
      parsed.generatedAt = new Date(parsed.generatedAt);
    }

    parsed.users.forEach((user: UserPrototypes) => {
      user.prototypes.forEach((proto: Prototype) => {
        proto.createdAt = new Date(proto.createdAt);
        if (proto.updatedAt) {
          proto.updatedAt = new Date(proto.updatedAt);
        }
      });
    });

    return parsed;
  } catch (error) {
    console.warn("Failed to load static data:", error);
    return null;
  }
}

export async function getAllUserPrototypes(
  _appDir: string,
): Promise<UserPrototypes[]> {
  // Always use static data (generated on-demand)
  const staticData = await loadStaticData();
  if (staticData) {
    return staticData.users;
  }

  // Fallback to empty array if static data fails to load
  console.warn("Static data not available, returning empty array");
  return [];
}

/**
 * Get current username - reads from .playground file in development
 */
export async function getCurrentUsername(): Promise<string> {
  const configFile = getPlaygroundConfigPath();
  try {
    const buf = await fs.readFile(configFile);
    const content = buf.toString("utf-8");
    const match = content.match(/^USERNAME=(.+)$/m);
    if (match) {
      return match[1].trim();
    }
  } catch {}
  return "eric";
}

type PrototypeMetadata = {
  title: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
};

/**
 * Get prototype metadata from its metadata.json file
 * Returns null if the file doesn't exist or can't be parsed
 */
async function getPrototypeMetadata(
  username: string,
  prototypeSlug: string,
): Promise<PrototypeMetadata | null> {
  const metadataPath = path.join(
    getPrototypeDirectory(username, prototypeSlug),
    "metadata.json",
  );

  try {
    const content = await fs.readFile(metadataPath, "utf-8");
    return JSON.parse(content) as PrototypeMetadata;
  } catch {
    return null;
  }
}

/**
 * Generate a page title for a prototype
 * Returns "{prototype title} by {username}" or falls back to slug-based title
 */
export async function getPrototypePageTitle(
  username: string,
  prototypeSlug: string,
): Promise<string> {
  const metadata = await getPrototypeMetadata(username, prototypeSlug);

  if (metadata?.title) {
    return `${metadata.title} by ${username}`;
  }

  // Fallback: convert slug to title case
  const titleFromSlug = prototypeSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return `${titleFromSlug} by ${username}`;
}
