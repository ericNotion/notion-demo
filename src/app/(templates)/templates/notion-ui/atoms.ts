import { createDocumentAtoms } from "@/components/notion-kit/editor";

// Create document atoms with template-specific storage keys
const notionUIAtoms = createDocumentAtoms("notion-ui");

export const documentTitleAtom = notionUIAtoms.titleAtom;
export const blocksAtom = notionUIAtoms.blocksAtom;
export const lastSavedAtom = notionUIAtoms.lastSavedAtom;

// Re-export types for convenience
