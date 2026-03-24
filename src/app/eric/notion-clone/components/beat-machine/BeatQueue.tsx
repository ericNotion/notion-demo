"use client";

import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";
import {
  beatQueueAtom,
  patternAtom,
  patternNameAtom,
  bpmAtom,
  type QueuedBeat,
} from "./atoms";

export function BeatQueue() {
  const [queue, setQueue] = useAtom(beatQueueAtom);
  const setPattern = useSetAtom(patternAtom);
  const setPatternName = useSetAtom(patternNameAtom);
  const setBpm = useSetAtom(bpmAtom);
  const [pattern] = useAtom(patternAtom);
  const [bpm] = useAtom(bpmAtom);
  const [name] = useAtom(patternNameAtom);
  const [authorInput, setAuthorInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  const loadBeat = (beat: QueuedBeat) => {
    setPattern(beat.pattern);
    setPatternName(beat.name);
    setBpm(beat.bpm);
  };

  const submitBeat = () => {
    const newBeat: QueuedBeat = {
      id: `beat-${Date.now()}`,
      name: nameInput || name,
      author: authorInput || "Anonymous",
      pattern: {
        ...pattern,
        kick: [...pattern.kick],
        snare: [...pattern.snare],
        hihat: [...pattern.hihat],
        clap: [...pattern.clap],
      },
      bpm,
      timestamp: Date.now(),
    };
    setQueue([newBeat, ...queue]);
    setNameInput("");
    setAuthorInput("");
  };

  const formatTime = (ts: number) => {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Submit section */}
      <div
        className="rounded-lg p-4"
        style=
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
        
      >
        <h3
          className="mb-3 font-mono text-xs uppercase tracking-widest"
          style= color: "rgba(255,255,255,0.4)" 
        >
          Contribute to the queue
        </h3>
        <div className="mb-2 flex gap-2">
          <input
            type="text"
            placeholder="Beat name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="flex-1 rounded-md px-3 py-1.5 text-sm text-white placeholder-white/30 outline-none"
            style=
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            
          />
          <input
            type="text"
            placeholder="Your name"
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
            className="flex-1 rounded-md px-3 py-1.5 text-sm text-white placeholder-white/30 outline-none"
            style=
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            
          />
        </div>
        <button
          onClick={submitBeat}
          className="w-full rounded-md py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
          style=
            background: "linear-gradient(135deg, #ff006e, #8338ec)",
            boxShadow: "0 0 15px rgba(131,56,236,0.3)",
          
        >
          Drop Your Beat \ud83c\udfb5
        </button>
      </div>

      {/* Queue list */}
      <div className="flex flex-col gap-1.5">
        <h3
          className="mb-1 font-mono text-xs uppercase tracking-widest"
          style= color: "rgba(255,255,255,0.4)" 
        >
          Queue ({queue.length})
        </h3>
        {queue.map((beat) => (
          <button
            key={beat.id}
            onClick={() => loadBeat(beat)}
            className="flex items-center justify-between rounded-md px-3 py-2.5 text-left transition-all hover:scale-[1.01]"
            style=
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-white">
                {beat.name}
              </span>
              <span
                className="text-[11px]"
                style= color: "rgba(255,255,255,0.35)" 
              >
                by {beat.author} \u00b7 {beat.bpm} BPM \u00b7{" "}
                {formatTime(beat.timestamp)}
              </span>
            </div>
            <span
              className="font-mono text-xs"
              style= color: "#3a86ff" 
            >
              LOAD \u2192
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
