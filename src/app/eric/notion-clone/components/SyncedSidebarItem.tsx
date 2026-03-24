"use client";

import { SidebarItem } from "@/components/notion-kit/SlipperySidebar";
import { createAtomCache } from "@/utils/createAtomCache";
import { useAtomValue } from "jotai";
import { useEffect, useMemo, useState } from "react";
import type { PageEntry } from "../data";

const getEmojiAtom = createAtomCache<string>();

export function SyncedEmoji({
  storageKey,
  fallback,
}: {
  storageKey?: string;
  fallback: string;
}) {
  const atom = useMemo(
    () => (storageKey ? getEmojiAtom(storageKey, fallback) : null),
    [storageKey, fallback],
  );
  const stored = useAtomValue(atom ?? getEmojiAtom("__noop__", fallback));
  return <>{storageKey ? stored : fallback}</>;
}

export function useSyncedTitle(storageKey?: string, fallback?: string): string {
  const fb = fallback || "Untitled";
  const [title, setTitle] = useState(fb);

  useEffect(() => {
    if (!storageKey) return;
    const read = () => {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw !== null) {
          const parsed = JSON.parse(raw);
          setTitle(parsed || fb);
        }
      } catch {}
    };
    read();
    const interval = setInterval(read, 500);
    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey) read();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", onStorage);
    };
  }, [storageKey, fb]);

  return storageKey ? title : fb;
}

export function SyncedSidebarItem({
  page,
  isActive,
}: {
  page: PageEntry;
  isActive: boolean;
}) {
  const title = useSyncedTitle(page.titleStorageKey, page.label);
  return (
    <SidebarItem
      icon={
        <span className="flex size-6 items-center justify-center text-base/5">
          <SyncedEmoji
            storageKey={page.emojiStorageKey}
            fallback={page.emoji}
          />
        </span>
      }
      label={title}
      href={page.href}
      isActive={isActive}
    />
  );
}
