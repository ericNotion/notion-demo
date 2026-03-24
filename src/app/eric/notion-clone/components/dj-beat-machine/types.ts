export interface BeatPattern {
  id: string;
  name: string;
  contributor: string;
  bpm: number;
  steps: boolean[][];
  timestamp: number;
}

export interface DrumTrack {
  id: string;
  name: string;
  color: string;
  type: "kick" | "snare" | "hihat" | "clap";
}

export const DRUM_TRACKS: DrumTrack[] = [
  { id: "kick", name: "Kick", color: "#ff006e", type: "kick" },
  { id: "snare", name: "Snare", color: "#8338ec", type: "snare" },
  { id: "hihat", name: "Hi-Hat", color: "#06ffa5", type: "hihat" },
  { id: "clap", name: "Clap", color: "#ffbe0b", type: "clap" },
];

export const STEPS = 16;
