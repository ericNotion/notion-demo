import { allowFileSystemOperations } from "@/utils/env";
import { exec } from "child_process";
import { NextResponse } from "next/server";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function GET() {
  // Only allow in development mode
  if (!allowFileSystemOperations()) {
    return NextResponse.json({ prototypes: {} });
  }

  try {
    // Get git status for all prototype directories
    const repoRoot = process.cwd();

    const { stdout } = await execAsync("git status --porcelain .", {
      cwd: repoRoot,
    });

    // Parse git status output to find changed prototype directories
    const changedPrototypes = new Map<string, boolean>();

    if (stdout) {
      const lines = stdout
        .trim()
        .split("\n")
        .filter((line) => line.length > 0);

      for (const line of lines) {
        // Skip if not in src/app directory
        if (!line.includes("src/app/")) continue;

        // Extract the file path from git status output
        // Format: "XY filename" where X and Y are status codes
        // X is the index status, Y is the working tree status
        // There's always exactly 1 space after the two status characters
        const filePath = line.substring(2).trim();

        // Extract prototype path from file path
        // Pattern: src/app/username/prototype-name/...
        // Skip reserved directories: (root), (nds), (templates), api
        const protoMatch = filePath.match(/src\/app\/([^(/][^/]+)\/([^/]+)/);

        if (protoMatch) {
          const [, username, prototypeSlug] = protoMatch;
          // Skip reserved directories
          if (username !== "api" && !username.startsWith("(")) {
            const protoKey = `${username}/${prototypeSlug}`;
            changedPrototypes.set(protoKey, true);
          }
        }
      }
    }

    // Convert map to object for JSON response
    const prototypes: Record<string, boolean> = {};
    for (const [key, value] of changedPrototypes) {
      prototypes[key] = value;
    }

    return NextResponse.json({ prototypes });
  } catch (error) {
    console.error("Error getting git status:", error);
    return NextResponse.json({ prototypes: {} });
  }
}
