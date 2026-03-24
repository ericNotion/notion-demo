"use client";

import { BlockEditor } from "@/components/notion-kit/editor";
import { type Block } from "@/components/notion-kit/editor/atoms";
import { createAtomCache } from "@/utils/createAtomCache";
import { type PrimitiveAtom, atom } from "jotai";
import { useMemo } from "react";
import { getDefaultBlocks } from "./defaultPageContent";
import { EmojiPicker } from "./EmojiPicker";

const getBlocksAtom = createAtomCache<Block[]>();
const lastSavedCache = new Map<string, PrimitiveAtom<Date | null>>();

function getPageAtoms(storageKey: string) {
  const blocksAtom = getBlocksAtom(
    `${storageKey}-blocks-v2`,
    getDefaultBlocks(storageKey),
  );
  if (!lastSavedCache.has(storageKey)) {
    lastSavedCache.set(storageKey, atom<Date | null>(null));
  }
  return { blocksAtom, lastSavedAtom: lastSavedCache.get(storageKey)! };
}

export function DatabasePageBlocks({ storageKey }: { storageKey: string }) {
  const { blocksAtom, lastSavedAtom } = useMemo(
    () => getPageAtoms(storageKey),
    [storageKey],
  );

  return (
    <BlockEditor
      blocksAtom={blocksAtom}
      lastSavedAtom={lastSavedAtom}
      renderCalloutIcon={(icon, onIconChange) => (
        <EmojiPicker value={icon} onChange={onIconChange} size="callout" />
      )}
    />
  );
}
