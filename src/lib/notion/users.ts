/**
 * Notion User Helpers
 *
 * This module provides functions for managing the mapping between
 * prototype usernames and Notion user IDs. Used by:
 * - Setup script to capture Notion user ID during onboarding
 * - Sync script to set the Author property on prototypes
 * - Backfill script to populate Author for existing prototypes
 */

import { promises as fs } from "fs";
import path from "path";

import { notion } from "./client";

// Path to the consolidated users file
const USERS_FILE = path.join(process.cwd(), "src/data/users.json");

/**
 * Playground user record with all identity mappings
 */
export interface PlaygroundUser {
  playgroundUsername: string;
  githubUsername: string;
  notionEmail: string;
  notionUserId: string;
  oauthEmail?: string;
  oauthProvider?: "okta" | "google";
}

// Type for Notion user from API
interface NotionUser {
  id: string;
  name: string | null;
  type: "person" | "bot";
  person?: {
    email?: string;
  };
  avatar_url: string | null;
}

/**
 * Load all users from the users.json file
 */
export async function loadUsers(): Promise<PlaygroundUser[]> {
  try {
    const content = await fs.readFile(USERS_FILE, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

/**
 * Save users to the users.json file
 */
export async function saveUsers(users: PlaygroundUser[]): Promise<void> {
  // Sort by playgroundUsername for consistent output
  const sorted = [...users].sort((a, b) =>
    a.playgroundUsername.localeCompare(b.playgroundUsername),
  );
  await fs.writeFile(
    USERS_FILE,
    JSON.stringify(sorted, null, 2) + "\n",
    "utf-8",
  );
}

/**
 * Find a user by their playground username
 */
export async function findUserByPlaygroundUsername(
  playgroundUsername: string,
): Promise<PlaygroundUser | undefined> {
  const users = await loadUsers();
  return users.find((u) => u.playgroundUsername === playgroundUsername);
}

/**
 * Find a user by their GitHub username
 */
async function findUserByGithubUsername(
  githubUsername: string,
): Promise<PlaygroundUser | undefined> {
  const users = await loadUsers();
  return users.find((u) => u.githubUsername === githubUsername);
}

/**
 * Find a user by their OAuth email address
 * Matches against oauthEmail first, then falls back to notionEmail
 */
export async function findUserByEmail(
  email: string,
): Promise<PlaygroundUser | undefined> {
  const normalizedEmail = email.toLowerCase().trim();
  const users = await loadUsers();
  return users.find(
    (u) =>
      u.oauthEmail?.toLowerCase() === normalizedEmail ||
      u.notionEmail.toLowerCase() === normalizedEmail,
  );
}

/**
 * Add or update a user in the users.json file
 */
export async function saveUser(user: PlaygroundUser): Promise<void> {
  const users = await loadUsers();
  const existingIndex = users.findIndex(
    (u) => u.playgroundUsername === user.playgroundUsername,
  );

  if (existingIndex >= 0) {
    users[existingIndex] = user;
  } else {
    users.push(user);
  }

  await saveUsers(users);
}

/**
 * Update just the Notion user ID for a user (by playground username)
 */
async function updateUserNotionId(
  playgroundUsername: string,
  notionUserId: string,
): Promise<void> {
  const users = await loadUsers();
  const user = users.find((u) => u.playgroundUsername === playgroundUsername);
  if (user) {
    user.notionUserId = notionUserId;
    await saveUsers(users);
  }
}

/**
 * List all users in the Notion workspace
 * Handles pagination automatically
 */
export async function listWorkspaceUsers(): Promise<NotionUser[]> {
  const allUsers: NotionUser[] = [];
  let cursor: string | undefined = undefined;

  do {
    const response = await notion.users.list({
      page_size: 100,
      start_cursor: cursor,
    });

    // Type assertion for user objects
    const users = response.results as NotionUser[];
    allUsers.push(...users);

    cursor = response.has_more
      ? (response.next_cursor ?? undefined)
      : undefined;
  } while (cursor);

  return allUsers;
}

/**
 * Look up a Notion user by their email address
 * Returns the user ID if found, null otherwise
 */
export async function lookupNotionUserByEmail(
  email: string,
): Promise<{ id: string; name: string | null } | null> {
  const normalizedEmail = email.toLowerCase().trim();
  const users = await listWorkspaceUsers();

  for (const user of users) {
    if (user.type === "person" && user.person?.email) {
      if (user.person.email.toLowerCase() === normalizedEmail) {
        return { id: user.id, name: user.name };
      }
    }
  }

  return null;
}

/**
 * Normalize a UUID to the standard format with hyphens.
 * Accepts UUIDs with or without hyphens (e.g., from Notion URLs).
 * Returns null if the input is not a valid UUID.
 */
export function normalizeUuid(uuid: string): string | null {
  // Skip empty values
  if (!uuid) {
    return null;
  }

  // Remove any existing hyphens and lowercase
  const cleaned = uuid.replace(/-/g, "").toLowerCase();

  // Validate length (32 hex characters)
  if (cleaned.length !== 32 || !/^[0-9a-f]+$/.test(cleaned)) {
    return null;
  }

  // Format as standard UUID: 8-4-4-4-12
  return [
    cleaned.slice(0, 8),
    cleaned.slice(8, 12),
    cleaned.slice(12, 16),
    cleaned.slice(16, 20),
    cleaned.slice(20, 32),
  ].join("-");
}

/**
 * Get Notion user ID for a given prototype username
 * Returns undefined if no mapping exists or if the value is invalid
 */
async function getNotionUserIdForUsername(
  username: string,
): Promise<string | undefined> {
  const user = await findUserByPlaygroundUsername(username);
  if (!user?.notionUserId) return undefined;

  // Normalize the UUID (handles both hyphenated and non-hyphenated formats)
  const normalizedId = normalizeUuid(user.notionUserId);
  return normalizedId ?? undefined;
}

// ============================================================
// Legacy compatibility functions - these load from the old files
// and will be removed once migration is complete
// ============================================================

/**
 * @deprecated Use loadUsers() instead
 * Load the username -> Notion user ID mapping (legacy format)
 */
export async function loadNotionUserIds(): Promise<Record<string, string>> {
  const users = await loadUsers();
  const mapping: Record<string, string> = {};
  for (const user of users) {
    if (user.notionUserId) {
      mapping[user.playgroundUsername] = user.notionUserId;
    }
  }
  return mapping;
}

/**
 * @deprecated Use findUserByGithubUsername() instead
 * Load the GitHub username to directory name mapping (legacy format)
 */
export async function loadGitHubUsernames(): Promise<Record<string, string>> {
  const users = await loadUsers();
  const mapping: Record<string, string> = {};
  for (const user of users) {
    mapping[user.githubUsername] = user.playgroundUsername;
  }
  return mapping;
}
