export type DrumType = "kick" | "snare" | "hihat" | "clap" | "tom" | "rim";

export interface BeatPattern {
  id: string;
  name: string;
  author: string;
  bpm: number;
  steps: Record<DrumType, boolean[]>;
  upvotes: number;
  createdAt: number;
}

export interface Track {
  type: DrumType;
  label: string;
  color: string;
}

export const TRACKS: Track[] = [
  { type: "kick", label: "Kick", color: "rgb(239, 68, 68)" },
  { type: "snare", label: "Snare", color: "rgb(251, 146, 60)" },
  { type: "hihat", label: "Hi-hat", color: "rgb(34, 197, 94)" },
  { type: "clap", label: "Clap", color: "rgb(59, 130, 246)" },
  { type: "tom", label: "Tom", color: "rgb(168, 85, 247)" },
  { type: "rim", label: "Rim", color: "rgb(236, 72, 153)" },
];

export const STEPS = 16;
