#!/usr/bin/env bun
import { rm } from "node:fs/promises";
import { join } from "node:path";
import { generateStaticData } from "./generate-static-data";

async function prebuild() {
  console.log("🚀 Starting prebuild process...");

  try {
    // Clean .next directory to ensure fresh build with correct Next.js version
    // This is necessary because Vercel's build cache can restore an old .next
    // directory with a different Next.js version
    const nextDir = join(import.meta.dir, "..", ".next");
    try {
      await rm(nextDir, { recursive: true, force: true });
      console.log("✓ Cleaned .next directory");
    } catch {
      // Directory may not exist, that's fine
    }

    // Generate static data
    await generateStaticData();

    console.log("✅ Prebuild completed successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Prebuild failed:", error);
    process.exit(1);
  }
}

// Run prebuild if called directly
if (import.meta.main) {
  prebuild();
}

export { prebuild };
