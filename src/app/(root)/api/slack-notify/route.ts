/**
 * Slack Notification Webhook Endpoint
 *
 * This endpoint receives webhooks from Notion database automations when
 * a new prototype is created. It:
 * 1. Validates the webhook payload using Zod schemas
 * 2. Validates the prototype is deployed (with retry logic)
 * 3. Sends a formatted Slack notification
 *
 * Required environment variables:
 * - SLACK_WEBHOOK_URL: Slack incoming webhook URL
 * - VERCEL_AUTOMATION_BYPASS_SECRET: For bypassing password protection
 *
 * Optional environment variables:
 * - DEPLOYMENT_URL: Base URL for prototypes (defaults to playground.makenotion.com)
 */

import {
  parseWebhookPayload,
  type Prototype,
} from "@/lib/notion/generated-schemas";
import { NextResponse } from "next/server";

const DEPLOYMENT_URL =
  process.env.DEPLOYMENT_URL || "https://playground.makenotion.com";

const MAX_RETRIES = 10;
const RETRY_DELAY_MS = 6000; // 6 seconds between retries (total: ~1 minute)

/**
 * Check if a prototype is deployed by fetching its URL
 */
async function isDeployed(
  url: string,
): Promise<{ deployed: boolean; status: number | null }> {
  const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

  const headers: Record<string, string> = {
    "User-Agent": "Notion-Slack-Notify/1.0",
  };

  if (bypassSecret) {
    headers["x-vercel-protection-bypass"] = bypassSecret;
  }

  try {
    // Use GET instead of HEAD - more reliable with Next.js
    const response = await fetch(url, {
      method: "GET",
      headers,
      redirect: "follow",
    });

    // 200 = deployed, 404 = not yet deployed
    // Also accept 308 (Next.js redirect) as "deployed"
    const deployed = response.status === 200 || response.status === 308;
    return { deployed, status: response.status };
  } catch (error) {
    console.error(`Error checking deployment at ${url}:`, error);
    return { deployed: false, status: null };
  }
}

/**
 * Wait for deployment with retry logic
 */
async function waitForDeployment(url: string): Promise<boolean> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    console.log(
      `Checking deployment (attempt ${attempt}/${MAX_RETRIES}): ${url}`,
    );

    const { deployed, status } = await isDeployed(url);
    console.log(`  Status: ${status}`);

    if (deployed) {
      console.log(`Deployment confirmed: ${url}`);
      return true;
    }

    if (attempt < MAX_RETRIES) {
      console.log(`Not deployed yet, waiting ${RETRY_DELAY_MS}ms...`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    }
  }

  console.log(`Deployment check timed out after ${MAX_RETRIES} attempts`);
  return false;
}

/**
 * Build the prototype URL
 */
function getPrototypeUrl(data: Prototype): string {
  return data.externalUrl || `${DEPLOYMENT_URL}/${data.username}/${data.slug}`;
}

/**
 * Send Slack notification
 */
async function sendSlackNotification(data: Prototype): Promise<void> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("SLACK_WEBHOOK_URL not configured");
  }

  const prototypeUrl = getPrototypeUrl(data);

  // Determine message type based on version
  const isNewVersion = data.version !== undefined && data.version > 1;
  const headerText = isNewVersion
    ? `🔄 *New version cooking...*`
    : `🧑‍🍳 *Someone's cooking...*`;

  // Build title with version info
  let titleText = `*<${prototypeUrl}|${data.title}>*`;
  if (isNewVersion) {
    titleText += ` (v${data.version}`;
    if (data.branchedFromVersion) {
      titleText += ` from v${data.branchedFromVersion}`;
    }
    titleText += `)`;
  }

  // Use author name from Notion, or fall back to username
  const authorDisplay = data.author || data.username;
  titleText += ` by ${authorDisplay}`;

  if (data.description) {
    titleText += `\n_${data.description}_`;
  }

  const message = {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: headerText,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: titleText,
        },
      },
    ],
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    throw new Error(`Slack API returned ${response.status}`);
  }
}

export async function POST(req: Request) {
  console.log("=== SLACK-NOTIFY WEBHOOK RECEIVED ===");
  console.log(
    "Headers:",
    JSON.stringify(Object.fromEntries(req.headers), null, 2),
  );

  try {
    // Parse and validate the webhook payload using Zod schema
    const rawPayload = await req.json();
    console.log(
      "Received webhook payload:",
      JSON.stringify(rawPayload, null, 2),
    );

    const data = parseWebhookPayload(rawPayload);
    if (!data) {
      return NextResponse.json(
        { error: "Invalid payload: missing required fields (username, slug)" },
        { status: 400 },
      );
    }

    console.log("Parsed prototype data:", data);

    // Build the URL to check
    const prototypeUrl = getPrototypeUrl(data);

    // Wait for deployment
    const isLive = await waitForDeployment(prototypeUrl);
    if (!isLive) {
      console.warn(
        `Prototype not deployed after ${MAX_RETRIES} attempts, sending notification anyway`,
      );
    }

    // Send Slack notification
    await sendSlackNotification(data);
    console.log(`Slack notification sent for ${data.username}/${data.slug}`);

    return NextResponse.json({
      success: true,
      prototype: `${data.username}/${data.slug}`,
      deployed: isLive,
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "ok",
    endpoint: "slack-notify",
    description: "Receives Notion webhooks and sends Slack notifications",
  });
}
