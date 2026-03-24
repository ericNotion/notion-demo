"use client";

import { useAtom } from "jotai";
import { patternNameAtom } from "./atoms";
import { DrumVisualizer } from "./DrumVisualizer";
import { StepSequencer } from "./StepSequencer";
import { TransportControls } from "./TransportControls";
import { BeatQueue } from "./BeatQueue";

export function BeatMachine() {
  const [patternName, setPatternName] = useAtom(patternNameAtom);

  return (
    <div
      className="min-h-screen w-full"
      style=
        background:
          "linear-gradient(180deg, #0a0014 0%, #0d0021 50%, #0a0014 100%)",
        color: "white",
      
    >
      <div className="mx-auto max-w-4xl px-6 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1
            className="text-4xl font-black tracking-tight"
            style=
              background:
                "linear-gradient(135deg, #ff006e, #8338ec, #3a86ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            
          >
            \ud83c\udfa7 BEAT MACHINE
          </h1>
          <p
            className="mt-2 font-mono text-sm"
            style= color: "rgba(255,255,255,0.35)" 
          >
            Boiler Room in Notion \u00b7 Make beats, drop them in the queue
          </p>
        </div>

        {/* Pattern name */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style= color: "rgba(255,255,255,0.3)" 
          >
            Now playing:
          </span>
          <input
            type="text"
            value={patternName}
            onChange={(e) => setPatternName(e.target.value)}
            className="border-b border-white/10 bg-transparent px-2 py-0.5 text-center text-sm font-semibold text-white outline-none focus:border-white/30"
          />
        </div>

        {/* Visualizer */}
        <div className="mb-6">
          <DrumVisualizer />
        </div>

        {/* Transport */}
        <div className="mb-6 flex justify-center">
          <TransportControls />
        </div>

        {/* Step Sequencer */}
        <div
          className="mb-8 rounded-xl p-5"
          style=
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(10px)",
          
        >
          <StepSequencer />
        </div>

        {/* Beat Queue */}
        <BeatQueue />
      </div>
    </div>
  );
}
