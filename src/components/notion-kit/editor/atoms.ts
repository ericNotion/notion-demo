import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// Block types
export interface ParagraphBlock {
  id: string;
  type: "paragraph" | "h1" | "h2" | "h3";
  text: string;
}

export interface ListBlock {
  id: string;
  type: "ul";
  items: { id: string; text: string }[];
}

export interface WhiteboardBlock {
  id: string;
  type: "whiteboard";
  strokes: Array<{
    points: { x: number; y: number }[];
    color: string;
    width: number;
  }>;
}

export type Block = ParagraphBlock | ListBlock | WhiteboardBlock;

// Helper to create IDs
export function createBlockId(prefix: string = "blk"): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

// Helper to create initial blocks
function createInitialBlocks(): Block[] {
  return [{ id: createBlockId(), type: "paragraph", text: "" }];
}

// Factory function to create document atoms with custom storage keys
export function createDocumentAtoms(storageKeyPrefix: string) {
  const titleAtom = atomWithStorage<string>(
    `${storageKeyPrefix}-title`,
    "Untitled",
  );

  const blocksAtom = atomWithStorage<Block[]>(
    `${storageKeyPrefix}-blocks`,
    createInitialBlocks(),
  );

  const lastSavedAtom = atom<Date | null>(null);

  return {
    titleAtom,
    blocksAtom,
    lastSavedAtom,
  };
}

// Default atoms for simple usage
const defaultDocumentAtoms = createDocumentAtoms("notion-editor");
export const documentTitleAtom = defaultDocumentAtoms.titleAtom;
export const blocksAtom = defaultDocumentAtoms.blocksAtom;
export const lastSavedAtom = defaultDocumentAtoms.lastSavedAtom;
