import { getPlaygroundConfigPath } from "@/root/lib/fs-utils";
import { promises as fs } from "fs";

export async function GET() {
  const configFile = getPlaygroundConfigPath();
  let username: string | undefined;
  let sourcePath: string | undefined;
  try {
    const buf = await fs.readFile(configFile);
    const content = buf.toString("utf-8");
    const match = content.match(/^USERNAME=(.+)$/m);
    if (match) username = match[1].trim();
    const sourceMatch = content.match(/^SOURCE_PATH=(.+)$/m);
    if (sourceMatch) sourcePath = sourceMatch[1].trim();
  } catch {
    // .playground file doesn't exist - expected in production
  }
  return new Response(
    JSON.stringify({ username: username ?? "eric", sourcePath }),
    { status: 200 },
  );
}
