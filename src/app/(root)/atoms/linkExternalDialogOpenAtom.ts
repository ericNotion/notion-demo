import { Prototype } from "@/types/prototypes";
import { atom } from "jotai";

/**
 * State for the Link External Dialog
 * - open: whether the dialog is open
 * - versionContext: if set, creating a new version of an existing external prototype
 */
export type LinkExternalDialogState = {
  open: boolean;
  versionContext?: {
    /** The prototype being versioned */
    sourcePrototype: Prototype & { username: string };
  };
};

export const linkExternalDialogOpenAtom = atom<LinkExternalDialogState>({
  open: false,
});

/**
 * Helper to open dialog for new external prototype (no version context)
 */
export function openLinkExternalDialog(): LinkExternalDialogState {
  return { open: true };
}

/**
 * Helper to open dialog for creating new version of external prototype
 */
export function openLinkExternalDialogForVersion(
  sourcePrototype: Prototype & { username: string },
): LinkExternalDialogState {
  return { open: true, versionContext: { sourcePrototype } };
}

/**
 * Helper to close the dialog
 */
export function closeLinkExternalDialog(): LinkExternalDialogState {
  return { open: false };
}
