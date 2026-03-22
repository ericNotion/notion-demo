"use client";

import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { infoCircleIcon } from "@nds-icons/infoCircle/default.icon";
import { listBulletIcon } from "@nds-icons/listBullet/default.icon";
import { textAlignLeftIcon } from "@nds-icons/textAlignLeft/default.icon";
import { textH1ToggleIcon } from "@nds-icons/textH1Toggle/default.icon";
import { textH2ToggleIcon } from "@nds-icons/textH2Toggle/default.icon";
import { textH3Icon } from "@nds-icons/textH3/default.icon";
import { useEffect, useRef } from "react";
import type { Block } from "./atoms";

type BlockType = Block["type"];

interface SlashCommand {
  id: string;
  label: string;
  description: string;
  icon: typeof textAlignLeftIcon;
  keywords: string[];
  blockType: BlockType;
}

// To add a new slash command, add an entry here.
export const slashCommands: SlashCommand[] = [
  {
    id: "text",
    label: "Text",
    description: "Plain paragraph block",
    icon: textAlignLeftIcon,
    keywords: ["paragraph", "p", "text"],
    blockType: "paragraph",
  },
  {
    id: "heading1",
    label: "Heading 1",
    description: "Large heading",
    icon: textH1ToggleIcon,
    keywords: ["h1", "heading", "title", "#"],
    blockType: "h1",
  },
  {
    id: "heading2",
    label: "Heading 2",
    description: "Medium heading",
    icon: textH2ToggleIcon,
    keywords: ["h2", "heading", "subheading", "##"],
    blockType: "h2",
  },
  {
    id: "heading3",
    label: "Heading 3",
    description: "Small heading",
    icon: textH3Icon,
    keywords: ["h3", "heading", "subheading", "###"],
    blockType: "h3",
  },
  {
    id: "bulleted-list",
    label: "Bulleted List",
    description: "Bullet point list",
    icon: listBulletIcon,
    keywords: ["ul", "list", "bullet", "bullets", "-"],
    blockType: "ul",
  },
  {
    id: "callout",
    label: "Callout",
    description: "Highlighted information block",
    icon: infoCircleIcon,
    keywords: ["callout", "info", "note", "highlight"],
    blockType: "callout",
  },
];

export function filterCommands(filterText: string): SlashCommand[] {
  if (!filterText) return slashCommands;
  const search = filterText.toLowerCase();
  return slashCommands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search) ||
      cmd.description.toLowerCase().includes(search) ||
      cmd.keywords.some((kw) => kw.toLowerCase().includes(search)),
  );
}

interface SlashCommandMenuProps {
  filterText: string;
  selectedIndex: number;
  position: { top: number; left: number };
  onSelect: (blockType: BlockType) => void;
  onHover: (index: number) => void;
  onClose: () => void;
}

export function SlashCommandMenu({
  filterText,
  selectedIndex,
  position,
  onSelect,
  onHover,
  onClose,
}: SlashCommandMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const selectedItemRef = useRef<HTMLButtonElement>(null);
  const filtered = filterCommands(filterText);

  useEffect(() => {
    selectedItemRef.current?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [selectedIndex]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (filtered.length === 0) return null;

  return (
    <div
      ref={menuRef}
      className="bg-elevated shadow-md-outline animate-in fade-in zoom-in-95 absolute z-50 w-[300px] overflow-hidden rounded-lg duration-150"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <div className="max-h-[400px] overflow-y-auto p-2">
        {filtered.map((cmd, index) => (
          <button
            key={cmd.id}
            ref={index === selectedIndex ? selectedItemRef : null}
            type="button"
            className={cn(
              "flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-left transition-colors",
              index === selectedIndex ? "bg-tertiary" : "hover:bg-tertiary",
            )}
            onClick={() => onSelect(cmd.blockType)}
            onMouseEnter={() => onHover(index)}
          >
            <div className="flex size-6 shrink-0 items-center justify-center">
              <Icon icon={cmd.icon} size={16} color="secondary" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-body text-primary font-medium">
                {cmd.label}
              </div>
              <div className="text-caption text-secondary">
                {cmd.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
