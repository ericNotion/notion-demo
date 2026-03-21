import { NextResponse } from "next/server";

/**
 * Returns environment variables needed for local development.
 * This endpoint is protected by Vercel deployment protection,
 * so only requests with a valid bypass token can access it.
 *
 * The actual secret values are stored in Vercel environment variables,
 * not in the codebase.
 */
export async function GET() {
  const envVars: Record<string, string> = {};

  // List of env vars to distribute to local development
  const keysToShare = [
    "OPENAI_API_KEY",
    "ANTHROPIC_API_KEY",
    "EXA_API_KEY",
    "NOTION_TOKEN",
    "NOTION_GUIDES_DATABASE_ID",
    "GOOGLE_GENERATIVE_AI_API_KEY",
  ];

  for (const key of keysToShare) {
    const value = process.env[key];
    if (value) {
      envVars[key] = value;
    }
  }

  // Return as plaintext key=value format for easy parsing
  const plaintext = Object.entries(envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  return new NextResponse(plaintext, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
