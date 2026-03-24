import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { BeatPattern, DrumType } from "./types";
import { STEPS } from "./types";

const createEmptyPattern = (): Record<DrumType, boolean[]> => ({
  kick: Array(STEPS).fill(false),
  snare: Array(STEPS).fill(false),
  hihat: Array(STEPS).fill(false),
  clap: Array(STEPS).fill(false),
  tom: Array(STEPS).fill(false),
  rim: Array(STEPS).fill(false),
});

export const isPlayingAtom = atom(false);
export const currentStepAtom = atom(0);
export const bpmAtom = atomWithStorage("beat-machine-bpm", 120);
export const beatPatternAtom = atomWithStorage(
  "beat-machine-pattern",
  createEmptyPattern(),
);

export const savedBeatsAtom = atomWithStorage<BeatPattern[]>(
  "beat-machine-saved-beats",
  [],
);

export const visualizerDataAtom = atom<number[]>([]);
