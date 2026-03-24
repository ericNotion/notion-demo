"use client";

import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowExpandDiagonalIcon } from "@nds-icons/arrowExpandDiagonal/default.icon";
import { ellipsisIcon } from "@nds-icons/ellipsis/default.icon";
import { useState } from "react";
import {
  type DatabaseBlock as DatabaseBlockType,
  createBlockId,
} from "../atoms";
import { CmdIcon, DragHandle } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

function InlineDatabaseBlock({
  block,
  onKeyDown,
  onTitleChange,
  onRowClick,
  isGripSelected,
}: {
  block: DatabaseBlockType;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onTitleChange: (title: string) => void;
  onRowClick?: (row: { id: string; name: string }) => void;
  isGripSelected?: boolean;
}) {
  const [title, setTitle] = useState(block.title);
  const [rows, setRows] = useState<{ id: string; name: string }[]>([]);
  const addRow = () =>
    setRows((prev) => [...prev, { id: createBlockId("row"), name: "" }]);
  const emptyRowCount = rows.length === 0 ? 3 : 0;

  return (
    <div
      tabIndex={0}
      data-block-id={block.id}
      className={cn(
        "rounded-lg outline-hidden",
        isGripSelected
          ? "bg-blue-50 dark:bg-blue-950/30"
          : "focus:bg-blue-50 dark:focus:bg-blue-950/30",
      )}
      onKeyDown={onKeyDown}
    >
      <div className="flex items-center justify-between py-1">
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            onTitleChange(e.target.value);
          }}
          className="text-primary min-w-0 flex-1 bg-transparent text-xl font-bold outline-hidden placeholder:text-[#c4c4c4]"
          placeholder="Untitled"
        />
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            className="text-tertiary hover:bg-secondary flex size-7 items-center justify-center rounded-xs"
          >
            <Icon icon={arrowExpandDiagonalIcon} size={16} color="inherit" />
          </button>
          <button
            type="button"
            className="text-tertiary hover:bg-secondary flex size-7 items-center justify-center rounded-xs"
          >
            <Icon icon={ellipsisIcon} size={16} color="inherit" />
          </button>
          <button
            type="button"
            className="flex items-center gap-0.5 rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-600"
            onClick={addRow}
          >
            New
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M2 4l3 3 3-3" />
            </svg>
          </button>
        </div>
      </div>
      <div className="border-primary/60 border-t">
        <div className="border-primary/60 flex border-b">
          <div className="border-primary/60 flex flex-1 items-center gap-1.5 border-r px-3 py-1.5">
            <span className="text-tertiary text-sm font-medium">Aa</span>
            <span className="text-primary text-sm">Name</span>
          </div>
          <div className="flex flex-1 items-center gap-1.5 px-3 py-1.5">
            <span className="text-tertiary text-sm">+</span>
            <span className="text-tertiary text-sm">Add property</span>
          </div>
        </div>
        {rows.map((row) => (
          <button
            key={row.id}
            type="button"
            className="border-primary/60 flex h-8 w-full items-center gap-1.5 border-b px-3 text-left hover:bg-[#f7f7f5]"
            onClick={() => onRowClick?.(row)}
          >
            <span
              className="text-[13px]"
              style={{
                fontFamily:
                  "'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif",
              }}
            >
              📄
            </span>
            <span className="text-primary text-sm">
              {row.name || "Untitled"}
            </span>
          </button>
        ))}
        {rows.length > 0 && (
          <button
            type="button"
            className="border-primary/60 text-tertiary flex h-8 w-full items-center gap-1.5 border-b px-3 text-sm"
            onClick={addRow}
          >
            <span>+</span>
            <span>New page</span>
          </button>
        )}
        {Array.from({ length: emptyRowCount }).map((_, i) => (
          <div
            key={i}
            className="group/row border-primary/60 relative h-8 border-b"
          >
            {i === 0 && (
              <button
                type="button"
                className="text-tertiary absolute inset-0 flex items-center gap-1.5 px-3 text-sm opacity-0 transition-opacity group-hover/row:opacity-100"
                onClick={addRow}
              >
                <span>+</span>
                <span>New page</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function DatabaseBlockComponent({
  block,
  isGripSelected,
  isDragging,
  wrapperRef,
  updateBlock,
  insertAfter,
  remove,
  focusPrev,
  focusNext,
  markSaved: _markSaved,
  startDrag,
  selectGrip,
  renderDatabaseBlock,
}: BlockComponentProps) {
  const dbBlock = block as DatabaseBlockType;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    const isInput =
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable;

    if ((e.key === "Backspace" || e.key === "Delete") && !isInput) {
      e.preventDefault();
      selectGrip();
      focusPrev();
      remove();
    }
    if (e.key === "ArrowUp" && !isInput) {
      e.preventDefault();
      focusPrev();
    }
    if (e.key === "ArrowDown" && !isInput) {
      e.preventDefault();
      focusNext();
    }
  };

  const handleTitleChange = (title: string) => {
    updateBlock({ title });
  };

  return (
    <div
      ref={wrapperRef}
      className={cn("pt-[8px] pb-[8px]", isDragging && "opacity-40")}
    >
      <div className="group/block relative">
        <DragHandle
          className="-left-[52px]"
          onAdd={() =>
            insertAfter({
              id: createBlockId(),
              type: "paragraph",
              text: "",
            })
          }
          onGripPointerDown={(e) => startDrag(e)}
          onGripClick={() => selectGrip()}
        />
        {renderDatabaseBlock ? (
          <div
            data-block-id={block.id}
            className={cn(
              "rounded-lg",
              isGripSelected && "bg-blue-50 dark:bg-blue-950/30",
            )}
            onKeyDown={handleKeyDown}
          >
            {renderDatabaseBlock(dbBlock, handleTitleChange)}
          </div>
        ) : (
          <InlineDatabaseBlock
            block={dbBlock}
            isGripSelected={isGripSelected}
            onKeyDown={handleKeyDown}
            onTitleChange={handleTitleChange}
          />
        )}
      </div>
    </div>
  );
}

export const databaseBlockDef: BlockDefinition = {
  type: "database",
  slashCommand: {
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
    section: "inline",
  },
  Component: DatabaseBlockComponent,
};
