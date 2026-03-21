import { createDocumentAtoms } from "@/components/notion-kit/editor";

const atoms = createDocumentAtoms("slippery-slope");

export const documentTitleAtom = atoms.titleAtom;
export const blocksAtom = atoms.blocksAtom;
export const lastSavedAtom = atoms.lastSavedAtom;
