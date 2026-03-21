import { createDocumentAtoms } from "@/components/notion-kit/editor";

// Create document atoms with template-specific storage keys
const notionDesktopAtoms = createDocumentAtoms("notion-desktop");

export const documentTitleAtom = notionDesktopAtoms.titleAtom;
export const blocksAtom = notionDesktopAtoms.blocksAtom;
export const lastSavedAtom = notionDesktopAtoms.lastSavedAtom;

// Re-export types for convenience
