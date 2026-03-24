"use client";

import { atom } from "jotai";
import type { TrackName } from "./audio-engine";

export const STEPS = 16;

export type Pattern = Record<TrackName, boolean[]>;

export function createEmptyPattern(): Pattern {
  return {
    kick: Array(STEPS).fill(false),
    snare: Array(STEPS).fill(false),
    hihat: Array(STEPS).fill(false),
    clap: Array(STEPS).fill(false),
  };
}

export function createDefaultPattern(): Pattern {
  const p = createEmptyPattern();
  // Classic four-on-the-floor
  p.kick[0] = true;
  p.kick[4] = true;
  p.kick[8] = true;
  p.kick[12] = true;
  // Snare on 4 and 12
  p.snare[4] = true;
  p.snare[12] = true;
  // Hihat on every other
  for (let i = 0; i < STEPS; i += 2) p.hihat[i] = true;
  // Clap accent
  p.clap[4] = true;
  p.clap[12] = true;
  return p;
}

export type QueuedBeat = {
  id: string;
  name: string;
  author: string;
  pattern: Pattern;
  bpm: number;
  timestamp: number;
};

export const bpmAtom = atom(128);
export const isPlayingAtom = atom(false);
export const currentStepAtom = atom(-1);
export const volumeAtom = atom(0.7);
export const patternAtom = atom<Pattern>(createDefaultPattern());
export const patternNameAtom = atom("Berlin Basement");
export const beatQueueAtom = atom<QueuedBeat[]>([
  {
    id: "preset-1",
    name: "Berghain Opener",
    author: "DJ Techno",
    pattern: (() => {
      const p = createEmptyPattern();
      p.kick[0] = true;
      p.kick[4] = true;
      p.kick[8] = true;
      p.kick[12] = true;
      p.hihat[2] = true;
      p.hihat[6] = true;
      p.hihat[10] = true;
      p.hihat[14] = true;
      p.snare[8] = true;
      p.clap[4] = true;
      p.clap[12] = true;
      return p;
    })(),
    bpm: 130,
    timestamp: Date.now() - 3600000,
  },
  {
    id: "preset-2",
    name: "Minimal Groove",
    author: "Beatmaker",
    pattern: (() => {
      const p = createEmptyPattern();
      p.kick[0] = true;
      p.kick[6] = true;
      p.kick[10] = true;
      p.hihat[0] = true;
      p.hihat[2] = true;
      p.hihat[4] = true;
      p.hihat[6] = true;
      p.hihat[8] = true;
      p.hihat[10] = true;
      p.hihat[12] = true;
      p.hihat[14] = true;
      p.snare[4] = true;
      p.snare[12] = true;
      return p;
    })(),
    bpm: 124,
    timestamp: Date.now() - 7200000,
  },
]);
