"use client";

import type { ReactNode } from "react";

import type { ProcessedBlock, RichTextContent } from "@/lib/notion";

import { CodeBlock } from "./CodeBlock";

// URL regex pattern to match http/https URLs
const URL_REGEX = /(https?:\/\/[^\s]+)/g;

// Function to truncate long URLs in the middle
function truncateUrl(url: string, maxLength: number = 50): string {
  // Remove http:// or https:// for display
  const displayUrl = url.replace(/^https?:\/\//, "");

  if (displayUrl.length <= maxLength) return displayUrl;

  const start = Math.floor((maxLength - 3) / 2);
  const end = Math.ceil((maxLength - 3) / 2);

  return displayUrl.slice(0, start) + "..." + displayUrl.slice(-end);
}

function parseTextWithUrls(text: string): ReactNode[] {
  const parts = text.split(URL_REGEX);

  return parts.map((part, index) => {
    if (URL_REGEX.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="link-body"
          title={part}
        >
          {truncateUrl(part)}
        </a>
      );
    }
    return part;
  });
}

function renderRichText(richText: RichTextContent[]) {
  return richText.map((text, index) => {
    const content = text.text.content;
    const link = text.text.link;
    const annotations = text.annotations;

    let element: ReactNode;

    // If there's already a link annotation, use it as-is
    if (link) {
      const isContentUrl = URL_REGEX.test(content);
      URL_REGEX.lastIndex = 0; // Reset regex state after test

      element = (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-body"
          title={link}
        >
          {isContentUrl ? truncateUrl(content) : content}
        </a>
      );
    } else {
      // Parse the content for URLs and convert them to links
      element = <span key={index}>{parseTextWithUrls(content)}</span>;
    }

    // Apply text annotations
    if (annotations.bold)
      element = (
        <strong className="font-semibold" key={index}>
          {element}
        </strong>
      );
    if (annotations.italic) element = <em key={index}>{element}</em>;
    if (annotations.strikethrough) element = <s key={index}>{element}</s>;
    if (annotations.underline) element = <u key={index}>{element}</u>;
    if (annotations.code)
      element = (
        <code
          className="bg-secondary rounded px-1.5 py-0.5 text-sm"
          key={index}
        >
          {element}
        </code>
      );

    return element;
  });
}

// Helper to render a list of blocks with proper list grouping
function renderBlocksContent(
  blocks: ProcessedBlock[],
  isTopLevel = false,
): ReactNode[] {
  const result: ReactNode[] = [];
  let i = 0;
  const listMargin = isTopLevel ? "my-4 ml-6" : "ml-6";

  while (i < blocks.length) {
    const block = blocks[i];

    // Group consecutive bulleted list items
    if (block.type === "bulleted_list_item") {
      const listItems: ReactNode[] = [];
      const startIndex = i;

      while (i < blocks.length && blocks[i].type === "bulleted_list_item") {
        listItems.push(renderSingleBlock(blocks[i]));
        i++;
      }

      result.push(
        <ul
          key={`ul-${blocks[startIndex].id}`}
          className={`${listMargin} flex list-disc flex-col gap-2`}
        >
          {listItems}
        </ul>,
      );
      continue;
    }

    // Group consecutive numbered list items
    if (block.type === "numbered_list_item") {
      const listItems: ReactNode[] = [];
      const startIndex = i;

      while (i < blocks.length && blocks[i].type === "numbered_list_item") {
        listItems.push(renderSingleBlock(blocks[i]));
        i++;
      }

      result.push(
        <ol
          key={`ol-${blocks[startIndex].id}`}
          className={`${listMargin} flex list-decimal flex-col gap-2`}
        >
          {listItems}
        </ol>,
      );
      continue;
    }

    // Render non-list blocks normally
    const rendered = renderSingleBlock(block);
    if (rendered) {
      result.push(rendered);
    }
    i++;
  }

  return result;
}

function renderSingleBlock(block: ProcessedBlock): ReactNode {
  switch (block.type) {
    case "quote":
      return (
        <blockquote
          key={block.id}
          className="text-primary border-l-3 border-black pl-5 leading-[1.6] dark:border-white"
        >
          {renderRichText(block.content)}
        </blockquote>
      );
    case "paragraph":
      return (
        <p key={block.id} className="text-primary leading-[1.6]">
          {renderRichText(block.content)}
        </p>
      );
    case "heading_1":
      return (
        <h1 key={block.id} className="text-primary mt-6 text-3xl font-bold">
          {renderRichText(block.content)}
        </h1>
      );
    case "heading_2":
      return (
        <h2 key={block.id} className="text-primary mt-6 text-2xl font-bold">
          {renderRichText(block.content)}
        </h2>
      );
    case "heading_3":
      return (
        <h3 key={block.id} className="text-primary mt-5 text-xl font-bold">
          {renderRichText(block.content)}
        </h3>
      );
    case "bulleted_list_item":
      return (
        <li key={block.id} className="text-primary leading-[1.6]">
          {renderRichText(block.content)}
        </li>
      );
    case "numbered_list_item":
      return (
        <li key={block.id} className="text-primary leading-[1.6]">
          {renderRichText(block.content)}
        </li>
      );
    case "to_do":
      return (
        <div
          key={block.id}
          className="text-secondary flex items-start gap-2 leading-[1.6]"
        >
          <input type="checkbox" disabled className="mt-1" />
          <span>{renderRichText(block.content)}</span>
        </div>
      );
    case "toggle":
      return (
        <details key={block.id} className="text-secondary leading-[1.6]">
          <summary className="cursor-pointer">
            {renderRichText(block.content)}
          </summary>
        </details>
      );
    case "callout": {
      const hasIcon = block.icon;
      const hasContent = block.content.length > 0;
      const hasChildren = block.children && block.children.length > 0;

      return (
        <div
          key={block.id}
          className="bg-secondary text-primary my-4 flex gap-3 rounded-lg p-4 leading-[1.6]"
        >
          {hasIcon && <span className="shrink-0 text-lg">{block.icon}</span>}
          <div className="flex min-w-0 flex-col gap-2">
            {hasContent && <div>{renderRichText(block.content)}</div>}
            {hasChildren && renderBlocksContent(block.children!)}
          </div>
        </div>
      );
    }
    case "code":
      return (
        <CodeBlock
          key={block.id}
          code={block.content.map((text) => text.text.content).join("")}
          language={block.language || "plaintext"}
        />
      );
    case "divider":
      return <hr key={block.id} className="border-primary my-6 border-t" />;
    case "image":
      return (
        <div key={block.id} className="my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.content[0]?.text.content}
            alt=""
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>
      );
    case "table": {
      if (!block.rows || block.rows.length === 0) return null;

      const hasHeader = block.hasColumnHeader;
      const headerRow = hasHeader ? block.rows[0] : null;
      const bodyRows = hasHeader ? block.rows.slice(1) : block.rows;

      return (
        <div key={block.id} className="my-4 overflow-x-auto">
          <table className="border-primary w-full border-collapse text-sm">
            {headerRow && (
              <thead>
                <tr>
                  {headerRow.cells.map((cell, cellIndex) => (
                    <th
                      key={`${headerRow.id}-${cellIndex}`}
                      className="bg-secondary text-primary border-primary border px-3 py-2 text-left font-semibold"
                    >
                      {renderRichText(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {bodyRows.map((row) => (
                <tr key={row.id}>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={`${row.id}-${cellIndex}`}
                      className="text-primary border-primary border px-3 py-2"
                    >
                      {renderRichText(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    default:
      return null;
  }
}

export function BlockRenderer({
  blocks,
}: {
  blocks: ProcessedBlock[];
}): ReactNode {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      {renderBlocksContent(blocks, true)}
    </div>
  );
}
