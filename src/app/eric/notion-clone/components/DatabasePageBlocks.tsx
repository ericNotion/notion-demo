"use client";

import { BlockEditor } from "@/components/notion-kit/editor";
import { type Block } from "@/components/notion-kit/editor/atoms";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useMemo } from "react";
import { getDefaultBlocks } from "./defaultPageContent";

const atomCache = new Map<
  string,
  {
    blocksAtom: ReturnType<typeof atomWithStorage<Block[]>>;
    lastSavedAtom: ReturnType<typeof atom<Date | null>>;
  }
>();

function getPageAtoms(storageKey: string) {
  if (!atomCache.has(storageKey)) {
    atomCache.set(storageKey, {
      blocksAtom: atomWithStorage<Block[]>(
        `${storageKey}-blocks-v2`,
        getDefaultBlocks(storageKey),
      ),
      lastSavedAtom: atom<Date | null>(null),
    });
  }
  return atomCache.get(storageKey)!;
}

export function DatabasePageBlocks({ storageKey }: { storageKey: string }) {
  const { blocksAtom, lastSavedAtom } = useMemo(
    () => getPageAtoms(storageKey),
    [storageKey],
  );

  return <BlockEditor blocksAtom={blocksAtom} lastSavedAtom={lastSavedAtom} />;
}
