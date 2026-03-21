import { promises as fs } from "fs";
import path from "path";

type StaticData = {
  users: Array<{ username: string }>;
};

/**
 * Gets list of valid usernames from the codebase
 * - In production: Reads from static-data.json
 * - In development: Reads from static-data.json (cached)
 */
export async function getValidUsernames(): Promise<string[]> {
  try {
    // Read from static-data.json (works in both dev and prod)
    const staticDataPath = path.join(
      process.cwd(),
      "src/data/static-data.json",
    );
    const data = await fs.readFile(staticDataPath, "utf-8");
    const parsed: StaticData = JSON.parse(data);

    // Extract usernames and filter out special ones
    const usernames = parsed.users
      .map((user) => user.username)
      .filter((username) => username !== "templates" && username !== "nds");

    return usernames.sort();
  } catch (error) {
    console.error("Failed to get valid usernames:", error);
    return [];
  }
}

/**
 * Checks if a username is valid
 */
export async function isValidUsername(username: string): Promise<boolean> {
  const validUsernames = await getValidUsernames();
  return validUsernames.includes(username);
}
