"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";
import type { Block } from "./atoms";

type BlockType = Block["type"];

interface SlashCommand {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  keywords: string[];
  blockType: BlockType;
  shortcut?: string;
  section: "basic" | "inline";
}

function CmdIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "border-primary flex size-[46px] shrink-0 items-center justify-center rounded-lg border",
        className,
      )}
    >
      {children}
    </span>
  );
}

export const slashCommands: SlashCommand[] = [
  {
    id: "text",
    label: "Text",
    description: "Just start writing with plain text.",
    icon: (
      <CmdIcon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4.5 5.5V4H15.5V5.5H10.75V16H9.25V5.5H4.5Z"
            fill="currentColor"
            className="text-secondary"
          />
        </svg>
      </CmdIcon>
    ),
    keywords: ["paragraph", "p", "text"],
    blockType: "paragraph",
    section: "basic",
  },
  {
    id: "heading1",
    label: "Heading 1",
    description: "Big section heading.",
    icon: (
      <CmdIcon>
        <span className="text-secondary text-sm font-bold">
          H<span className="text-xs">1</span>
        </span>
      </CmdIcon>
    ),
    keywords: ["h1", "heading", "title", "#"],
    blockType: "h1",
    shortcut: "#",
    section: "basic",
  },
  {
    id: "heading2",
    label: "Heading 2",
    description: "Medium section heading.",
    icon: (
      <CmdIcon>
        <span className="text-secondary text-sm font-bold">
          H<span className="text-xs">2</span>
        </span>
      </CmdIcon>
    ),
    keywords: ["h2", "heading", "subheading", "##"],
    blockType: "h2",
    shortcut: "##",
    section: "basic",
  },
  {
    id: "heading3",
    label: "Heading 3",
    description: "Small section heading.",
    icon: (
      <CmdIcon>
        <span className="text-secondary text-sm font-bold">
          H<span className="text-xs">3</span>
        </span>
      </CmdIcon>
    ),
    keywords: ["h3", "heading", "subheading", "###"],
    blockType: "h3",
    shortcut: "###",
    section: "basic",
  },
  {
    id: "bulleted-list",
    label: "Bulleted List",
    description: "Create a simple bulleted list.",
    icon: (
      <CmdIcon>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className="text-secondary"
        >
          <circle cx="4" cy="5" r="1.5" fill="currentColor" />
          <rect
            x="7"
            y="4.25"
            width="8"
            height="1.5"
            rx="0.75"
            fill="currentColor"
          />
          <circle cx="4" cy="9" r="1.5" fill="currentColor" />
          <rect
            x="7"
            y="8.25"
            width="8"
            height="1.5"
            rx="0.75"
            fill="currentColor"
          />
          <circle cx="4" cy="13" r="1.5" fill="currentColor" />
          <rect
            x="7"
            y="12.25"
            width="8"
            height="1.5"
            rx="0.75"
            fill="currentColor"
          />
        </svg>
      </CmdIcon>
    ),
    keywords: ["ul", "list", "bullet", "bullets", "-"],
    blockType: "ul",
    shortcut: "-",
    section: "basic",
  },
  {
    id: "callout",
    label: "Callout",
    description: "Make writing stand out.",
    icon: (
      <CmdIcon>
        <span className="text-lg">💡</span>
      </CmdIcon>
    ),
    keywords: ["callout", "highlight", "note", "tip"],
    blockType: "callout",
    section: "basic",
  },
  {
    id: "divider",
    label: "Divider",
    description: "Visually divide blocks.",
    icon: (
      <CmdIcon>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-secondary"
        >
          <rect
            x="3"
            y="9.25"
            width="14"
            height="1.5"
            rx="0.75"
            fill="currentColor"
          />
        </svg>
      </CmdIcon>
    ),
    keywords: ["divider", "hr", "line", "separator", "---"],
    blockType: "divider",
    shortcut: "---",
    section: "basic",
  },
  {
    id: "database-inline",
    label: "Database - Inline",
    description: "Add a database table inside this page.",
    icon: (
      <CmdIcon>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className="text-secondary"
        >
          <rect
            x="2"
            y="2"
            width="14"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <line
            x1="2"
            y1="6.5"
            x2="16"
            y2="6.5"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <line
            x1="7"
            y1="6.5"
            x2="7"
            y2="16"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </CmdIcon>
    ),
    keywords: ["database", "table", "inline", "db", "data"],
    blockType: "database",
    section: "inline",
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
      className="bg-elevated shadow-md-outline animate-in fade-in zoom-in-95 absolute z-50 w-[324px] overflow-hidden rounded-xl duration-150"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <div className="max-h-[340px] overflow-y-auto">
        {filtered.map((cmd, index) => {
          const prevSection = index > 0 ? filtered[index - 1].section : null;
          const showSection = cmd.section !== prevSection;
          return (
            <div key={cmd.id}>
              {showSection && (
                <div className="px-3.5 pt-3 pb-2">
                  <span className="text-tertiary text-xs font-medium">
                    {cmd.section === "basic" ? "Basic blocks" : "Inline"}
                  </span>
                </div>
              )}
              <button
                ref={index === selectedIndex ? selectedItemRef : null}
                type="button"
                className={cn(
                  "flex w-full items-center gap-3 px-2.5 py-1 text-left transition-colors",
                  index === selectedIndex
                    ? "bg-secondary-translucent"
                    : "hover:bg-secondary-translucent",
                )}
                onClick={() => onSelect(cmd.blockType)}
                onMouseEnter={() => onHover(index)}
              >
                {cmd.icon}
                <div className="min-w-0 flex-1">
                  <div className="text-primary text-sm">{cmd.label}</div>
                  <div className="text-tertiary text-xs">{cmd.description}</div>
                </div>
                {cmd.shortcut && (
                  <span className="text-tertiary shrink-0 font-mono text-xs">
                    {cmd.shortcut}
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>
      <div className="border-primary mx-2.5 border-t" />
      <div className="px-2.5 py-1">
        <button
          type="button"
          className="text-tertiary hover:bg-secondary-translucent flex w-full items-center justify-between rounded-xs px-1 py-1.5 text-left text-sm"
          onClick={onClose}
        >
          <span>Close menu</span>
          <kbd className="text-quaternary bg-secondary rounded-xs px-1.5 py-0.5 text-[11px] font-medium">
            esc
          </kbd>
        </button>
      </div>
    </div>
  );
}
