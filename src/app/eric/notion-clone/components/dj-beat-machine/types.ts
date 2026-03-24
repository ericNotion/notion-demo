export type DrumType = "kick" | "snare" | "hihat" | "openhat" | "clap" | "perc";

export interface BeatPattern {
  id: string;
  name: string;
  author: string;
  bpm: number;
  steps: Record<DrumType, boolean[]>; // 16 steps per drum
  createdAt: number;
}

export interface QueuedBeat {
  id: string;
  pattern: BeatPattern;
  contributedBy: string;
  contributedAt: number;
}

export interface PlaybackState {
  isPlaying: boolean;
  currentStep: number;
  bpm: number;
}
