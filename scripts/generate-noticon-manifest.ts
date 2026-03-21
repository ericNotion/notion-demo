// This script converts SVG files from a source directory into noticon .icon.tsx components,
// then generates icon-manifest.ts and icon-import-map.ts for the noticons package.
//
// Usage:
//   bun scripts/generate-noticon-manifest.ts [svg-source-dir]
//
// If svg-source-dir is provided, it will generate .icon.tsx files from SVGs first.
// If omitted, it will only regenerate the manifest and import map from existing icon files.

import fs from "fs";
import path from "path";

const NOTICONS_SRC = path.join(__dirname, "../src/noticons/src");
const OUT_MANIFEST = path.join(__dirname, "../src/noticons/icon-manifest.ts");
const OUT_IMPORT_MAP = path.join(
  __dirname,
  "../src/noticons/icon-import-map.ts",
);

// Convert kebab-case filename to a valid camelCase JS identifier
function toCamelCase(str: string): string {
  let result = str.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
  // Prefix with underscore if it starts with a digit (invalid JS identifier)
  if (/^\d/.test(result)) {
    result = `_${result}`;
  }
  return result;
}

// Extract SVG inner content (the path elements) from an SVG file
function extractSvgContent(svgString: string): {
  paths: string;
  viewBox: string;
} {
  const viewBoxMatch = svgString.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 20 20";

  // Extract everything between <svg> and </svg>, removing fill attributes
  const innerMatch = svgString.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!innerMatch) return { paths: "", viewBox };

  // Remove fill="#..." from paths so the icon uses currentColor/CSS variables
  const paths = innerMatch[1].trim().replace(/\s*fill="[^"]*"/g, "");

  return { paths, viewBox };
}

// Generate a .icon.tsx file for a single noticon
function generateIconFile(
  name: string,
  paths: string,
  viewBox: string,
): string {
  return `import React from "react";

import {
  createIcon,
  type IconDefinition,
  type LoadedIconFunction,
} from "@nds-icons";

export const iconDefinition: IconDefinition = {
  viewBox: "${viewBox}",
  svg: (
    <>
      ${paths}
    </>
  ),
};

export const ${name}Icon: LoadedIconFunction = createIcon(
  "${name}",
  iconDefinition,
);
`;
}

// Generate an index.ts for an icon group (single variant since noticons don't have fill/small variants)
function generateIndexFile(name: string): string {
  return `import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const ${name}IconGroup: IconGroup<"default"> = createIconGroup(
  "${name}",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
`;
}

// Convert SVGs from a directory into .icon.tsx files
function importSvgs(svgDir: string) {
  if (!fs.existsSync(svgDir)) {
    console.error(`SVG directory not found: ${svgDir}`);
    process.exit(1);
  }

  const svgFiles = fs
    .readdirSync(svgDir)
    .filter((f) => f.endsWith(".svg"))
    .sort();

  console.log(`Found ${svgFiles.length} SVG files in ${svgDir}`);

  fs.mkdirSync(NOTICONS_SRC, { recursive: true });

  for (const svgFile of svgFiles) {
    const baseName = svgFile.replace(".svg", "");
    const camelName = toCamelCase(baseName);
    const svgContent = fs.readFileSync(path.join(svgDir, svgFile), "utf8");
    const { paths, viewBox } = extractSvgContent(svgContent);

    if (!paths) {
      console.warn(`  Skipping ${svgFile} (no path content found)`);
      continue;
    }

    const iconDir = path.join(NOTICONS_SRC, camelName);
    fs.mkdirSync(iconDir, { recursive: true });

    fs.writeFileSync(
      path.join(iconDir, "default.icon.tsx"),
      generateIconFile(camelName, paths, viewBox),
    );

    fs.writeFileSync(
      path.join(iconDir, "index.ts"),
      generateIndexFile(camelName),
    );
  }

  console.log(`Generated ${svgFiles.length} noticon components`);
}

// Generate icon-manifest.ts from existing icon directories
function generateManifest() {
  if (!fs.existsSync(NOTICONS_SRC)) {
    fs.writeFileSync(
      OUT_MANIFEST,
      `// AUTO-GENERATED FILE. DO NOT EDIT.\n// Run scripts/generate-noticon-manifest.ts to update.\n\nexport const noticonManifest = [] as const;\n`,
    );
    console.log("Wrote empty manifest (no icons found)");
    return [];
  }

  const dirs = fs
    .readdirSync(NOTICONS_SRC, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  const groups = dirs
    .map((dir) => {
      const indexPath = path.join(NOTICONS_SRC, dir, "index.ts");
      if (!fs.existsSync(indexPath)) return null;

      const content = fs.readFileSync(indexPath, "utf8");

      const nameMatch = content.match(
        /createIconGroup\(\s*['"]([a-zA-Z0-9_\-]+)['"]/,
      );
      const name = nameMatch ? nameMatch[1] : dir;

      const tagsMatch = content.match(/,\s*(\[[\s\S]*?\])\s*(?:,|\)|$)/m);
      let tags: string[] = [];
      if (tagsMatch) {
        try {
          tags = eval(tagsMatch[1]);
        } catch {
          tags = [];
        }
      }

      const variants: string[] = [];
      if (content.includes("default:")) variants.push("default");
      if (content.includes("small:")) variants.push("small");
      if (content.includes("fill:")) variants.push("fill");
      if (content.includes("fillSmall:")) variants.push("fillSmall");

      return { dir, name, tags, variants };
    })
    .filter(Boolean);

  const manifest = `// AUTO-GENERATED FILE. DO NOT EDIT.
// Run scripts/generate-noticon-manifest.ts to update.

export const noticonManifest = ${JSON.stringify(groups, null, 2)} as const;
`;

  fs.writeFileSync(OUT_MANIFEST, manifest, "utf8");
  console.log(`Wrote manifest for ${groups.length} noticon groups`);
  return groups;
}

// Generate icon-import-map.ts from existing icon directories
function generateImportMap(groups: any[]) {
  const importLines: string[] = [];
  const mapLines = ["export const noticonImportMap = {"];

  for (const group of groups) {
    if (!group) continue;
    mapLines.push(`  "${group.dir}": {`);
    for (const variant of group.variants) {
      const importName =
        variant === "default"
          ? `${group.dir}Icon`
          : variant === "small"
            ? `${group.dir}SmallIcon`
            : variant === "fill"
              ? `${group.dir}FillIcon`
              : variant === "fillSmall"
                ? `${group.dir}FillSmallIcon`
                : `${group.dir}Icon`;
      const importPath = `./src/${group.dir}/${variant}.icon`;
      importLines.push(`import { ${importName} } from "${importPath}";`);
      mapLines.push(`    "${variant}": ${importName},`);
    }
    mapLines.push("  },");
  }

  mapLines.push("} as const;\n");

  const fileContent =
    "// AUTO-GENERATED FILE. DO NOT EDIT.\n" +
    "// Run scripts/generate-noticon-manifest.ts to update.\n\n" +
    importLines.join("\n") +
    "\n\n" +
    mapLines.join("\n");

  fs.writeFileSync(OUT_IMPORT_MAP, fileContent, "utf8");
  console.log(`Wrote import map for ${groups.length} noticon groups`);
}

function main() {
  const svgDir = process.argv[2];

  if (svgDir) {
    const resolvedDir = path.resolve(svgDir);
    console.log(`\nImporting SVGs from ${resolvedDir}...\n`);
    importSvgs(resolvedDir);
    console.log("");
  }

  console.log("Generating manifest and import map...\n");
  const groups = generateManifest();
  generateImportMap(groups);
}

main();
