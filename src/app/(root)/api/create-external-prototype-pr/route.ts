import type { PrototypeMetadataJson } from "@/root/lib/metadata-schema";
import { isValidUsername } from "@/utils/getValidUsernames";
import { slugify } from "@/utils/slugify";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = "makenotion";
const REPO_NAME = "prototype-playground";
const BASE_BRANCH = "main";

type GitHubAPIError = {
  message: string;
  documentation_url?: string;
};

function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function generateMetadataJson(input: PrototypeMetadataJson): string {
  // Add trailing newline to match Prettier formatting
  return JSON.stringify(input, null, 2) + "\n";
}

/**
 * Extract the original slug from a versioned slug
 * e.g., "my-prototype-v2" -> "my-prototype"
 */
function extractOriginalSlug(slug: string): string {
  return slug.replace(/-v\d+(-\d+)?$/, "");
}

/**
 * Generate a versioned slug
 */
function generateVersionedSlug(originalSlug: string, version: number): string {
  return `${originalSlug}-v${version}`;
}

/**
 * Fetch file content from GitHub
 */
async function fetchFileFromGitHub(
  path: string,
  branch: string = BASE_BRANCH,
): Promise<{ content: string; sha: string } | null> {
  const response = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${branch}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return { content, sha: data.sha };
}

/**
 * List directory contents from GitHub
 */
async function listDirectoryFromGitHub(
  path: string,
  branch: string = BASE_BRANCH,
): Promise<Array<{ name: string; type: string }> | null> {
  const response = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${branch}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    return null;
  }

  return data.map((item: { name: string; type: string }) => ({
    name: item.name,
    type: item.type,
  }));
}

/**
 * Find the max version in a version group from GitHub
 */
async function findMaxVersionFromGitHub(
  username: string,
  versionGroupId: string,
): Promise<number> {
  // List all prototypes for this user
  const userDir = `src/app/${username}`;
  const entries = await listDirectoryFromGitHub(userDir);

  if (!entries) {
    return 0;
  }

  let maxVersion = 0;

  // Check each prototype's metadata for matching versionGroupId
  for (const entry of entries) {
    if (entry.type !== "dir") continue;

    const metadataPath = `${userDir}/${entry.name}/metadata.json`;
    const file = await fetchFileFromGitHub(metadataPath);

    if (file) {
      try {
        const metadata = JSON.parse(file.content) as PrototypeMetadataJson;
        const protoVersionGroupId =
          metadata.versionGroupId || `${username}/${entry.name}`;

        if (protoVersionGroupId === versionGroupId && metadata.version) {
          maxVersion = Math.max(maxVersion, metadata.version);
        }
      } catch {
        // Ignore parse errors
      }
    }
  }

  return maxVersion;
}

function base64Encode(str: string): string {
  return Buffer.from(str, "utf-8").toString("base64");
}

export async function POST(req: Request) {
  try {
    // 1. Parse and validate input
    const { url, title, description, username, sourceSlug, sourceUsername } =
      await req.json();
    const isVersioning = Boolean(sourceSlug && sourceUsername);

    if (!url || !title || !username) {
      return Response.json(
        { error: "Missing required fields: url, title, username" },
        { status: 400 },
      );
    }

    // Validate URL format
    if (!isValidUrl(url)) {
      return Response.json({ error: "Invalid URL format" }, { status: 400 });
    }

    // Validate username exists in codebase
    const usernameValid = await isValidUsername(username);
    if (!usernameValid) {
      return Response.json(
        {
          error:
            "Username not found. Please run the Playground locally to create your user first.",
          setupUrl: "https://github.com/makenotion/prototype-playground",
        },
        { status: 400 },
      );
    }

    // For versioning, verify user can only version their own prototypes
    if (isVersioning && sourceUsername !== username) {
      return Response.json(
        { error: "Can only create versions of your own prototypes" },
        { status: 403 },
      );
    }

    // Check GitHub token
    if (!GITHUB_TOKEN) {
      console.error("GITHUB_TOKEN not configured");
      return Response.json(
        { error: "GitHub integration not configured" },
        { status: 500 },
      );
    }

    // Handle versioning: read source metadata and compute version info
    let versionGroupId: string | undefined;
    let version: number | undefined;
    let branchedFromVersion: number | undefined;
    let slug: string;
    let sourceMetadata: PrototypeMetadataJson | null = null;
    let sourceMetadataSha: string | undefined;

    if (isVersioning) {
      // Read source prototype metadata from GitHub
      const sourceMetadataPath = `src/app/${sourceUsername}/${sourceSlug}/metadata.json`;
      const sourceFile = await fetchFileFromGitHub(sourceMetadataPath);

      if (!sourceFile) {
        return Response.json(
          { error: "Source prototype not found" },
          { status: 404 },
        );
      }

      try {
        sourceMetadata = JSON.parse(
          sourceFile.content,
        ) as PrototypeMetadataJson;
        sourceMetadataSha = sourceFile.sha;
      } catch {
        return Response.json(
          { error: "Invalid source prototype metadata" },
          { status: 400 },
        );
      }

      // Determine version info
      const sourceVersion = sourceMetadata.version || 1;
      versionGroupId =
        sourceMetadata.versionGroupId || `${sourceUsername}/${sourceSlug}`;

      // Get the current max version in the group
      const maxVersion = await findMaxVersionFromGitHub(
        sourceUsername,
        versionGroupId,
      );
      version = maxVersion + 1;
      branchedFromVersion = sourceVersion;

      // Generate versioned slug
      const originalSlug = extractOriginalSlug(sourceSlug);
      slug = generateVersionedSlug(originalSlug, version);
    } else {
      // Normal flow: slugify the title
      slug = slugify(title);
    }

    // 2. Generate branch name
    const timestamp = Date.now();
    const branchName = isVersioning
      ? `external-prototype-version/${username}/${slug}-${timestamp}`
      : `external-prototype/${username}/${slug}-${timestamp}`;

    // 3. Get base branch SHA
    const refResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/${BASE_BRANCH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      },
    );

    if (!refResponse.ok) {
      const error: GitHubAPIError = await refResponse.json();
      console.error("Failed to get base branch:", error);
      return Response.json(
        { error: "Failed to get base branch" },
        { status: 500 },
      );
    }

    const refData = await refResponse.json();
    const baseSha = refData.object.sha;

    // 4. Create feature branch
    const createBranchResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/refs`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ref: `refs/heads/${branchName}`,
          sha: baseSha,
        }),
      },
    );

    if (!createBranchResponse.ok) {
      const error: GitHubAPIError = await createBranchResponse.json();
      console.error("Failed to create branch:", error);
      return Response.json(
        { error: "Failed to create feature branch" },
        { status: 500 },
      );
    }

    // 5. If versioning and source doesn't have version metadata, update it first
    if (
      isVersioning &&
      sourceMetadata &&
      (!sourceMetadata.version || !sourceMetadata.versionGroupId)
    ) {
      const updatedSourceMetadata: PrototypeMetadataJson = {
        ...sourceMetadata,
        versionGroupId: versionGroupId!,
        version: 1,
      };
      const sourceMetadataPath = `src/app/${sourceUsername}/${sourceSlug}/metadata.json`;

      const updateSourceResponse = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${sourceMetadataPath}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `Update ${sourceSlug} to v1 (versioning)`,
            content: base64Encode(generateMetadataJson(updatedSourceMetadata)),
            sha: sourceMetadataSha,
            branch: branchName,
          }),
        },
      );

      if (!updateSourceResponse.ok) {
        const error: GitHubAPIError = await updateSourceResponse.json();
        console.error("Failed to update source metadata:", error);
        return Response.json(
          { error: "Failed to update source prototype" },
          { status: 500 },
        );
      }
    }

    // 6. Prepare file contents
    const metadata: PrototypeMetadataJson = {
      title,
      description: description || "",
      externalUrl: url,
      ...(versionGroupId && { versionGroupId }),
      ...(version !== undefined && { version }),
      ...(branchedFromVersion !== undefined && { branchedFromVersion }),
    };
    const metadataContent = generateMetadataJson(metadata);

    // 7. Add metadata.json file
    const metadataPath = `src/app/${username}/${slug}/metadata.json`;
    const addMetadataResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${metadataPath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: isVersioning
            ? `Add ${title} v${version} by @${username}`
            : `Add metadata for ${title} by @${username}`,
          content: base64Encode(metadataContent),
          branch: branchName,
        }),
      },
    );

    if (!addMetadataResponse.ok) {
      const error: GitHubAPIError = await addMetadataResponse.json();
      console.error("Failed to add metadata.json:", error);
      return Response.json(
        { error: "Failed to add metadata file" },
        { status: 500 },
      );
    }

    // 8. Create pull request
    const prBody = isVersioning
      ? `## New Version of External Prototype

**Title:** ${title}
**Version:** v${version}
**Branched from:** v${branchedFromVersion}
**URL:** ${url}

---

This PR was automatically created in Prototype Playground`
      : `## External Prototype

**Title:** ${title}
**URL:** ${url}

---

This PR was automatically created in Prototype Playground`;

    const prTitle = isVersioning
      ? `Add ${title} v${version} by @${username}`
      : `Add external prototype: ${title} by @${username}`;

    const createPRResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: prTitle,
          body: prBody,
          head: branchName,
          base: BASE_BRANCH,
        }),
      },
    );

    if (!createPRResponse.ok) {
      const error: GitHubAPIError = await createPRResponse.json();
      console.error("Failed to create PR:", error);
      return Response.json(
        { error: "Failed to create pull request" },
        { status: 500 },
      );
    }

    const prData = await createPRResponse.json();
    const prNumber = prData.number;
    const prUrl = prData.html_url;

    // 9. Add label for auto-merge
    await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${prNumber}/labels`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          labels: ["external-prototype"],
        }),
      },
    );

    // 10. Return success with PR URL
    return Response.json({
      success: true,
      prUrl,
      prNumber,
      slug,
      message: "Pull request created successfully!",
      ...(version !== undefined && {
        version,
        versionGroupId,
        branchedFromVersion,
      }),
    });
  } catch (error) {
    console.error("Unexpected error creating PR:", error);
    return Response.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
