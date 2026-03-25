import { atom } from "jotai";

export type BeatPattern = {
  id: string;
  name: string;
  bpm: number;
  patterns: {
    kick: boolean[];
    snare: boolean[];
    hihat: boolean[];
    clap: boolean[];
  };
  createdBy: string;
  timestamp: number;
};

export const isPlayingAtom = atom(false);
export const bpmAtom = atom(120);
export const currentStepAtom = atom(0);
export const volumeAtom = atom(0.7);

export const patternsAtom = atom({
  kick: Array(16).fill(false),
  snare: Array(16).fill(false),
  hihat: Array(16).fill(false),
  clap: Array(16).fill(false),
});

export const beatQueueAtom = atom<BeatPattern[]>([
  {
    id: "1",
    name: "Berlin Techno",
    bpm: 128,
    patterns: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
      snare: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      hihat: [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true],
      clap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
    createdBy: "Sophie Tran",
    timestamp: Date.now() - 3600000,
  },
  {
    id: "2",
    name: "Minimal House",
    bpm: 124,
    patterns: {
      kick: [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      snare: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      hihat: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      clap: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
    },
    createdBy: "Maya Chen",
    timestamp: Date.now() - 7200000,
  },
  {
    id: "3",
    name: "Broken Beat",
    bpm: 132,
    patterns: {
      kick: [true, false, false, true, false, false, true, false, false, false, true, false, false, true, false, false],
      snare: [false, false, false, false, true, false, false, true, false, false, false, false, true, false, false, false],
      hihat: [true, false, true, true, false, true, true, false, true, false, true, true, false, true, false, true],
      clap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
    createdBy: "Jordan Lee",
    timestamp: Date.now() - 10800000,
  },
]);
