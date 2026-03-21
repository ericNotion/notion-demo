import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/app",
  testMatch: "**/*.e2e.ts",
  timeout: 30_000,
  use: {
    baseURL: "http://localhost:4000",
    browserName: "chromium",
  },
});
