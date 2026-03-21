import { build } from "bun";
import { mkdir, readdir, rm } from "fs/promises";
import { dirname, join, relative } from "path";

/**
 * Directory containing the source TSX icon files *relative* to this script.
 */
const SRC_DIR = join(import.meta.dir, "src");
/**
 * Output directory for emitted ESM icon files.
 */
const DIST_DIR = join(import.meta.dir, "dist");

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.isFile() && full.endsWith(".tsx")) {
      files.push(full);
    }
  }
  return files;
}

async function ensureCleanDist() {
  await rm(DIST_DIR, { recursive: true, force: true });
}

async function main() {
  console.time("build nds-icons");
  await ensureCleanDist();

  // Build icon files from src/
  const files = await walk(SRC_DIR);
  const iconTasks = files.map(async (file) => {
    const rel = relative(SRC_DIR, file);
    const destDir = join(DIST_DIR, dirname(rel));
    await mkdir(destDir, { recursive: true });
    const result = await build({
      entrypoints: [file],
      outdir: destDir,
      format: "esm",
      target: "browser",
      minify: false,
      external: ["react", "react/jsx-runtime", "react/jsx-dev-runtime"],
    });
    if (!result.success) {
      throw new Error(`Failed to build ${file}`);
    }
  });

  // Build main entry files (index.ts, icon-manifest.ts, icon-import-map.ts)
  const mainFiles = ["index.ts", "icon-manifest.ts", "icon-import-map.ts"];
  const mainTasks = mainFiles.map(async (file) => {
    const filePath = join(import.meta.dir, file);
    const result = await build({
      entrypoints: [filePath],
      outdir: DIST_DIR,
      format: "esm",
      target: "browser",
      minify: false,
      external: ["react", "react/jsx-runtime", "react/jsx-dev-runtime"],
    });
    if (!result.success) {
      throw new Error(`Failed to build ${file}`);
    }
  });

  await Promise.all([...iconTasks, ...mainTasks]);
  console.timeEnd("build nds-icons");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
