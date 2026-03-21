import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type SlipperySidebarTab = "home" | "chats" | "meetings" | "inbox";

export const slipperySidebarTabAtom = atomWithStorage<SlipperySidebarTab>(
  "slippery-slope-selected-tab",
  "home",
);

export const composeMenuOpenAtom = atom(false);

export const slipperySidebarOpenAtom = atomWithStorage<boolean>(
  "slippery-sidebar-open-state",
  true,
);

export const slipperySidebarWidthAtom = atomWithStorage<number>(
  "slippery-sidebar-width",
  240,
);
