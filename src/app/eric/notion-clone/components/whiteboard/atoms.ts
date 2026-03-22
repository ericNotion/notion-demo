import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { Tool, ViewportState, WhiteboardElement } from "./types";

export const currentToolAtom = atom<Tool>("select");

export const elementsAtom = atomWithStorage<WhiteboardElement[]>(
  "eric-notion-clone-whiteboard-elements",
  [],
);

export const selectedElementIdsAtom = atom<Set<string>>(new Set());

export const viewportAtom = atom<ViewportState>({
  offsetX: 0,
  offsetY: 0,
  scale: 1,
});

export const isPanningAtom = atom(false);

export const strokeColorAtom = atom("#1f1f1f");

export const strokeWidthAtom = atom(2);
