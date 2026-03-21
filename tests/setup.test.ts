import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import { promises as fs } from "fs";
import { tmpdir } from "os";
import path from "path";

import {
  extractBypassSecret,
  extractUsername,
  generateClaudeLocalContent,
  mergeEnvContent,
  needsClaudeLocalUpdate,
  parseEnvFile,
  updateBypassSecretContent,
  updatePlaygroundConfigContent,
  validateUsername,
} from "../scripts/setup";

// ============================================================
// validateUsername tests
// ============================================================

describe("validateUsername", () => {
  it("returns error for empty username", () => {
    expect(validateUsername("")).toBe("Username is required.");
  });

  it("returns error for username that is too short", () => {
    expect(validateUsername("a")).toBe(
      "Username must be at least 2 characters.",
    );
  });

  it("returns error for username that is too long", () => {
    const longName = "a".repeat(31);
    expect(validateUsername(longName)).toBe(
      "Username must be 30 characters or less.",
    );
  });

  it("returns error for username with special characters", () => {
    expect(validateUsername("user@name")).toBe(
      "Username can only contain letters, numbers, and hyphens.",
    );
    expect(validateUsername("user name")).toBe(
      "Username can only contain letters, numbers, and hyphens.",
    );
    expect(validateUsername("user.name")).toBe(
      "Username can only contain letters, numbers, and hyphens.",
    );
    expect(validateUsername("user_name")).toBe(
      "Username can only contain letters, numbers, and hyphens.",
    );
  });

  it("returns error for username starting with hyphen", () => {
    expect(validateUsername("-username")).toBe(
      "Username cannot start or end with a hyphen.",
    );
  });

  it("returns error for username ending with hyphen", () => {
    expect(validateUsername("username-")).toBe(
      "Username cannot start or end with a hyphen.",
    );
  });

  it("returns error for username with consecutive hyphens", () => {
    expect(validateUsername("user--name")).toBe(
      "Username cannot contain consecutive hyphens.",
    );
  });

  it("returns error for reserved names", () => {
    expect(validateUsername("api")).toContain("reserved name");
    expect(validateUsername("API")).toContain("reserved name");
    expect(validateUsername("src")).toContain("reserved name");
    expect(validateUsername("admin")).toContain("reserved name");
    expect(validateUsername("login")).toContain("reserved name");
  });

  it("returns null for valid usernames", () => {
    expect(validateUsername("brian")).toBeNull();
    expect(validateUsername("user123")).toBeNull();
    expect(validateUsername("my-user")).toBeNull();
    expect(validateUsername("ab")).toBeNull();
    expect(validateUsername("A".repeat(30))).toBeNull();
  });
});

// ============================================================
// parseEnvFile tests
// ============================================================

describe("parseEnvFile", () => {
  it("parses simple key-value pairs", () => {
    const content = "KEY1=value1\nKEY2=value2";
    const result = parseEnvFile(content);
    expect(result.get("KEY1")).toBe("value1");
    expect(result.get("KEY2")).toBe("value2");
    expect(result.size).toBe(2);
  });

  it("skips comments", () => {
    const content = "# This is a comment\nKEY=value\n# Another comment";
    const result = parseEnvFile(content);
    expect(result.get("KEY")).toBe("value");
    expect(result.size).toBe(1);
  });

  it("skips blank lines", () => {
    const content = "KEY1=value1\n\n\nKEY2=value2";
    const result = parseEnvFile(content);
    expect(result.size).toBe(2);
  });

  it("handles values with equals signs", () => {
    const content = "KEY=value=with=equals";
    const result = parseEnvFile(content);
    expect(result.get("KEY")).toBe("value=with=equals");
  });

  it("handles empty values", () => {
    const content = "KEY=";
    const result = parseEnvFile(content);
    expect(result.get("KEY")).toBe("");
  });

  it("handles whitespace around lines", () => {
    const content = "  KEY=value  ";
    const result = parseEnvFile(content);
    expect(result.get("KEY")).toBe("value");
  });

  it("returns empty map for empty content", () => {
    const result = parseEnvFile("");
    expect(result.size).toBe(0);
  });
});

// ============================================================
// mergeEnvContent tests
// ============================================================

describe("mergeEnvContent", () => {
  it("adds new variables to empty content", () => {
    const remoteVars = new Map([["KEY", "value"]]);
    const result = mergeEnvContent("", remoteVars);
    expect(result.content).toBe("KEY=value\n");
    expect(result.added).toBe(1);
    expect(result.updated).toBe(0);
  });

  it("updates existing variables", () => {
    const existing = "KEY=old-value\n";
    const remoteVars = new Map([["KEY", "new-value"]]);
    const result = mergeEnvContent(existing, remoteVars);
    expect(result.content).toBe("KEY=new-value\n");
    expect(result.added).toBe(0);
    expect(result.updated).toBe(1);
  });

  it("preserves comments", () => {
    const existing = "# Database config\nDB_HOST=localhost\n";
    const remoteVars = new Map([["DB_HOST", "newhost"]]);
    const result = mergeEnvContent(existing, remoteVars);
    expect(result.content).toContain("# Database config");
    expect(result.content).toContain("DB_HOST=newhost");
  });

  it("preserves blank lines", () => {
    const existing = "KEY1=value1\n\nKEY2=value2\n";
    const remoteVars = new Map([["KEY1", "updated"]]);
    const result = mergeEnvContent(existing, remoteVars);
    expect(result.content).toBe("KEY1=updated\n\nKEY2=value2\n");
  });

  it("adds new keys at the end", () => {
    // Note: "KEY1=value1\n" splits to ["KEY1=value1", ""], preserving structure
    const existing = "KEY1=value1";
    const remoteVars = new Map([["KEY2", "value2"]]);
    const result = mergeEnvContent(existing, remoteVars);
    expect(result.content).toBe("KEY1=value1\nKEY2=value2\n");
    expect(result.added).toBe(1);
  });

  it("preserves local-only variables", () => {
    const existing = "LOCAL_KEY=local-value\nREMOTE_KEY=old-value\n";
    const remoteVars = new Map([["REMOTE_KEY", "new-value"]]);
    const result = mergeEnvContent(existing, remoteVars);
    expect(result.content).toContain("LOCAL_KEY=local-value");
    expect(result.content).toContain("REMOTE_KEY=new-value");
  });

  it("counts unchanged values as 0 updates", () => {
    const existing = "KEY=same-value\n";
    const remoteVars = new Map([["KEY", "same-value"]]);
    const result = mergeEnvContent(existing, remoteVars);
    expect(result.updated).toBe(0);
  });

  it("removes trailing empty lines", () => {
    const existing = "KEY=value\n\n\n";
    const remoteVars = new Map<string, string>();
    const result = mergeEnvContent(existing, remoteVars);
    expect(result.content).toBe("KEY=value\n");
  });
});

// ============================================================
// updatePlaygroundConfigContent tests
// ============================================================

describe("updatePlaygroundConfigContent", () => {
  it("creates content for empty file", () => {
    const result = updatePlaygroundConfigContent("", "brian", "/path/to/root");
    expect(result).toContain("USERNAME=brian");
    expect(result).toContain("SOURCE_PATH=/path/to/root");
  });

  it("updates existing USERNAME", () => {
    const existing = "USERNAME=olduser\nSOURCE_PATH=/old/path\n";
    const result = updatePlaygroundConfigContent(
      existing,
      "newuser",
      "/new/path",
    );
    expect(result).toContain("USERNAME=newuser");
    expect(result).not.toContain("USERNAME=olduser");
  });

  it("updates existing SOURCE_PATH", () => {
    const existing = "USERNAME=brian\nSOURCE_PATH=/old/path\n";
    const result = updatePlaygroundConfigContent(
      existing,
      "brian",
      "/new/path",
    );
    expect(result).toContain("SOURCE_PATH=/new/path");
    expect(result).not.toContain("SOURCE_PATH=/old/path");
  });

  it("adds USERNAME if missing", () => {
    const existing = "SOURCE_PATH=/path\n";
    const result = updatePlaygroundConfigContent(existing, "brian", "/path");
    expect(result).toContain("USERNAME=brian");
    expect(result.indexOf("USERNAME=brian")).toBeLessThan(
      result.indexOf("SOURCE_PATH"),
    );
  });

  it("adds SOURCE_PATH if missing", () => {
    const existing = "USERNAME=brian\n";
    const result = updatePlaygroundConfigContent(existing, "brian", "/path");
    expect(result).toContain("SOURCE_PATH=/path");
  });

  it("preserves other content", () => {
    const existing = "USERNAME=brian\nCUSTOM_VAR=custom\nSOURCE_PATH=/path\n";
    const result = updatePlaygroundConfigContent(
      existing,
      "newuser",
      "/newpath",
    );
    expect(result).toContain("CUSTOM_VAR=custom");
  });

  it("handles content without trailing newline", () => {
    const existing = "USERNAME=brian";
    const result = updatePlaygroundConfigContent(existing, "brian", "/path");
    expect(result).toContain("SOURCE_PATH=/path");
    expect(result.endsWith("\n")).toBe(true);
  });
});

// ============================================================
// needsClaudeLocalUpdate tests
// ============================================================

describe("needsClaudeLocalUpdate", () => {
  const validContent = `# CLAUDE.local.md
**Username**: brian
**Your Prototype Directory**: \`/src/app/brian/\`
`;

  it("returns true if username is missing", () => {
    const content = "# CLAUDE.local.md\nSome content without username";
    expect(needsClaudeLocalUpdate(content, "brian")).toBe(true);
  });

  it("returns true if username is different", () => {
    expect(needsClaudeLocalUpdate(validContent, "different")).toBe(true);
  });

  it("returns true if path is missing", () => {
    const content = "**Username**: brian\nNo path here";
    expect(needsClaudeLocalUpdate(content, "brian")).toBe(true);
  });

  it("returns false if content is correct", () => {
    expect(needsClaudeLocalUpdate(validContent, "brian")).toBe(false);
  });

  it("handles case sensitivity for username", () => {
    const content = `**Username**: Brian\n/src/app/brian/`;
    // Username "Brian" should match "Brian", not "brian"
    expect(needsClaudeLocalUpdate(content, "Brian")).toBe(false);
    expect(needsClaudeLocalUpdate(content, "brian")).toBe(true);
  });

  it("handles case sensitivity for path (lowercase)", () => {
    const content = `**Username**: Brian\n/src/app/BRIAN/`;
    // Path should be lowercase version of username
    expect(needsClaudeLocalUpdate(content, "Brian")).toBe(true);
  });
});

// ============================================================
// extractBypassSecret tests
// ============================================================

describe("extractBypassSecret", () => {
  it("extracts secret from content", () => {
    const content =
      "OTHER_VAR=value\nVERCEL_AUTOMATION_BYPASS_SECRET=mysecret\n";
    expect(extractBypassSecret(content)).toBe("mysecret");
  });

  it("returns null if secret is not present", () => {
    const content = "OTHER_VAR=value\n";
    expect(extractBypassSecret(content)).toBeNull();
  });

  it("trims whitespace from secret", () => {
    const content = "VERCEL_AUTOMATION_BYPASS_SECRET=  mysecret  \n";
    expect(extractBypassSecret(content)).toBe("mysecret");
  });

  it("handles secret with special characters", () => {
    const content = "VERCEL_AUTOMATION_BYPASS_SECRET=abc123!@#$%\n";
    expect(extractBypassSecret(content)).toBe("abc123!@#$%");
  });

  it("returns null for empty content", () => {
    expect(extractBypassSecret("")).toBeNull();
  });
});

// ============================================================
// updateBypassSecretContent tests
// ============================================================

describe("updateBypassSecretContent", () => {
  it("adds secret to empty content", () => {
    const result = updateBypassSecretContent("", "mysecret");
    expect(result).toBe("VERCEL_AUTOMATION_BYPASS_SECRET=mysecret\n");
  });

  it("adds secret to existing content", () => {
    const result = updateBypassSecretContent("OTHER_VAR=value\n", "mysecret");
    expect(result).toContain("OTHER_VAR=value");
    expect(result).toContain("VERCEL_AUTOMATION_BYPASS_SECRET=mysecret");
  });

  it("updates existing secret", () => {
    const existing = "VERCEL_AUTOMATION_BYPASS_SECRET=oldsecret\n";
    const result = updateBypassSecretContent(existing, "newsecret");
    expect(result).toContain("VERCEL_AUTOMATION_BYPASS_SECRET=newsecret");
    expect(result).not.toContain("oldsecret");
  });

  it("adds newline before secret if content doesn't end with newline", () => {
    const result = updateBypassSecretContent("OTHER_VAR=value", "mysecret");
    expect(result).toBe(
      "OTHER_VAR=value\nVERCEL_AUTOMATION_BYPASS_SECRET=mysecret\n",
    );
  });
});

// ============================================================
// extractUsername tests
// ============================================================

describe("extractUsername", () => {
  it("extracts username from content", () => {
    const content = "USERNAME=brian\nSOURCE_PATH=/path\n";
    expect(extractUsername(content)).toBe("brian");
  });

  it("returns null if username is not present", () => {
    const content = "SOURCE_PATH=/path\n";
    expect(extractUsername(content)).toBeNull();
  });

  it("trims whitespace from username", () => {
    const content = "USERNAME=  brian  \n";
    expect(extractUsername(content)).toBe("brian");
  });

  it("handles username with hyphens", () => {
    const content = "USERNAME=my-user-name\n";
    expect(extractUsername(content)).toBe("my-user-name");
  });

  it("returns null for empty content", () => {
    expect(extractUsername("")).toBeNull();
  });
});

// ============================================================
// generateClaudeLocalContent tests
// ============================================================

describe("generateClaudeLocalContent", () => {
  it("includes username in content", () => {
    const content = generateClaudeLocalContent("Brian");
    expect(content).toContain("**Username**: Brian");
  });

  it("uses lowercase username in paths", () => {
    const content = generateClaudeLocalContent("Brian");
    expect(content).toContain("/src/app/brian/");
    expect(content).not.toContain("/src/app/Brian/");
  });

  it("includes prototype directory path", () => {
    const content = generateClaudeLocalContent("testuser");
    expect(content).toContain(
      "**Your Prototype Directory**: `/src/app/testuser/`",
    );
  });

  it("includes localhost URL with username", () => {
    const content = generateClaudeLocalContent("testuser");
    expect(content).toContain("http://localhost:4000/testuser");
  });

  it("includes workspace structure example", () => {
    const content = generateClaudeLocalContent("testuser");
    expect(content).toContain("/src/app/testuser/");
    expect(content).toContain("page.tsx");
    expect(content).toContain("layout.tsx");
  });

  it("includes file modification policy", () => {
    const content = generateClaudeLocalContent("testuser");
    expect(content).toContain("File Modification Policy");
    expect(content).toContain("Prefer modifying files within");
  });
});

// ============================================================
// Integration tests for idempotency
// These tests verify that setup operations can be safely re-run
// ============================================================

describe("idempotency - updatePlaygroundConfigContent", () => {
  it("produces same result when called multiple times", () => {
    const initial = "";
    const first = updatePlaygroundConfigContent(initial, "brian", "/path");
    const second = updatePlaygroundConfigContent(first, "brian", "/path");
    expect(second).toBe(first);
  });

  it("updates values correctly on subsequent calls", () => {
    const initial = "";
    const first = updatePlaygroundConfigContent(initial, "olduser", "/old");
    const second = updatePlaygroundConfigContent(first, "newuser", "/new");
    expect(second).toContain("USERNAME=newuser");
    expect(second).toContain("SOURCE_PATH=/new");
    expect(second).not.toContain("olduser");
    expect(second).not.toContain("/old");
  });
});

describe("idempotency - mergeEnvContent", () => {
  it("produces same result when called multiple times with same input", () => {
    const existing = "# Comment\nKEY1=value1\n";
    const remoteVars = new Map([["KEY2", "value2"]]);

    const first = mergeEnvContent(existing, remoteVars);
    const second = mergeEnvContent(first.content, remoteVars);

    expect(second.content).toBe(first.content);
    expect(second.added).toBe(0); // KEY2 already exists
    expect(second.updated).toBe(0); // Value unchanged
  });

  it("preserves structure through multiple merges", () => {
    const existing =
      "# Database config\nDB_HOST=localhost\n\n# API Keys\nAPI_KEY=secret\n";
    const remoteVars1 = new Map([["DB_HOST", "newhost"]]);
    const remoteVars2 = new Map([["API_KEY", "newsecret"]]);

    const first = mergeEnvContent(existing, remoteVars1);
    const second = mergeEnvContent(first.content, remoteVars2);

    expect(second.content).toContain("# Database config");
    expect(second.content).toContain("# API Keys");
    expect(second.content).toContain("DB_HOST=newhost");
    expect(second.content).toContain("API_KEY=newsecret");
  });
});

describe("idempotency - file operations", () => {
  let tempDir: string;

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(tmpdir(), "setup-test-"));
  });

  afterEach(async () => {
    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it("updatePlaygroundConfigContent can recover from partial state", async () => {
    const configPath = path.join(tempDir, ".playground");

    // Simulate partial failure - only USERNAME was written
    await fs.writeFile(configPath, "USERNAME=brian\n");

    // Read and update (simulating re-run)
    const existing = await fs.readFile(configPath, "utf-8");
    const updated = updatePlaygroundConfigContent(existing, "brian", "/path");
    await fs.writeFile(configPath, updated);

    // Verify both values are now present
    const final = await fs.readFile(configPath, "utf-8");
    expect(final).toContain("USERNAME=brian");
    expect(final).toContain("SOURCE_PATH=/path");
  });

  it("mergeEnvContent preserves local-only variables through re-runs", async () => {
    const envPath = path.join(tempDir, ".env.local");

    // Initial state with local-only var
    await fs.writeFile(
      envPath,
      "# My local config\nLOCAL_VAR=myvalue\nREMOTE_VAR=old\n",
    );

    // First merge
    const existing1 = await fs.readFile(envPath, "utf-8");
    const remoteVars = new Map([["REMOTE_VAR", "new"]]);
    const result1 = mergeEnvContent(existing1, remoteVars);
    await fs.writeFile(envPath, result1.content);

    // Second merge (simulating re-run)
    const existing2 = await fs.readFile(envPath, "utf-8");
    const result2 = mergeEnvContent(existing2, remoteVars);
    await fs.writeFile(envPath, result2.content);

    // Verify local var and comment are preserved
    const final = await fs.readFile(envPath, "utf-8");
    expect(final).toContain("# My local config");
    expect(final).toContain("LOCAL_VAR=myvalue");
    expect(final).toContain("REMOTE_VAR=new");
  });

  it("handles empty file gracefully", async () => {
    const configPath = path.join(tempDir, ".playground");

    // Create empty file
    await fs.writeFile(configPath, "");

    // Update it
    const existing = await fs.readFile(configPath, "utf-8");
    const updated = updatePlaygroundConfigContent(existing, "brian", "/path");
    await fs.writeFile(configPath, updated);

    // Verify content
    const final = await fs.readFile(configPath, "utf-8");
    expect(final).toContain("USERNAME=brian");
    expect(final).toContain("SOURCE_PATH=/path");
  });

  it("handles file that doesn't exist", async () => {
    const configPath = path.join(tempDir, ".playground");

    // File doesn't exist, start from empty
    const updated = updatePlaygroundConfigContent("", "brian", "/path");
    await fs.writeFile(configPath, updated);

    // Verify content
    const final = await fs.readFile(configPath, "utf-8");
    expect(final).toContain("USERNAME=brian");
    expect(final).toContain("SOURCE_PATH=/path");
  });
});
