"use client";

import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { dividerIcon } from "@nds-icons/divider/default.icon";
import { listBulletIcon } from "@nds-icons/listBullet/default.icon";
import { textAlignLeftIcon } from "@nds-icons/textAlignLeft/default.icon";
import { textH1ToggleIcon } from "@nds-icons/textH1Toggle/default.icon";
import { textH2ToggleIcon } from "@nds-icons/textH2Toggle/default.icon";
import { textH3Icon } from "@nds-icons/textH3/default.icon";
import { useEffect, useRef } from "react";

export interface SlashCommandOption {
  id: string;
  label: string;
  description: string;
  icon: (typeof textAlignLeftIcon);
  keywords: string[];
  onSelect: () => void;
}

interface SlashCommandMenuProps {
  options: SlashCommandOption[];
  selectedIndex: number;
  filterText: string;
  position: { top: number; left: number };
  onSelect: (index: number) => void;
  onClose: () => void;
}

export function SlashCommandMenu({
  options,
  selectedIndex,
  filterText,
  position,
  onSelect,
  onClose,
}: SlashCommandMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const selectedItemRef = useRef<HTMLButtonElement>(null);

  // Filter options based on filter text
  const filteredOptions = options.filter((option) => {
    if (!filterText) return true;
    const searchText = filterText.toLowerCase();
    return (
      option.label.toLowerCase().includes(searchText) ||
      option.description.toLowerCase().includes(searchText) ||
      option.keywords.some((keyword) => keyword.toLowerCase().includes(searchText))
    );
  });

  // Scroll selected item into view
  useEffect(() => {
    if (selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (filteredOptions.length === 0) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="bg-elevated shadow-md-outline animate-in fade-in zoom-in-95 fixed z-50 w-[300px] overflow-hidden rounded-lg duration-150"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <div className="max-h-[400px] overflow-y-auto p-2">
        {filteredOptions.map((option, index) => {
          const actualIndex = options.indexOf(option);
          const isSelected = actualIndex === selectedIndex;

          return (
            <button
              key={option.id}
              ref={isSelected ? selectedItemRef : null}
              type="button"
              className={cn(
                "flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-left transition-colors",
                isSelected ? "bg-tertiary" : "hover:bg-tertiary",
              )}
              onClick={() => onSelect(actualIndex)}
              onMouseEnter={() => onSelect(actualIndex)}
            >
              <div className="flex size-6 shrink-0 items-center justify-center">
                <Icon icon={option.icon} size={16} color="secondary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-body text-primary font-medium">
                  {option.label}
                </div>
                <div className="text-caption text-secondary">
                  {option.description}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function createSlashCommandOptions(
  onTransform: (type: "paragraph" | "h1" | "h2" | "h3" | "ul") => void,
): SlashCommandOption[] {
  return [
    {
      id: "text",
      label: "Text",
      description: "Plain paragraph block",
      icon: textAlignLeftIcon,
      keywords: ["paragraph", "p", "text"],
      onSelect: () => onTransform("paragraph"),
    },
    {
      id: "heading1",
      label: "Heading 1",
      description: "Large heading",
      icon: textH1ToggleIcon,
      keywords: ["h1", "heading", "title", "#"],
      onSelect: () => onTransform("h1"),
    },
    {
      id: "heading2",
      label: "Heading 2",
      description: "Medium heading",
      icon: textH2ToggleIcon,
      keywords: ["h2", "heading", "subheading", "##"],
      onSelect: () => onTransform("h2"),
    },
    {
      id: "heading3",
      label: "Heading 3",
      description: "Small heading",
      icon: textH3Icon,
      keywords: ["h3", "heading", "subheading", "###"],
      onSelect: () => onTransform("h3"),
    },
    {
      id: "bulleted-list",
      label: "Bulleted List",
      description: "Bullet point list",
      icon: listBulletIcon,
      keywords: ["ul", "list", "bullet", "bullets", "-"],
      onSelect: () => onTransform("ul"),
    },
  ];
}
