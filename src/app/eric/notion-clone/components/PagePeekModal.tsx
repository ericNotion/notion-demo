"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Icon } from "@nds-icons";
import { arrowExpandDiagonalIcon } from "@nds-icons/arrowExpandDiagonal/default.icon";
import { chatBubbleIcon } from "@nds-icons/chatBubble/default.icon";
import { clockIcon } from "@nds-icons/clock/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DatabasePageBlocks } from "./DatabasePageBlocks";
import { EmojiPicker } from "./EmojiPicker";

export interface PageProperty {
  label: string;
  icon: any;
  value: React.ReactNode;
}

interface PagePeekModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  icon: string;
  properties: PageProperty[];
  href?: string;
  bodyStorageKey?: string;
}

export function PagePeekModal({
  open,
  onOpenChange,
  title,
  icon,
  properties,
  href,
  bodyStorageKey,
}: PagePeekModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableIcon, setEditableIcon] = useState(icon);

  useEffect(() => {
    setEditableTitle(title);
  }, [title]);

  useEffect(() => {
    setEditableIcon(icon);
  }, [icon]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
          }
        });
      });
    }
  }, [open, title]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[85vh] max-w-[900px] flex-col gap-0 overflow-hidden p-0"
      >
        <DialogTitle className="sr-only">{editableTitle || title}</DialogTitle>

        {/* Top toolbar */}
        <div className="border-secondary flex shrink-0 items-center justify-between border-b px-3 py-1.5">
          <div className="flex items-center gap-1">
            {href ? (
              <Link
                href={href}
                onClick={() => onOpenChange(false)}
                className="text-secondary hover:bg-secondary-translucent flex items-center gap-1.5 rounded-xs px-2 py-1 text-xs transition-colors"
              >
                <Icon
                  icon={arrowExpandDiagonalIcon}
                  size={14}
                  color="secondary"
                />
                Open as full page
              </Link>
            ) : (
              <button
                type="button"
                className="text-secondary hover:bg-secondary-translucent flex items-center gap-1.5 rounded-xs px-2 py-1 text-xs transition-colors"
              >
                <Icon
                  icon={arrowExpandDiagonalIcon}
                  size={14}
                  color="secondary"
                />
                Open as full page
              </button>
            )}
          </div>
          <div className="flex items-center gap-0.5">
            <button
              type="button"
              className="text-secondary hover:bg-secondary-translucent rounded-sm p-1.5 transition-colors"
            >
              <Icon icon={chatBubbleIcon} size={14} color="secondary" />
            </button>
            <button
              type="button"
              className="text-secondary hover:bg-secondary-translucent rounded-sm p-1.5 transition-colors"
            >
              <Icon icon={clockIcon} size={14} color="secondary" />
            </button>
            <button
              type="button"
              className="text-secondary hover:bg-secondary-translucent rounded-sm p-1.5 transition-colors"
            >
              <Icon icon={starIcon} size={14} color="secondary" />
            </button>
            <button
              type="button"
              className="text-secondary hover:bg-secondary-translucent rounded-sm px-2 py-1 text-lg leading-none transition-colors"
            >
              ···
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto">
          {/* Page header */}
          <div className="mx-auto max-w-[680px] px-12 pt-10 pb-2">
            <div className="mb-2">
              <EmojiPicker
                value={editableIcon}
                onChange={setEditableIcon}
                size="lg"
              />
            </div>
            <input
              type="text"
              value={editableTitle}
              onChange={(e) => setEditableTitle(e.target.value)}
              placeholder="Untitled"
              className="text-primary placeholder:text-quaternary w-full bg-transparent text-[32px] font-bold tracking-tight outline-hidden"
            />
          </div>

          {/* Properties */}
          <div className="mx-auto max-w-[680px] px-12 py-3">
            <div className="space-y-1">
              {properties.map((prop) => (
                <div
                  key={prop.label}
                  className="hover:bg-secondary-translucent flex min-h-[34px] items-center gap-4 rounded-sm px-1 py-1"
                >
                  <span className="text-secondary flex w-[140px] shrink-0 items-center gap-1.5 text-sm">
                    <Icon icon={prop.icon} size={14} color="secondary" />
                    {prop.label}
                  </span>
                  <div className="min-w-0 flex-1 text-sm">{prop.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-auto max-w-[680px] px-12">
            <hr className="border-secondary border-t" />
          </div>

          {/* Body */}
          <div className="mx-auto max-w-[680px] px-12 pt-4 pb-20">
            {bodyStorageKey ? (
              <DatabasePageBlocks storageKey={bodyStorageKey} />
            ) : (
              <p className="text-quaternary text-[15px]">Type something...</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
