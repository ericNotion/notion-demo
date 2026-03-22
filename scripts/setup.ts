/// <reference types="bun-types" />
import { promises as fs } from "fs";
import path from "path";

type PlaygroundUser = {
  playgroundUsername: string;
  githubUsername: string;
  notionEmail: string;
  notionUserId?: string;
  oauthEmail?: string;
  oauthProvider?: string;
};

const usersJsonPath = path.join(process.cwd(), "src/data/users.json");

async function findUserByPlaygroundUsername(
  username: string,
): Promise<PlaygroundUser | undefined> {
  try {
    const content = await fs.readFile(usersJsonPath, "utf-8");
    const users: PlaygroundUser[] = JSON.parse(content);
    return users.find((u) => u.playgroundUsername === username);
  } catch {
    return undefined;
  }
}

async function saveUser(user: PlaygroundUser): Promise<void> {
  let users: PlaygroundUser[] = [];
  try {
    const content = await fs.readFile(usersJsonPath, "utf-8");
    users = JSON.parse(content);
  } catch {
    // File doesn't exist yet
  }
  const idx = users.findIndex(
    (u) => u.playgroundUsername === user.playgroundUsername,
  );
  if (idx >= 0) {
    users[idx] = user;
  } else {
    users.push(user);
  }
  await fs.writeFile(
    usersJsonPath,
    JSON.stringify(users, null, 2) + "\n",
    "utf-8",
  );
}

// ============================================================
// Pure helper functions (exported for testing)
// ============================================================

/**
 * Parses an env file content into a Map of key-value pairs.
 * Skips comments and blank lines.
 */
export function parseEnvFile(content: string): Map<string, string> {
  const result = new Map<string, string>();
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }
    const eqIndex = trimmed.indexOf("=");
    const key = trimmed.slice(0, eqIndex);
    const value = trimmed.slice(eqIndex + 1);
    if (key) {
      result.set(key, value);
    }
  }
  return result;
}

/**
 * Merges remote env vars into existing file content, preserving structure.
 * Returns the updated content and change counts.
 */
export function mergeEnvContent(
  existingContent: string,
  remoteVars: Map<string, string>,
): { content: string; added: number; updated: number } {
  const existingLines = existingContent ? existingContent.split("\n") : [];
  const existingKeys = new Set<string>();

  // Track which keys exist in the file
  for (const line of existingLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const eqIndex = trimmed.indexOf("=");
    const key = trimmed.slice(0, eqIndex);
    if (key) existingKeys.add(key);
  }

  let updated = 0;
  let added = 0;

  // Update existing lines in place
  const updatedLines = existingLines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      return line;
    }
    const eqIndex = trimmed.indexOf("=");
    const key = trimmed.slice(0, eqIndex);
    if (key && remoteVars.has(key)) {
      const newValue = remoteVars.get(key)!;
      const oldValue = trimmed.slice(eqIndex + 1);
      if (oldValue !== newValue) {
        updated++;
      }
      return `${key}=${newValue}`;
    }
    return line;
  });

  // Append new keys
  for (const [key, value] of remoteVars) {
    if (!existingKeys.has(key)) {
      added++;
      updatedLines.push(`${key}=${value}`);
    }
  }

  // Clean trailing empty lines
  while (
    updatedLines.length > 0 &&
    updatedLines[updatedLines.length - 1] === ""
  ) {
    updatedLines.pop();
  }

  return {
    content: updatedLines.join("\n") + "\n",
    added,
    updated,
  };
}

/**
 * Updates .playground config content with username and source path.
 * Pure function that transforms content string.
 */
export function updatePlaygroundConfigContent(
  existingContent: string,
  username: string,
  sourcePath: string,
): string {
  let content = existingContent;
  const hasUsername = /^USERNAME=.*$/m.test(content);
  const hasSourcePath = /^SOURCE_PATH=.*$/m.test(content);

  // Update or add USERNAME
  if (hasUsername) {
    content = content.replace(/^USERNAME=.*$/m, `USERNAME=${username}`);
  } else {
    content = `USERNAME=${username}\n` + content;
  }

  // Update or add SOURCE_PATH
  if (hasSourcePath) {
    content = content.replace(/^SOURCE_PATH=.*$/m, `SOURCE_PATH=${sourcePath}`);
  } else {
    if (content.endsWith("\n") || content.length === 0) {
      content += `SOURCE_PATH=${sourcePath}\n`;
    } else {
      content += `\nSOURCE_PATH=${sourcePath}\n`;
    }
  }

  return content;
}

/**
 * Checks if CLAUDE.local.md content needs to be updated for the given username.
 */
export function needsClaudeLocalUpdate(
  existingContent: string,
  username: string,
): boolean {
  const usernameDir = username.toLowerCase();

  // Check if username matches
  const usernameMatch = existingContent.match(/\*\*Username\*\*: (.+)/);
  if (!usernameMatch || usernameMatch[1] !== username) {
    return true;
  }

  // Check if path is correct
  const pathPattern = new RegExp(`/src/app/${usernameDir}/`);
  if (!pathPattern.test(existingContent)) {
    return true;
  }

  return false;
}

/**
 * Extracts the bypass secret from .env.local content.
 */
export function extractBypassSecret(content: string): string | null {
  const match = content.match(/^VERCEL_AUTOMATION_BYPASS_SECRET=(.+)$/m);
  return match?.[1]?.trim() ?? null;
}

/**
 * Removes the bypass secret from .env.local content.
 */
export function removeBypassSecretContent(existingContent: string): string {
  const lines = existingContent.split("\n");
  const filtered = lines.filter(
    (line) => !line.trim().startsWith("VERCEL_AUTOMATION_BYPASS_SECRET="),
  );
  // Clean up any resulting double blank lines
  const cleaned: string[] = [];
  for (const line of filtered) {
    if (line === "" && cleaned[cleaned.length - 1] === "") {
      continue;
    }
    cleaned.push(line);
  }
  return cleaned.join("\n");
}

/**
 * Adds or updates the bypass secret in .env.local content.
 */
export function updateBypassSecretContent(
  existingContent: string,
  secret: string,
): string {
  if (existingContent.includes("VERCEL_AUTOMATION_BYPASS_SECRET=")) {
    return existingContent.replace(
      /^VERCEL_AUTOMATION_BYPASS_SECRET=.*$/m,
      `VERCEL_AUTOMATION_BYPASS_SECRET=${secret}`,
    );
  }

  let content = existingContent;
  if (content && !content.endsWith("\n")) {
    content += "\n";
  }
  content += `VERCEL_AUTOMATION_BYPASS_SECRET=${secret}\n`;
  return content;
}

/**
 * Extracts username from .playground file content.
 */
export function extractUsername(content: string): string | null {
  const match = content.match(/^USERNAME=(.+)$/m);
  return match?.[1]?.trim() ?? null;
}

// ============================================================
// Configuration and setup
// ============================================================

/**
 * Get the project root directory (same as cwd for flattened structure)
 */
function getProjectRoot(): string {
  return process.cwd();
}

/**
 * Checks if agent-browser is installed globally and installs it if not.
 * agent-browser is used for browser automation in verification workflows.
 */
async function ensureAgentBrowser(): Promise<void> {
  const { execSync, spawnSync } = await import("child_process");

  // Check if agent-browser is installed
  const checkResult = spawnSync("agent-browser", ["--version"], {
    stdio: "pipe",
    encoding: "utf-8",
  });

  if (checkResult.status === 0) {
    console.log(
      ` ✅ agent-browser is installed (${checkResult.stdout.trim()})`,
    );
    return;
  }

  console.log(" 🔧 Installing agent-browser globally...");
  try {
    execSync("npm install -g agent-browser", {
      stdio: "inherit",
    });
    console.log(" ✅ agent-browser installed");

    console.log(" 🔧 Installing Chromium for agent-browser...");
    const installResult = spawnSync("agent-browser", ["install"], {
      stdio: "pipe",
      encoding: "utf-8",
    });

    // Filter out Playwright's warning box (lines with box-drawing characters)
    const output = (installResult.stdout + installResult.stderr)
      .split("\n")
      .filter((line) => !line.match(/^[║╔╚]/))
      .join("\n")
      .trim();

    if (output) {
      console.log(output);
    }

    if (installResult.status !== 0) {
      throw new Error("agent-browser install failed");
    }
    console.log(" ✅ Chromium installed for agent-browser");
  } catch (error) {
    console.error(
      ` ⚠️ Failed to install agent-browser: ${error instanceof Error ? error.message : error}`,
    );
    console.error(
      " You can install it manually with: npm install -g agent-browser && agent-browser install",
    );
  }
}

// Use Bun's prompt for interactive input
async function prompt(question: string): Promise<string> {
  process.stdout.write(question);
  return new Promise((resolve) => {
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdin.once("data", (data) => {
      process.stdin.pause();
      resolve(data.toString().trim());
    });
  });
}

const configFile = path.join(getProjectRoot(), ".playground");
const tsconfigFile = path.join(process.cwd(), "tsconfig.json");
const envLocalFile = path.join(getProjectRoot(), ".env.local");

// URL for setup instructions when bypass secret is not set
const SETUP_INSTRUCTIONS_URL =
  "https://playground.makenotion.com/guides/getting-started";

// Parse flags
const FORCE_MODE = process.argv.includes("--force");
const LOCAL_MODE = process.argv.includes("--local");

/**
 * Validates a username for use as a directory name and URL path.
 * Returns an error message if invalid, or null if valid.
 */
export function validateUsername(username: string): string | null {
  if (!username) {
    return "Username is required.";
  }

  if (username.length > 30) {
    return "Username must be 30 characters or less.";
  }

  if (username.length < 2) {
    return "Username must be at least 2 characters.";
  }

  // Only allow alphanumeric characters and hyphens
  if (!/^[a-zA-Z0-9-]+$/.test(username)) {
    return "Username can only contain letters, numbers, and hyphens.";
  }

  // Don't allow starting or ending with hyphen
  if (username.startsWith("-") || username.endsWith("-")) {
    return "Username cannot start or end with a hyphen.";
  }

  // Don't allow consecutive hyphens
  if (username.includes("--")) {
    return "Username cannot contain consecutive hyphens.";
  }

  // Reserved names that could conflict with Next.js or file system
  const reservedNames = [
    "api",
    "app",
    "components",
    "hooks",
    "lib",
    "public",
    "src",
    "styles",
    "utils",
    "node_modules",
    "root",
    "admin",
    "login",
    "logout",
    "signup",
    "settings",
  ];
  if (reservedNames.includes(username.toLowerCase())) {
    return `"${username}" is a reserved name. Please choose a different username.`;
  }

  return null;
}

async function promptForUniqueUsername(): Promise<string> {
  const appDir = path.join(process.cwd(), "src/app");

  while (true) {
    const username = await prompt(" Pick a username for the playground: ");

    // Validate username format
    const validationError = validateUsername(username);
    if (validationError) {
      console.error(` ❌ ${validationError}`);
      continue;
    }

    const usernameDir = username.toLowerCase();
    const userDir = path.join(appDir, usernameDir);

    // Check if username already exists (skip check in force mode)
    if (!FORCE_MODE) {
      try {
        await fs.access(userDir);
        console.error(
          ` ❌ A user with the username '${username}' already exists. Please pick a unique username.`,
        );
        continue;
      } catch {
        // Directory does not exist, username is unique
      }
    }

    return username;
  }
}

async function promptForGitHubUsername(): Promise<string> {
  while (true) {
    const githubUsername = await prompt(
      " Enter your GitHub username (for syncing your prototypes to Notion): ",
    );
    if (!githubUsername) {
      console.error(" ❌ GitHub username is required for Notion sync.");
      continue;
    }
    return githubUsername.toLowerCase();
  }
}

async function promptForNotionEmail(): Promise<{
  email: string;
  notionUserId: string;
}> {
  // Use local API when --local flag is passed (for testing), otherwise production
  const API_URL = LOCAL_MODE
    ? "http://localhost:4000/api/lookup-notion-user"
    : "https://playground.makenotion.com/api/lookup-notion-user";

  while (true) {
    const email = await prompt(
      " Enter your Notion email (e.g., yourname@makenotion.com): ",
    );

    if (!email) {
      console.error(
        " ❌ Notion email is required for prototype authorship tracking.",
      );
      continue;
    }

    // Validate email format
    if (!email.includes("@")) {
      console.error(
        " ❌ Invalid email format. Please enter a valid email address.",
      );
      continue;
    }

    // Look up the user ID via production API
    console.log(" 🔍 Looking up Notion user...");
    try {
      const headers: Record<string, string> = {};
      const bypassSecret = await ensureBypassSecret();
      if (bypassSecret) {
        headers["x-vercel-protection-bypass"] = bypassSecret;
      }
      const response = await fetch(
        `${API_URL}?email=${encodeURIComponent(email)}`,
        { headers },
      );
      const contentType = response.headers.get("content-type") || "";
      const isJson = contentType.includes("application/json");
      if (response.ok && isJson) {
        const user = await response.json();
        console.log(` 📩 Found: ${user.name} (${email})`);
        return { email, notionUserId: user.id };
      } else if (response.status === 404 && isJson) {
        console.error(` No Notion user found with email "${email}".`);
        console.error(" Please check your email and try again.\n");
        continue;
      } else if (response.status === 401 || !isJson) {
        // Non-JSON response means Vercel auth page (bad/missing password)
        console.error(
          ` ❌ Invalid password. Get the latest password from ${SETUP_INSTRUCTIONS_URL}?source=copy_link#2ccb35e6e67f80c483dffffffb197517.\n`,
        );

        // Remove the bad secret from .env.local
        let existingContent = "";
        try {
          existingContent = await fs.readFile(envLocalFile, "utf-8");
        } catch {
          // File doesn't exist
        }
        const cleanedContent = removeBypassSecretContent(existingContent);
        await fs.writeFile(envLocalFile, cleanedContent, "utf-8");

        // Re-prompt for password
        const newBypassSecret = (
          await prompt(" Enter the setup password: ")
        ).trim();
        if (!newBypassSecret) {
          throw new Error(" 🔑 Password is required to continue setup.");
        }

        // Save the new password
        const updatedContent = updateBypassSecretContent(
          cleanedContent,
          newBypassSecret,
        );
        await fs.writeFile(envLocalFile, updatedContent, "utf-8");
        console.log(" ✅ Saved password to .env.local\n");

        // Retry with the same email
        continue;
      } else {
        throw new Error(` API error: ${response.status}`);
      }
    } catch (error) {
      console.error(
        ` ❌ Failed to look up Notion user: ${error instanceof Error ? error.message : error}`,
      );
      console.error(" Please try again.\n");
      continue;
    }
  }
}

// Get positional arguments (filter out flags like --force)
const positionalArgs = process.argv
  .slice(2)
  .filter((arg) => !arg.startsWith("--"));
const argUsername = positionalArgs[0] ?? "eric";

const appDir = path.join(process.cwd(), "src/app");

async function addTsconfigAlias(username: string) {
  const usernameDir = username.toLowerCase();
  const aliasKey = `@/${usernameDir}/*`;
  const aliasValue = [`./src/app/${usernameDir}/*`];
  let tsconfig;
  try {
    const tsconfigRaw = await fs.readFile(tsconfigFile, "utf-8");
    tsconfig = JSON.parse(tsconfigRaw);
  } catch (err) {
    console.error(" Failed to read tsconfig.json", err);
    return;
  }
  if (!tsconfig.compilerOptions) tsconfig.compilerOptions = {};
  if (!tsconfig.compilerOptions.paths) tsconfig.compilerOptions.paths = {};
  // Only add if not present
  if (!tsconfig.compilerOptions.paths[aliasKey]) {
    tsconfig.compilerOptions.paths[aliasKey] = aliasValue;
    try {
      await fs.writeFile(
        tsconfigFile,
        JSON.stringify(tsconfig, null, 2) + "\n",
        "utf-8",
      );
      console.log(
        ` 📝 Added tsconfig path alias: ${aliasKey} -> ${aliasValue[0]}`,
      );
    } catch (err) {
      console.error(" ❌ Failed to write tsconfig.json", err);
    }
  } else {
    console.log(` ✅ tsconfig path alias for ${aliasKey} already exists.`);
  }
}

export function generateClaudeLocalContent(username: string): string {
  const usernameDir = username.toLowerCase();
  return `# CLAUDE.local.md

This file provides user-specific guidance to Claude Code and other AI coding assistants when working in this repository.

## Current User

**Username**: ${username}

**Your Prototype Directory**: \`/src/app/${usernameDir}/\`

## IMPORTANT: File Modification Policy

**CRITICAL INSTRUCTIONS FOR AI ASSISTANTS:**

- **Prefer modifying files within \`/src/app/${usernameDir}/\`** - this is your primary workspace
- **Don't modify files in other user directories** unless explicitly requested to do so by the user like \`/src/app/brian/\`, \`/src/app/jclem/\`, etc.
- **You MAY read and reference** code from other user directories for examples and patterns
- **You MAY modify** shared components in \`/src/components/\`, \`/src/utils/\`, etc. when necessary
- **You MAY modify** global configurations, root-level files, and shared resources when explicitly requested

## Your Workspace Structure

Your prototypes should be created as subdirectories or files within your user directory:

\`\`\`
/src/app/${usernameDir}/
├── page.tsx              # Your main page
├── layout.tsx            # Your layout wrapper
├── styles.css            # Your custom styles
├── atoms.ts              # Your Jotai state atoms (if needed)
└── [prototype-name]/     # Additional prototype pages
    └── page.tsx
\`\`\`

## Referencing Other Work

When you need inspiration or want to understand patterns used elsewhere:

1. **Look at other user directories** for code examples
2. **DO NOT modify** files outside your directory
3. **Copy and adapt** patterns into your own workspace
4. **Ask the user** if you need to modify shared components

## Development Guidelines

Follow the conventions in the main \`CLAUDE.md\` file, but remember:
- Your changes should be isolated to your workspace
- Test your prototypes at \`http://localhost:4000/${usernameDir}\`
- Use the existing design system and shared components

---

*This file is auto-generated by the setup script and is specific to your local environment.*
`;
}

async function ensurePlaygroundConfig(username: string) {
  const projectRoot = getProjectRoot();
  let existingContent = "";

  try {
    existingContent = await fs.readFile(configFile, "utf-8");
  } catch {
    // File does not exist
  }

  const updatedContent = updatePlaygroundConfigContent(
    existingContent,
    username,
    projectRoot,
  );
  await fs.writeFile(configFile, updatedContent, "utf-8");
}

/**
 * Ensures the user directory exists with required template files.
 * This is idempotent - safe to call multiple times.
 */
async function ensureUserDirectory(username: string) {
  const usernameDir = username.toLowerCase();
  const userDir = path.join(appDir, usernameDir);

  // Create directory if it doesn't exist
  await fs.mkdir(userDir, { recursive: true });

  // Copy template files if they don't exist
  const templateLayout = path.join(appDir, "(root)", "template", "layout.tsx");
  const templateStyles = path.join(appDir, "(root)", "template", "styles.css");
  const userLayout = path.join(userDir, "layout.tsx");
  const userStyles = path.join(userDir, "styles.css");

  let copiedFiles = false;

  try {
    await fs.access(userLayout);
  } catch {
    await fs.copyFile(templateLayout, userLayout);
    copiedFiles = true;
  }

  try {
    await fs.access(userStyles);
  } catch {
    await fs.copyFile(templateStyles, userStyles);
    copiedFiles = true;
  }

  if (copiedFiles) {
    console.log(` 📝 Set up user directory: ${userDir}`);
  }
}

async function ensureClaudeLocalFile(username: string) {
  const projectRoot = getProjectRoot();
  const claudeLocalFile = path.join(projectRoot, "CLAUDE.local.md");

  let shouldWrite = false;
  let existingContent = "";

  try {
    existingContent = await fs.readFile(claudeLocalFile, "utf-8");
    shouldWrite = needsClaudeLocalUpdate(existingContent, username);
  } catch {
    // File doesn't exist, create it
    shouldWrite = true;
  }

  if (shouldWrite) {
    const content = generateClaudeLocalContent(username);
    await fs.writeFile(claudeLocalFile, content, "utf-8");
    console.log(` 📝 Updated ${claudeLocalFile}`);
  } else {
    console.log(` ✅ CLAUDE.local.md is up to date for ${username}`);
  }
}

/**
 * Ensures the bypass secret is available, prompting the user if needed.
 * Saves it to .env.local for future runs.
 * Returns the bypass secret or null if user cancels.
 */
async function ensureBypassSecret(): Promise<string | null> {
  // Check if already in environment
  const envSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  if (envSecret) {
    return envSecret;
  }

  // Check if it exists in .env.local but wasn't loaded
  let existingContent = "";
  try {
    existingContent = await fs.readFile(envLocalFile, "utf-8");
    const fileSecret = extractBypassSecret(existingContent);
    if (fileSecret) {
      return fileSecret;
    }
  } catch {
    // File doesn't exist yet
  }

  // Prompt user for the password
  console.log("\n ╭─────────────────────────────────────────────────────────╮");
  console.log(" │  🐸 Welcome to Prototype Playground!                    │");
  console.log(" ╰─────────────────────────────────────────────────────────╯");
  console.log(`\n Prototype Playground requires a password.`);
  console.log(
    ` Get the password from: ${SETUP_INSTRUCTIONS_URL}?source=copy_link#2ccb35e6e67f80c483dffffffb197517\n`,
  );

  const bypassSecret = (await prompt(" Enter the setup password: ")).trim();

  if (!bypassSecret) {
    console.error(" 🔑 Password is required to continue setup.");
    return null;
  }

  // Save to .env.local
  const updatedContent = updateBypassSecretContent(
    existingContent,
    bypassSecret,
  );
  await fs.writeFile(envLocalFile, updatedContent, "utf-8");
  console.log(" ✅ Saved password to .env.local\n");

  return bypassSecret;
}

/**
 * Fetches environment variables from the production API and merges them into .env.local.
 * Requires VERCEL_AUTOMATION_BYPASS_SECRET to be set.
 * Returns true if successful, false if bypass secret is not set.
 */
async function syncEnvVars(): Promise<boolean> {
  const bypassSecret = await ensureBypassSecret();

  if (!bypassSecret) {
    return false;
  }

  // Use local API when --local flag is passed (for testing), otherwise production
  const API_URL = LOCAL_MODE
    ? "http://localhost:4000/api/setup-env"
    : "https://playground.makenotion.com/api/setup-env";

  console.log(" 🔄 Syncing environment variables...");

  try {
    const response = await fetch(API_URL, {
      headers: {
        "x-vercel-protection-bypass": bypassSecret,
      },
    });

    const contentType = response.headers.get("content-type") || "";
    const isHtml = contentType.includes("text/html");
    if (!response.ok || isHtml) {
      if (response.status === 401 || isHtml) {
        console.error(
          ` ❌ Invalid password. Get the latest password from ${SETUP_INSTRUCTIONS_URL}?source=copy_link#2ccb35e6e67f80c483dffffffb197517.\n`,
        );

        // Remove the bad secret from .env.local
        let existingContent = "";
        try {
          existingContent = await fs.readFile(envLocalFile, "utf-8");
        } catch {
          // File doesn't exist
        }
        const cleanedContent = removeBypassSecretContent(existingContent);
        await fs.writeFile(envLocalFile, cleanedContent, "utf-8");

        // Re-prompt for password
        const newBypassSecret = (
          await prompt(" Enter the setup password: ")
        ).trim();
        if (!newBypassSecret) {
          console.error(" 🔑 Password is required to continue setup.");
          return false;
        }

        // Save the new password
        const updatedContent = updateBypassSecretContent(
          cleanedContent,
          newBypassSecret,
        );
        await fs.writeFile(envLocalFile, updatedContent, "utf-8");
        console.log(" ✅ Saved password to .env.local\n");

        // Retry the sync with the new password
        return syncEnvVars();
      }
      throw new Error(` ❌ API error: ${response.status}`);
    }

    const plaintext = await response.text();
    const remoteEnvVars = new Map<string, string>();

    // Parse the plaintext response (KEY=value format, one per line)
    for (const line of plaintext.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || !trimmed.includes("=")) continue;
      const eqIndex = trimmed.indexOf("=");
      const key = trimmed.slice(0, eqIndex);
      const value = trimmed.slice(eqIndex + 1);
      if (key && value) {
        remoteEnvVars.set(key, value);
      }
    }

    if (remoteEnvVars.size === 0) {
      console.log(" ✅ No environment variables to sync.");
      return true;
    }

    // Read existing .env.local if it exists
    let existingContent = "";
    try {
      existingContent = await fs.readFile(envLocalFile, "utf-8");
    } catch {
      // File doesn't exist yet, that's fine
    }

    // Merge remote vars into existing content, preserving structure
    const { content, added, updated } = mergeEnvContent(
      existingContent,
      remoteEnvVars,
    );

    await fs.writeFile(envLocalFile, content, "utf-8");

    if (added > 0 || updated > 0) {
      console.log(
        ` 🔄 Synced ${added} new, ${updated} updated environment variables.`,
      );
    } else {
      console.log(" ✅ Environment variables are up to date.");
    }

    return true;
  } catch (error) {
    console.error(
      ` ❌ Failed to sync environment variables: ${error instanceof Error ? error.message : error}`,
    );
    return false;
  }
}

export async function setupUser() {
  // Sync environment variables first (requires bypass secret)
  const envSynced = await syncEnvVars();
  if (!envSynced) {
    process.exit(1);
  }

  // Ensure agent-browser is installed for browser automation
  await ensureAgentBrowser();

  // Check if username is already set
  let savedUsername: string | null = null;
  try {
    const content = await fs.readFile(configFile, "utf-8");
    savedUsername = extractUsername(content);
  } catch {
    // File doesn't exist, first time setup
  }

  if (savedUsername) {
    // Check if user exists in users.json
    const existingUser = await findUserByPlaygroundUsername(
      savedUsername.toLowerCase(),
    );

    if (existingUser) {
      // User fully set up - ensure everything is in place (idempotent)
      await ensurePlaygroundConfig(savedUsername);
      await ensureUserDirectory(savedUsername);
      await ensureClaudeLocalFile(savedUsername);
      console.log(` 👋 Welcome back, ${savedUsername}!\n\n`);
      return;
    }

    // User has .playground file but is not in users.json (legacy user)
    // Collect missing metadata
    console.log(
      `\n 👋 Welcome back, ${savedUsername}! We need a few more details to complete your setup.\n`,
    );

    const githubUsername = await promptForGitHubUsername();
    const { email: notionEmail, notionUserId } = await promptForNotionEmail();

    const usernameDir = savedUsername.toLowerCase();

    // Save user to users.json
    const newUser: PlaygroundUser = {
      playgroundUsername: usernameDir,
      githubUsername,
      notionEmail,
      notionUserId,
      oauthEmail: notionEmail,
      oauthProvider: "okta",
    };
    await saveUser(newUser);
    console.log(` 📝 Added user to users.json: ${usernameDir}`);

    // Ensure user directory exists (handles partial failure recovery)
    await ensureUserDirectory(savedUsername);
    await ensurePlaygroundConfig(savedUsername);
    await ensureClaudeLocalFile(savedUsername);
    await addTsconfigAlias(savedUsername);

    console.log(` 🐸 Setup complete! Your user profile has been updated.\n`);
    return;
  }

  // If username was provided as argument, check if it already exists
  let username: string;
  if (argUsername) {
    const usernameDir = argUsername.toLowerCase();
    const existingArgUser = await findUserByPlaygroundUsername(usernameDir);
    if (existingArgUser) {
      // User already fully set up — just ensure config files exist
      await ensurePlaygroundConfig(argUsername);
      await ensureUserDirectory(argUsername);
      await ensureClaudeLocalFile(argUsername);
      console.log(` 👋 Welcome back, ${argUsername}!\n\n`);
      return;
    }
    username = argUsername;
  } else {
    username = await promptForUniqueUsername();
  }

  // Get GitHub username for PR author mapping
  const githubUsername = await promptForGitHubUsername();

  // Get Notion email (required) for Author field
  const { email: notionEmail, notionUserId } = await promptForNotionEmail();

  const usernameDir = username.toLowerCase();

  // Save user to consolidated users.json
  const newUser: PlaygroundUser = {
    playgroundUsername: usernameDir,
    githubUsername,
    notionEmail,
    notionUserId,
    oauthEmail: notionEmail,
    oauthProvider: "okta",
  };
  await saveUser(newUser);
  console.log(` 📝 Added user to users.json: ${usernameDir}`);
  if (notionUserId) {
    console.log(` ✅ Notion user ID: ${notionUserId}`);
  }

  // Write .playground config FIRST so re-runs can recover via legacy user flow
  // This ensures partial failures are resumable
  await ensurePlaygroundConfig(username);

  // Create user directory and copy templates (idempotent)
  await ensureUserDirectory(username);

  // Create/update CLAUDE.local.md with user-specific instructions
  await ensureClaudeLocalFile(username);

  // Add tsconfig alias for this user
  await addTsconfigAlias(username);

  console.log(
    ` 🐸 Setup complete! You can now access playground at http://localhost:4000`,
  );
}

// Only run setup if this file is executed directly
if (import.meta.main) {
  setupUser().catch((err) => {
    console.error(` ${err}`);
    process.exit(1);
  });
}
