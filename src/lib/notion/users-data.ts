/**
 * Static user data for Edge Runtime contexts
 *
 * This file exports user data as a constant so it can be used in Edge Runtime
 * contexts like middleware, where Node.js APIs (fs, path) are not available.
 *
 * Generated from src/data/users.json
 */

import usersJson from "@/data/users.json";

export interface PlaygroundUser {
  playgroundUsername: string;
  githubUsername: string;
  notionEmail: string;
  notionUserId: string;
  oauthEmail?: string;
  oauthProvider?: "okta" | "google";
}

export const USERS: PlaygroundUser[] = usersJson as PlaygroundUser[];

/**
 * Find a user by their OAuth email address
 * Matches against oauthEmail first, then falls back to notionEmail
 */
export function findUserByEmail(email: string): PlaygroundUser | undefined {
  const normalizedEmail = email.toLowerCase().trim();
  return USERS.find(
    (u) =>
      u.oauthEmail?.toLowerCase() === normalizedEmail ||
      u.notionEmail.toLowerCase() === normalizedEmail,
  );
}

/**
 * Find a user by their playground username
 */
export function findUserByPlaygroundUsername(
  playgroundUsername: string,
): PlaygroundUser | undefined {
  return USERS.find((u) => u.playgroundUsername === playgroundUsername);
}
