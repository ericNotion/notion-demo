import { atomWithStorage } from "jotai/utils";

export const AISidebarAtom = atomWithStorage<boolean>(
  "ai-sidebar-open-state",
  false,
);
