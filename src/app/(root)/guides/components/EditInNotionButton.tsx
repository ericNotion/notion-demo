"use client";

import { PlaygroundButton } from "@/components/playground-kit/button";
import { NotionLogoIcon } from "@/icons/NotionLogoIcon";

interface EditInNotionButtonProps {
  pageId: string;
}

export function EditInNotionButton({ pageId }: EditInNotionButtonProps) {
  const notionUrl = `https://dev.notion.so/${pageId.replace(/-/g, "")}`;

  return (
    <PlaygroundButton
      asChild
      className="bg-elevated fixed right-4 bottom-4 z-50 shadow-md"
    >
      <a href={notionUrl} target="_blank" rel="noopener noreferrer">
        <NotionLogoIcon size={16} />
        <span>Edit in Notion</span>
      </a>
    </PlaygroundButton>
  );
}
