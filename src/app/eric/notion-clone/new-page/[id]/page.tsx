"use client";

import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { ContentPage } from "../../components/ContentPage";

const atomCache = new Map<string, ReturnType<typeof atomWithStorage>>();
function getCachedAtom<T>(key: string, initial: T) {
  if (!atomCache.has(key)) {
    atomCache.set(key, atomWithStorage(key, initial));
  }
  return atomCache.get(key)! as ReturnType<typeof atomWithStorage<T>>;
}

export default function Page() {
  const { id } = useParams<{ id: string }>();

  const titleAtom = useMemo(
    () => getCachedAtom(`eric-nc-page-${id}-title`, ""),
    [id],
  );
  const lastSavedAtom = useMemo(() => atom<Date | null>(null), []);
  const blocksAtom = useMemo(
    () =>
      getCachedAtom<Block[]>(`eric-nc-page-${id}-blocks`, [
        { id: createBlockId(), type: "paragraph", text: "" },
      ]),
    [id],
  );

  return (
    <ContentPage
      emoji={null}
      emojiStorageKey={`eric-nc-page-${id}-emoji`}
      titleAtom={titleAtom}
      blocksAtom={blocksAtom}
      lastSavedAtom={lastSavedAtom}
      titlePlaceholder="Untitled"
    />
  );
}
