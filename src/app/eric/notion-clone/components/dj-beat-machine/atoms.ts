import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type DrumSound = 
  | "kick"
  | "snare"
  | "hihat"
  | "clap"
  | "tom"
  | "cymbal"
  | "rim"
  | "cowbell";

export const DRUM_SOUNDS: DrumSound[] = [
  "kick",
  "snare",
  "hihat",
  "clap",
  "tom",
  "cymbal",
  "rim",
  "cowbell",
];

export type BeatPattern = {
  [key in DrumSound]: boolean[];
};

export type SavedBeat = {
  id: string;
  name: string;
  pattern: BeatPattern;
  bpm: number;
  createdAt: number;
  author: string;
};

// Create initial empty pattern
const createEmptyPattern = (): BeatPattern => {
  const pattern: Partial<BeatPattern> = {};
  DRUM_SOUNDS.forEach((sound) => {
    pattern[sound] = Array(16).fill(false);
  });
  return pattern as BeatPattern;
};

// Current beat pattern state
export const beatPatternAtom = atomWithStorage<BeatPattern>(
  "dj-beat-machine-pattern",
  createEmptyPattern()
);

// BPM state
export const bpmAtom = atomWithStorage<number>("dj-beat-machine-bpm", 120);

// Playing state
export const isPlayingAtom = atom<boolean>(false);

// Current step position (0-15)
export const currentStepAtom = atom<number>(0);

// Saved beats queue
export const beatQueueAtom = atomWithStorage<SavedBeat[]>(
  "dj-beat-machine-queue",
  []
);

// Currently playing queue item index
export const queuePlayingIndexAtom = atom<number | null>(null);

// Visualizer data
export const visualizerDataAtom = atom<number[]>(Array(32).fill(0));
