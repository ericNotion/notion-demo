#!/usr/bin/env bun
/**
 * Icon Search Script
 *
 * Searches the NDS icons library by name or synonyms.
 * Usage: bun run .claude/skills/find-icon/scripts/search-icons.ts <query>
 *
 * Examples:
 *   bun run .claude/skills/find-icon/scripts/search-icons.ts search
 *   bun run .claude/skills/find-icon/scripts/search-icons.ts arrow up
 *   bun run .claude/skills/find-icon/scripts/search-icons.ts notification
 */

import { readdirSync, readFileSync } from "fs";
import { join } from "path";

interface IconMatch {
  name: string;
  variants: string[];
  synonyms: string[];
  importPath: string;
  score: number;
}

function findProjectRoot(): string {
  // Navigate up from the current working directory to find the project root
  let dir = process.cwd();
  while (dir !== "/") {
    try {
      readFileSync(join(dir, "package.json"));
      // Check if this is the project root (has src/nds-icons)
      try {
        readdirSync(join(dir, "src/nds-icons"));
        return dir;
      } catch {
        // Not the project root, keep looking
      }
    } catch {
      // No package.json, keep going up
    }
    dir = join(dir, "..");
  }
  throw new Error("Could not find project root");
}

function parseIconIndex(
  content: string,
): { name: string; variants: string[]; synonyms: string[] } | null {
  // Extract icon name from createIconGroup call
  const nameMatch = content.match(/createIconGroup\(\s*["'](\w+)["']/);
  if (!nameMatch) return null;

  const name = nameMatch[1];

  // Extract variants from IconGroup type
  const variantsMatch = content.match(/IconGroup<\s*([^>]+)>/);
  let variants: string[] = ["default"];
  if (variantsMatch) {
    variants = variantsMatch[1]
      .split("|")
      .map((v) => v.trim().replace(/["']/g, ""))
      .filter(Boolean);
  }

  // Extract synonyms array (last argument to createIconGroup)
  // Pattern: }, }, ["synonym1", "synonym2"], )
  const synonymsMatch = content.match(/\},\s*\},\s*\[([^\]]+)\]/);
  let synonyms: string[] = [];
  if (synonymsMatch) {
    synonyms = synonymsMatch[1]
      .split(",")
      .map((s) => s.trim().replace(/["']/g, ""))
      .filter(Boolean);
  }

  return { name, variants, synonyms };
}

function searchIcons(query: string): IconMatch[] {
  const projectRoot = findProjectRoot();
  const iconsDir = join(projectRoot, "src/nds-icons/src");

  const queryTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const results: IconMatch[] = [];

  // Read all icon directories
  const iconDirs = readdirSync(iconsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("."))
    .map((d) => d.name);

  for (const iconDir of iconDirs) {
    const indexPath = join(iconsDir, iconDir, "index.ts");
    try {
      const content = readFileSync(indexPath, "utf-8");
      const parsed = parseIconIndex(content);
      if (!parsed) continue;

      // Calculate match score
      let score = 0;
      const nameLower = parsed.name.toLowerCase();
      const allTerms = [
        nameLower,
        ...parsed.synonyms.map((s) => s.toLowerCase()),
      ];

      for (const term of queryTerms) {
        // Exact match in name
        if (nameLower === term) {
          score += 100;
        }
        // Name contains term
        else if (nameLower.includes(term)) {
          score += 50;
        }
        // Name starts with term
        else if (nameLower.startsWith(term)) {
          score += 40;
        }
        // Exact synonym match
        else if (parsed.synonyms.some((s) => s.toLowerCase() === term)) {
          score += 30;
        }
        // Synonym contains term
        else if (parsed.synonyms.some((s) => s.toLowerCase().includes(term))) {
          score += 20;
        }
        // Fuzzy: any term contains the query
        else if (allTerms.some((t) => t.includes(term))) {
          score += 10;
        }
      }

      if (score > 0) {
        results.push({
          name: parsed.name,
          variants: parsed.variants,
          synonyms: parsed.synonyms,
          importPath: `@nds-icons/${iconDir}/default.icon`,
          score,
        });
      }
    } catch {
      // Skip directories without index.ts
    }
  }

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score);
}

function formatResults(results: IconMatch[], query: string): void {
  if (results.length === 0) {
    console.log(`\nNo icons found for "${query}"`);
    console.log("\nTry searching with different terms, or browse:");
    console.log("  src/nds-icons/src/");
    return;
  }

  console.log(`\nFound ${results.length} icon(s) for "${query}":\n`);

  // Show top results (max 10)
  const topResults = results.slice(0, 10);

  for (const icon of topResults) {
    console.log(`  ${icon.name}`);
    console.log(`    Variants: ${icon.variants.join(", ")}`);
    console.log(`    Synonyms: ${icon.synonyms.join(", ")}`);
    console.log(
      `    Import:   import { ${icon.name}Icon } from "${icon.importPath}"`,
    );
    console.log();
  }

  if (results.length > 10) {
    console.log(`  ... and ${results.length - 10} more results`);
  }

  // Show example usage
  const best = topResults[0];
  console.log("Example usage:");
  console.log('  import { Icon } from "@nds-icons";');
  console.log(`  import { ${best.name}Icon } from "${best.importPath}";`);
  console.log();
  console.log(`  <Icon icon={${best.name}Icon} />`);
}

// Main
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Usage: bun run search-icons.ts <query>");
  console.log("Example: bun run search-icons.ts search");
  process.exit(1);
}

const query = args.join(" ");
const results = searchIcons(query);
formatResults(results, query);
