import {
  getPlaygroundConfigPath,
  getPrototypeDirectory,
  getTemplateDirectory,
} from "@/root/lib/fs-utils";
import { allowFileSystemOperations } from "@/utils/env";
import { slugify } from "@/utils/slugify";
import { promises as fs } from "fs";
import path from "path";
import { generateStaticData } from "../../../../../scripts/generate-static-data";

const CREATION_DATES_FILE = path.join(
  process.cwd(),
  "src/data/prototype-creation-dates.json",
);

/**
 * Add a creation date entry to the centralized file
 */
async function addCreationDate(username: string, slug: string): Promise<void> {
  let dates: Record<string, string> = {};

  try {
    const content = await fs.readFile(CREATION_DATES_FILE, "utf-8");
    dates = JSON.parse(content);
  } catch {
    // File doesn't exist, start fresh
  }

  const key = `${username}/${slug}`;
  dates[key] = new Date().toISOString();

  // Sort keys for consistent output
  const sorted: Record<string, string> = {};
  Object.keys(dates)
    .sort()
    .forEach((k) => {
      sorted[k] = dates[k];
    });

  await fs.writeFile(
    CREATION_DATES_FILE,
    JSON.stringify(sorted, null, 2) + "\n",
    "utf-8",
  );
}

export async function POST(req: Request) {
  // File system operations are only allowed in development
  if (!allowFileSystemOperations()) {
    return new Response("File operations not allowed in production", {
      status: 405,
    });
  }

  const { prototypeName } = await req.json();
  if (!prototypeName) {
    return new Response("Missing prototypeName", { status: 400 });
  }

  // Read username from .playground
  const configFile = getPlaygroundConfigPath();
  let username: string | undefined;
  try {
    const buf = await fs.readFile(configFile);
    const content = buf.toString("utf-8");
    const match = content.match(/^USERNAME=(.+)$/m);
    if (match) username = match[1].trim();
  } catch {}
  if (!username) {
    return new Response("No username found in .playground", { status: 400 });
  }

  // Slugify the prototype name
  const slug = slugify(prototypeName);

  // Check for duplicate prototype
  const protoDir = getPrototypeDirectory(username, slug);
  try {
    await fs.access(protoDir);
    return new Response("Prototype with this name already exists", {
      status: 409,
    });
  } catch {}

  // Create prototype directory and page.tsx
  await fs.mkdir(protoDir, { recursive: true });
  const pageFile = path.join(protoDir, "page.tsx");
  const pageFileUrl = `cursor://file/${pageFile}`;

  // Read the template file
  const templatePath = path.join(getTemplateDirectory(), "page.tsx");
  let templateContent = await fs.readFile(templatePath, "utf-8");
  // Replace placeholders
  templateContent = templateContent
    .replace(/\{\/\*PROTOTYPE_TITLE\*\/\}/g, prototypeName)
    .replace(/\/\*CURSOR_URL\*\//g, pageFileUrl);

  await fs.writeFile(pageFile, templateContent, "utf-8");

  // Scaffold metadata.json (no timestamps - those go in centralized files)
  const metadataFile = path.join(protoDir, "metadata.json");
  const metadataContent = JSON.stringify(
    {
      title: prototypeName,
      description: "",
    },
    null,
    2,
  );
  await fs.writeFile(metadataFile, metadataContent + "\n", "utf-8");

  // Add creation date to centralized file
  await addCreationDate(username, slug);

  // Scaffold layout.tsx for dynamic page title metadata
  const layoutFile = path.join(protoDir, "layout.tsx");
  const layoutContent = `import { getPrototypePageTitle } from "@/root/lib/fs-utils";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = await getPrototypePageTitle("${username}", "${slug}");
  return { title };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;
  await fs.writeFile(layoutFile, layoutContent, "utf-8");

  // Regenerate static data to reflect the new prototype
  try {
    await generateStaticData();
  } catch (error) {
    console.error("Failed to regenerate static data:", error);
    // Don't fail the request if static data generation fails
  }

  return new Response("Prototype created", { status: 201 });
}
