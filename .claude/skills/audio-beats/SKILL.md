---
name: audio-beats
description: Build beat machines and audio sequencers using Tone.js. Use when creating music/audio blocks, step sequencers, drum machines, or any audio playback features.
---

# Audio & Beat Machine Patterns

This project uses **Tone.js** for audio. Always import from `tone`.

## Audio Context — Critical Gotcha

Browsers require a user gesture before playing audio. **Always call `Tone.start()` on the first user interaction.**

```tsx
import * as Tone from "tone";

function PlayButton() {
  const handlePlay = async () => {
    await Tone.start(); // Must happen in a click/tap handler
    Tone.getTransport().start();
  };
  return <button onClick={handlePlay}>Play</button>;
}
```

## Step Sequencer Setup

### Built-in Synths (no audio files needed)

```tsx
import * as Tone from "tone";

// Kick drum
const kick = new Tone.MembraneSynth().toDestination();

// Hi-hat
const hihat = new Tone.MetalSynth({
  frequency: 200,
  envelope: { attack: 0.001, decay: 0.1, release: 0.01 },
  volume: -10,
}).toDestination();

// Snare
const snare = new Tone.NoiseSynth({
  noise: { type: "white" },
  envelope: { attack: 0.001, decay: 0.15, sustain: 0 },
}).toDestination();

// Clap
const clap = new Tone.NoiseSynth({
  noise: { type: "pink" },
  envelope: { attack: 0.005, decay: 0.2, sustain: 0 },
}).toDestination();
```

### Sequence Playback

```tsx
// 16-step pattern: true = trigger, false = silent
const pattern = [
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
];

const sequence = new Tone.Sequence(
  (time, step) => {
    if (pattern[step]) {
      kick.triggerAttackRelease("C1", "8n", time);
    }
  },
  [...Array(16).keys()],
  "16n",
);

// Start/stop
Tone.getTransport().bpm.value = 120;
sequence.start(0);
Tone.getTransport().start();
```

### Multi-Track Pattern

```tsx
type Track = {
  name: string;
  synth: Tone.MembraneSynth | Tone.MetalSynth | Tone.NoiseSynth;
  steps: boolean[];
  note?: string; // e.g. "C1" for kick
};

// Each track has its own 16-step pattern
const tracks: Track[] = [
  { name: "Kick", synth: kick, steps: Array(16).fill(false), note: "C1" },
  { name: "Snare", synth: snare, steps: Array(16).fill(false) },
  { name: "Hi-hat", synth: hihat, steps: Array(16).fill(false) },
  { name: "Clap", synth: clap, steps: Array(16).fill(false) },
];
```

## Beat Pattern Data Model

Store patterns with Jotai for persistence:

```tsx
import { atomWithStorage } from "jotai/utils";

interface BeatPattern {
  id: string;
  name: string;
  bpm: number;
  tracks: { name: string; steps: boolean[] }[];
}

// Persists to localStorage
const savedPatternsAtom = atomWithStorage<BeatPattern[]>(
  "eric-nc-beat-patterns",
  [],
);

const currentPatternAtom = atom<BeatPattern>({
  id: crypto.randomUUID(),
  name: "Untitled",
  bpm: 120,
  tracks: [
    { name: "Kick", steps: Array(16).fill(false) },
    { name: "Snare", steps: Array(16).fill(false) },
    { name: "Hi-hat", steps: Array(16).fill(false) },
    { name: "Clap", steps: Array(16).fill(false) },
  ],
});
```

## Queue & Sequencing

Save patterns and play them in order:

```tsx
const queueAtom = atomWithStorage<BeatPattern[]>("eric-nc-beat-queue", []);

// Play queue sequentially
async function playQueue(queue: BeatPattern[]) {
  for (const pattern of queue) {
    Tone.getTransport().bpm.value = pattern.bpm;
    // Set up sequences for this pattern
    // Wait for N measures then move to next
    await new Promise((resolve) => {
      Tone.getTransport().scheduleOnce(() => resolve(undefined), "+4m");
    });
  }
}
```

## Sequencer Grid UI

Use a CSS grid with Tailwind:

```tsx
// Grid: rows = tracks, columns = steps
<div
  className="grid gap-0.5"
  style={{ gridTemplateColumns: `120px repeat(16, 1fr)` }}
>
  {tracks.map((track, trackIndex) => (
    <React.Fragment key={track.name}>
      <div className="text-body-sm text-secondary flex items-center px-2">
        {track.name}
      </div>
      {track.steps.map((active, stepIndex) => (
        <button
          key={stepIndex}
          onClick={() => toggleStep(trackIndex, stepIndex)}
          className={cn(
            "aspect-square rounded-xs transition-colors",
            active
              ? "bg-blue-accent-primary"
              : "bg-tertiary hover:bg-secondary",
            currentStep === stepIndex && "ring-blue-primary ring-2",
          )}
        />
      ))}
    </React.Fragment>
  ))}
</div>
```

## Integration as a Notion Block

This is a block type — follow the `notion-patterns` skill for registration:

1. Add `BeatMachineBlock` interface to `atoms.ts`
2. Create `BeatMachineBlock.tsx` component
3. Register in `blocks/index.ts`
4. Add slash command entry (e.g., `/beat` or `/drum`)

## Cleanup

Always dispose synths and stop transport when the block unmounts:

```tsx
useEffect(() => {
  return () => {
    Tone.getTransport().stop();
    Tone.getTransport().cancel();
    kick.dispose();
    snare.dispose();
    hihat.dispose();
  };
}, []);
```
