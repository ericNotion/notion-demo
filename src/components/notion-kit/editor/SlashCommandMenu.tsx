"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";
import type { Block } from "./atoms";
import { slashCommands } from "./blocks";

type BlockType = Block["type"];

export function filterCommands(filterText: string) {
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
