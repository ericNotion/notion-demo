"use client";

import { useState } from "react";
import { EmojiPicker } from "./EmojiPicker";

function StaticDragHandle() {
  return (
    <div className="absolute top-0 -left-[52px] flex items-center gap-0.5 opacity-0 transition-opacity group-hover/block:opacity-100">
      <button
        type="button"
        className="text-tertiary hover:bg-primary/5 flex size-6 cursor-pointer items-center justify-center rounded-xs dark:hover:bg-white/10"
        tabIndex={-1}
        aria-label="Add block"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d="M7 2v10M2 7h10" />
        </svg>
      </button>
      <div
        role="button"
        tabIndex={-1}
        className="text-tertiary hover:bg-primary/5 flex size-6 cursor-grab items-center justify-center rounded-xs select-none active:cursor-grabbing dark:hover:bg-white/10"
        aria-label="Drag to reorder"
      >
        <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor">
          <circle cx="3" cy="2" r="1.2" />
          <circle cx="7" cy="2" r="1.2" />
          <circle cx="3" cy="7" r="1.2" />
          <circle cx="7" cy="7" r="1.2" />
          <circle cx="3" cy="12" r="1.2" />
          <circle cx="7" cy="12" r="1.2" />
        </svg>
      </div>
    </div>
  );
}

export function CalloutBlock({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  const [currentIcon, setCurrentIcon] = useState(icon);

  return (
    <div className="group/block relative my-2">
      <StaticDragHandle />
      <div className="bg-secondary flex gap-3 rounded-lg px-4 py-3">
        <EmojiPicker
          value={currentIcon}
          onChange={setCurrentIcon}
          size="callout"
        />
        <div className="text-primary text-[15px] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function DividerBlock() {
  return (
    <div className="group/block relative my-4">
      <StaticDragHandle />
      <hr className="border-primary border-t" />
    </div>
  );
}
