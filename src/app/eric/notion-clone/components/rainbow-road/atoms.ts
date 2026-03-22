import { atomWithStorage } from "jotai/utils";

export const rainbowRoadAtom = atomWithStorage<boolean>(
  "eric-notion-clone-rainbow-road",
  false,
);
