import { Client } from "@notionhq/client";

// Initialize Notion client singleton
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const PLAYGROUND_BASE_URL = "https://playground.makenotion.com";

export function notionFetchHeaders(): HeadersInit {
  return {
    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
  };
}
