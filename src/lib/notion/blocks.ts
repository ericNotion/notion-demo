import type {
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { notion } from "./client";
import type { ProcessedBlock, RichTextContent, TableRow } from "./types";

// Helper to convert Notion rich text to our processed format
function processRichText(richText: RichTextItemResponse[]): RichTextContent[] {
  return richText.map((text) => ({
    type: text.type,
    text: {
      content: text.plain_text,
      link: text.href ?? undefined,
    },
    annotations: {
      bold: text.annotations.bold,
      italic: text.annotations.italic,
      strikethrough: text.annotations.strikethrough,
      underline: text.annotations.underline,
      code: text.annotations.code,
      color: text.annotations.color,
    },
  }));
}

// Process block data directly from API response
function processBlockFromResponse(
  block: BlockObjectResponse,
): ProcessedBlock | null {
  try {
    switch (block.type) {
      case "paragraph":
        return {
          id: block.id,
          type: "paragraph",
          content: processRichText(block.paragraph.rich_text),
        };

      case "heading_1":
        return {
          id: block.id,
          type: "heading_1",
          content: processRichText(block.heading_1.rich_text),
        };

      case "heading_2":
        return {
          id: block.id,
          type: "heading_2",
          content: processRichText(block.heading_2.rich_text),
        };

      case "heading_3":
        return {
          id: block.id,
          type: "heading_3",
          content: processRichText(block.heading_3.rich_text),
        };

      case "bulleted_list_item":
        return {
          id: block.id,
          type: "bulleted_list_item",
          content: processRichText(block.bulleted_list_item.rich_text),
        };

      case "numbered_list_item":
        return {
          id: block.id,
          type: "numbered_list_item",
          content: processRichText(block.numbered_list_item.rich_text),
        };

      case "to_do":
        return {
          id: block.id,
          type: "to_do",
          content: processRichText(block.to_do.rich_text),
        };

      case "toggle":
        return {
          id: block.id,
          type: "toggle",
          content: processRichText(block.toggle.rich_text),
        };

      case "code":
        return {
          id: block.id,
          type: "code",
          language: block.code.language || "plaintext",
          content: processRichText(block.code.rich_text),
        };

      case "quote":
        return {
          id: block.id,
          type: "quote",
          content: processRichText(block.quote.rich_text),
        };

      case "callout": {
        // Extract icon (emoji or external URL)
        const calloutIcon = block.callout.icon;
        let icon: string | undefined;
        if (calloutIcon?.type === "emoji") {
          icon = calloutIcon.emoji;
        } else if (calloutIcon?.type === "external") {
          icon = calloutIcon.external.url;
        }
        return {
          id: block.id,
          type: "callout",
          content: processRichText(block.callout.rich_text),
          hasChildren: block.has_children,
          children: [], // Will be populated if has_children
          icon,
        };
      }

      case "divider":
        return {
          id: block.id,
          type: "divider",
          content: [],
        };

      case "image": {
        const imageUrl =
          block.image.type === "external"
            ? block.image.external.url
            : block.image.file.url;
        return {
          id: block.id,
          type: "image",
          content: [
            {
              type: "text",
              text: {
                content: imageUrl,
                link: undefined,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
            },
          ],
        };
      }

      case "table":
        // Tables are processed separately since they require fetching child rows
        return {
          id: block.id,
          type: "table",
          content: [],
          hasColumnHeader: block.table.has_column_header,
          rows: [], // Will be populated by processTableBlock
        };

      default: {
        // For unsupported block types, log and return null
        const unsupportedBlock = block as { type: string };
        console.warn(`Unsupported block type: ${unsupportedBlock.type}`);
        return null;
      }
    }
  } catch (error) {
    console.error(`Error processing block ${block.id}:`, error);
    return null;
  }
}

// Fetch children blocks for container blocks (callout, toggle, etc.)
async function fetchChildrenBlocks(
  parentBlockId: string,
): Promise<ProcessedBlock[]> {
  try {
    const response = await notion.blocks.children.list({
      block_id: parentBlockId,
      page_size: 100,
    });

    const children: ProcessedBlock[] = [];

    for (const block of response.results) {
      const blockObj = block as BlockObjectResponse;
      const processed = processBlockFromResponse(blockObj);
      if (processed) {
        // Recursively fetch children if this block also has children
        if (processed.hasChildren && processed.type !== "table") {
          processed.children = await fetchChildrenBlocks(blockObj.id);
        }
        children.push(processed);
      }
    }

    return children;
  } catch (error) {
    console.error(`Error fetching children for ${parentBlockId}:`, error);
    return [];
  }
}

// Fetch table rows for a table block
async function fetchTableRows(tableBlockId: string): Promise<TableRow[]> {
  try {
    const response = await notion.blocks.children.list({
      block_id: tableBlockId,
      page_size: 100,
    });

    const rows: TableRow[] = [];

    for (const block of response.results) {
      const blockObj = block as BlockObjectResponse;
      if (blockObj.type === "table_row") {
        rows.push({
          id: blockObj.id,
          cells: blockObj.table_row.cells.map((cell) => processRichText(cell)),
        });
      }
    }

    return rows;
  } catch (error) {
    console.error(`Error fetching table rows for ${tableBlockId}:`, error);
    return [];
  }
}

// Fetch all blocks from a page with pagination support
export async function getAllBlocks(pageId: string): Promise<ProcessedBlock[]> {
  try {
    const blocksResponse = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    // Handle pagination if there are more than 100 blocks
    let allBlocks = [...blocksResponse.results];
    let nextCursor = blocksResponse.next_cursor;

    while (nextCursor) {
      const nextPage = await notion.blocks.children.list({
        block_id: pageId,
        page_size: 100,
        start_cursor: nextCursor,
      });
      allBlocks = [...allBlocks, ...nextPage.results];
      nextCursor = nextPage.next_cursor;
    }

    // Process blocks synchronously first
    const processedBlocks = allBlocks
      .map((block) => {
        const blockObj = block as BlockObjectResponse;
        const processed = processBlockFromResponse(blockObj);
        return processed ? { blockObj, processed } : null;
      })
      .filter(
        (
          item,
        ): item is {
          blockObj: BlockObjectResponse;
          processed: ProcessedBlock;
        } => item !== null,
      );

    // Fetch children for tables and container blocks in parallel
    await Promise.all(
      processedBlocks.map(async ({ blockObj, processed }) => {
        if (processed.type === "table") {
          processed.rows = await fetchTableRows(blockObj.id);
        } else if (processed.hasChildren) {
          processed.children = await fetchChildrenBlocks(blockObj.id);
        }
      }),
    );

    return processedBlocks.map(({ processed }) => processed);
  } catch (error) {
    console.error(`Error fetching blocks for page ${pageId}:`, error);
    return [];
  }
}
