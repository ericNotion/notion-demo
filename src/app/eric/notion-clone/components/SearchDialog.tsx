"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Icon } from "@nds-icons";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { allPagesAtom } from "../data";
import { SyncedEmoji } from "./SyncedSidebarItem";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pages = useAtomValue(allPagesAtom);

  const filtered = pages.filter(
    (p) =>
      p.label.toLowerCase().includes(query.toLowerCase()) ||
      p.emoji.includes(query),
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  const navigate = useCallback(
    (href: string) => {
      onOpenChange(false);
      router.push(href);
    },
    [onOpenChange, router],
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%] top-[15%] max-w-xl translate-y-0 gap-0 overflow-hidden p-0"
      >
        <DialogTitle className="sr-only">Search</DialogTitle>
        <div className="border-secondary flex items-center gap-3 border-b px-4 py-3">
          <Icon icon={magnifyingGlassIcon} size={20} color="secondary" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages..."
            className="text-primary placeholder:text-tertiary flex-1 bg-transparent text-sm outline-hidden"
            onKeyDown={(e) => {
              if (e.key === "Enter" && filtered.length > 0) {
                navigate(filtered[0].href);
              }
            }}
          />
          <kbd className="text-tertiary bg-secondary rounded-xs px-1.5 py-0.5 text-[11px] font-medium">
            ESC
          </kbd>
        </div>
        <div className="max-h-[320px] overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <div className="text-tertiary px-4 py-8 text-center text-sm">
              No results
            </div>
          ) : (
            filtered.map((page) => (
              <button
                key={page.href + page.label}
                type="button"
                onClick={() => navigate(page.href)}
                className="hover:bg-secondary-translucent flex w-full items-center gap-3 px-4 py-2 text-left"
              >
                <span className="text-base">
                  <SyncedEmoji
                    storageKey={page.emojiStorageKey}
                    fallback={page.emoji}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-primary text-sm font-medium">
                    {page.label}
                  </span>
                  <span className="text-tertiary ml-2 text-xs">
                    {page.parent ?? page.section}
                  </span>
                </div>
                <span className="text-tertiary text-xs">
                  {page.kind === "meeting-note"
                    ? "meeting note"
                    : page.kind === "database-item"
                      ? "in database"
                      : page.kind}
                </span>
              </button>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
