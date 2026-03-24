---
name: audio-beats
description: Build a Beat Machine BLOCK registered in the slash menu. Produces a self-contained step sequencer with Tone.js audio, BPM controls, queue system, and Notion-native styling. Use when creating music/audio blocks, step sequencers, or drum machines.
---

# Beat Machine Block

This skill produces a **Beat Machine block** that appears in the slash command menu (`/beat`). It is a self-contained component with Tone.js audio, a 16-step sequencer grid, BPM controls, a queue system, and a contribute form. All styling uses Notion semantic tokens.

**Prerequisites:** `tone` is already installed. No packages to add.

## Step 1: Define the block interface

In `src/components/notion-kit/editor/atoms.ts`:

1. Add the interface:

```tsx
export interface BeatMachineBlock {
  id: string;
  type: "beat-machine";
}
```

2. Add `BeatMachineBlock` to the `Block` union:

```tsx
export type Block =
  | ParagraphBlock
  | ListBlock
  | CalloutBlock
  | DividerBlock
  | DatabaseBlock
  | BeatMachineBlock;
```

## Step 2: Update BlockEditor.tsx (5 critical modifications)

In `src/components/notion-kit/editor/BlockEditor.tsx`, make these 5 changes. **Missing any of these causes silent failures.**

### 2a. `getBlockEndEl` function

Find the condition that checks for non-editable block types:

```tsx
if (block.type === "divider" || block.type === "database") {
```

Add `|| block.type === "beat-machine"`:

```tsx
if (block.type === "divider" || block.type === "database" || block.type === "beat-machine") {
```

### 2b. `getBlockStartEl` function

Same change — find the identical condition in `getBlockStartEl` and add `|| block.type === "beat-machine"`.

### 2c. `textContent` sync effect

Find the `useEffect` that syncs `textContent` for blocks. It has a condition like:

```tsx
} else if (blk.type !== "divider" && blk.type !== "database") {
```

Add `&& blk.type !== "beat-machine"`:

```tsx
} else if (blk.type !== "divider" && blk.type !== "database" && blk.type !== "beat-machine") {
```

### 2d. `hasFocusedInitially` effect

Find the `useEffect` that focuses the last empty block on mount. It has a condition like:

```tsx
b.type !== "ul" &&
b.type !== "divider" &&
b.type !== "database" &&
```

Add `b.type !== "beat-machine" &&` to this list.

### 2e. `transformBlock` function

Add a case for `"beat-machine"` in the `transformBlock` function, following the divider/database pattern (insert an empty paragraph after):

```tsx
} else if (blockType === "beat-machine") {
  next[blockIndex] = { id: newBlockId, type: "beat-machine" };
  const afterId = createBlockId();
  next.splice(blockIndex + 1, 0, {
    id: afterId,
    type: "paragraph",
    text: "",
  });
  newBlockId = afterId;
}
```

Place this before the final `else` branch.

## Step 3: Create the block component

Create `src/components/notion-kit/editor/blocks/BeatMachineBlock.tsx`.

The template below prescribes the exact skeleton — the wrapper, DragHandle, keyboard handling, and slash command registration are fixed. Sections marked `{/* IMPLEMENT */}` are where you build the UI.

```tsx
"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import {
  type BeatMachineBlock as BeatMachineBlockType,
  createBlockId,
} from "../atoms";
import { CmdIcon, DragHandle } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

// --- Types ---

interface Track {
  name: string;
  steps: boolean[];
}

interface QueueEntry {
  id: string;
  name: string;
  bpm: number;
  tracks: Track[];
}

// --- Component ---

function BeatMachineBlockComponent({
  block,
  isDragging,
  isGripSelected,
  wrapperRef,
  insertAfter,
  remove,
  focusPrev,
  focusNext,
  startDrag,
  selectGrip,
}: BlockComponentProps) {
  const _beatBlock = block as BeatMachineBlockType;

  // --- State (all component-local, no global atoms) ---
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [tracks, setTracks] = useState<Track[]>([
    { name: "Kick", steps: Array(16).fill(false) },
    { name: "Snare", steps: Array(16).fill(false) },
    { name: "Hi-Hat", steps: Array(16).fill(false) },
    { name: "Clap", steps: Array(16).fill(false) },
  ]);
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [beatName, setBeatName] = useState("");

  // --- Tone.js refs ---
  const synthsRef = useRef<
    (Tone.MembraneSynth | Tone.NoiseSynth | Tone.MetalSynth)[]
  >([]);
  const sequenceRef = useRef<Tone.Sequence | null>(null);

  {
    /* IMPLEMENT: Initialize synths in a useEffect or lazy ref.
      Create these 4 synths and store in synthsRef.current:
      - Kick: new Tone.MembraneSynth().toDestination()
      - Snare: new Tone.NoiseSynth({ noise: { type: "white" }, envelope: { attack: 0.001, decay: 0.15, sustain: 0 } }).toDestination()
      - Hi-Hat: new Tone.MetalSynth({ frequency: 200, envelope: { attack: 0.001, decay: 0.1, release: 0.01 }, volume: -10 }).toDestination()
      - Clap: new Tone.NoiseSynth({ noise: { type: "pink" }, envelope: { attack: 0.005, decay: 0.2, sustain: 0 } }).toDestination()
  */
  }

  {
    /* IMPLEMENT: Cleanup effect — dispose synths, stop transport, cancel sequences on unmount:
      useEffect(() => {
        return () => {
          sequenceRef.current?.dispose();
          synthsRef.current.forEach(s => s.dispose());
          Tone.getTransport().stop();
          Tone.getTransport().cancel();
        };
      }, []);
  */
  }

  {
    /* IMPLEMENT: Playback functions:
      - togglePlay(): call Tone.start() first (required for browser audio context),
        create a Tone.Sequence that iterates 16 steps, triggers the appropriate synth
        for each active step, and calls setCurrentStep(). Store in sequenceRef.
        Use Tone.getTransport().bpm.value = bpm.
      - toggleStep(trackIndex, stepIndex): toggle a step in the tracks state
  */
  }

  {
    /* IMPLEMENT: Queue functions:
      - saveToQueue(): save current { name, bpm, tracks } to queue state
      - loadFromQueue(entry): restore bpm and tracks from a queue entry
  */
  }

  // --- Keyboard handler (FIXED — do not modify) ---
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    const isInput =
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable;

    if ((e.key === "Backspace" || e.key === "Delete") && !isInput) {
      e.preventDefault();
      selectGrip();
      focusPrev();
      remove();
    }
    if (e.key === "ArrowUp" && !isInput) {
      e.preventDefault();
      focusPrev();
    }
    if (e.key === "ArrowDown" && !isInput) {
      e.preventDefault();
      focusNext();
    }
  };

  // --- Render (FIXED wrapper structure — do not modify) ---
  return (
    <div
      ref={wrapperRef}
      className={cn("pt-2 pb-2", isDragging && "opacity-40")}
    >
      <div className="group/block relative">
        <DragHandle
          className="-left-[52px]"
          onAdd={() =>
            insertAfter({ id: createBlockId(), type: "paragraph", text: "" })
          }
          onGripPointerDown={(e) => startDrag(e)}
          onGripClick={() => selectGrip()}
        />
        <div
          data-block-id={block.id}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className={cn(
            "border-primary-translucent bg-elevated rounded-lg border p-4 outline-hidden",
            isGripSelected && "ring-2 ring-blue-500",
          )}
        >
          {/* IMPLEMENT: Header row
              - Play/Stop button (use bg-blue-accent-primary for active, bg-secondary for inactive)
              - BPM display with +/- buttons (text-primary for value, text-secondary for label)
              - Beat title or "Beat Machine" label (text-primary font-semibold)
          */}

          {/* IMPLEMENT: Sequencer grid
              Use CSS grid: style={{ gridTemplateColumns: `80px repeat(16, 1fr)` }}
              - Left column: track names (text-secondary text-sm)
              - 16 step buttons per track:
                - Active step: bg-blue-accent-primary (or use track-specific colors)
                - Inactive step: bg-secondary hover:bg-tertiary
                - Current playback step: ring-2 ring-blue-accent-primary
                - All steps: rounded-xs, aspect-square or fixed size
          */}

          {/* IMPLEMENT: Queue section
              - "Contribute to Queue" heading (text-primary text-sm font-medium)
              - Input for beat name (border-primary-translucent bg-primary rounded-sm)
              - Save button (bg-blue-accent-primary text-white rounded-sm)
              - Queue list: map over queue entries, each showing:
                - Entry name + BPM (text-primary, text-secondary)
                - "Load" button (text-blue-accent-primary hover:underline)
          */}
        </div>
      </div>
    </div>
  );
}

// --- Block definition (FIXED — do not modify) ---

export const beatMachineBlockDef: BlockDefinition = {
  type: "beat-machine",
  slashCommand: {
    id: "beat-machine",
    label: "Beat Machine",
    description: "Add a step sequencer with drum sounds.",
    icon: (
      <CmdIcon>
        <span className="text-lg">🥁</span>
      </CmdIcon>
    ),
    keywords: ["beat", "drum", "music", "sequencer", "audio"],
    section: "inline",
  },
  Component: BeatMachineBlockComponent,
};
```

### Key implementation rules

- **All state is component-local** (`useState`/`useRef`). Never use Jotai atoms for beat state — each block instance must be independent.
- **Always call `Tone.start()` inside a click handler** before starting playback. Browsers require a user gesture for audio context.
- **Dispose synths and stop transport on unmount** to prevent audio leaks.
- **Use Notion semantic colors only**: `bg-secondary`, `bg-tertiary`, `bg-elevated`, `text-primary`, `text-secondary`, `text-tertiary`, `border-primary-translucent`, `bg-blue-accent-primary`. No custom dark theme, no raw hex colors.

## Step 4: Register in blocks/index.ts

In `src/components/notion-kit/editor/blocks/index.ts`:

1. Add the import:

```tsx
import { beatMachineBlockDef } from "./BeatMachineBlock";
```

2. Add to the `blockDefs` array:

```tsx
export const blockDefs: BlockDefinition[] = [
  // ... existing defs
  beatMachineBlockDef,
];
```

## Verification

After implementation, verify all of these:

1. Type `/beat` in the editor — "Beat Machine" appears in the slash menu
2. Selecting it inserts the beat machine block + an empty paragraph below
3. Play button starts audio (you hear drum sounds), stop button stops it
4. BPM controls change the tempo
5. Step cells toggle on/off when clicked
6. Current step highlights during playback
7. Saving a beat adds it to the queue list below
8. Loading from queue restores the pattern and BPM
9. Arrow keys navigate away from the block to adjacent blocks
10. Backspace on the block (when no input is focused) deletes it
11. Drag handle appears on hover and can reorder the block
12. No console errors
