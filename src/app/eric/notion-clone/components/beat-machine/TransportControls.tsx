"use client";

import { useAtom, useSetAtom } from "jotai";
import { useRef, useCallback, useEffect } from "react";
import {
  bpmAtom,
  isPlayingAtom,
  currentStepAtom,
  volumeAtom,
  patternAtom,
} from "./atoms";
import {
  getAudioContext,
  playSound,
  TRACKS,
  setMasterVolume,
} from "./audio-engine";

export function TransportControls() {
  const [bpm, setBpm] = useAtom(bpmAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [volume, setVolume] = useAtom(volumeAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);
  const [pattern] = useAtom(patternAtom);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stepRef = useRef(-1);
  const patternRef = useRef(pattern);

  useEffect(() => {
    patternRef.current = pattern;
  }, [pattern]);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    stepRef.current = -1;
    setCurrentStep(-1);
    setIsPlaying(false);
  }, [setCurrentStep, setIsPlaying]);

  const start = useCallback(() => {
    const ctx = getAudioContext();
    if (ctx.state === "suspended") ctx.resume();

    setIsPlaying(true);
    stepRef.current = -1;

    const tick = () => {
      stepRef.current = (stepRef.current + 1) % 16;
      const step = stepRef.current;
      setCurrentStep(step);

      const p = patternRef.current;
      for (const track of TRACKS) {
        if (p[track][step]) {
          playSound[track]();
        }
      }
    };

    tick();
    const ms = (60 / bpm / 4) * 1000;
    intervalRef.current = setInterval(tick, ms);
  }, [bpm, setCurrentStep, setIsPlaying]);

  useEffect(() => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const ms = (60 / bpm / 4) * 1000;
      const tick = () => {
        stepRef.current = (stepRef.current + 1) % 16;
        const step = stepRef.current;
        setCurrentStep(step);
        const p = patternRef.current;
        for (const track of TRACKS) {
          if (p[track][step]) playSound[track]();
        }
      };
      intervalRef.current = setInterval(tick, ms);
    }
  }, [bpm, isPlaying, setCurrentStep]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleVolumeChange = (val: number) => {
    setVolume(val);
    setMasterVolume(val);
  };

  return (
    <div className="flex flex-wrap items-center gap-6">
      {/* Play/Stop */}
      <button
        onClick={isPlaying ? stop : start}
        className="flex h-12 w-12 items-center justify-center rounded-full transition-all"
        style=
          background: isPlaying
            ? "linear-gradient(135deg, #ff006e, #ff4d94)"
            : "linear-gradient(135deg, #06d6a0, #00b894)",
          boxShadow: isPlaying
            ? "0 0 20px rgba(255,0,110,0.5)"
            : "0 0 20px rgba(6,214,160,0.5)",
        
        aria-label={isPlaying ? "Stop" : "Play"}
      >
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
            <rect x="3" y="3" width="4" height="12" rx="1" />
            <rect x="11" y="3" width="4" height="12" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
            <polygon points="4,2 16,9 4,16" />
          </svg>
        )}
      </button>

      {/* BPM */}
      <div className="flex flex-col items-center gap-1">
        <span
          className="font-mono text-[10px] uppercase tracking-widest"
          style= color: "rgba(255,255,255,0.4)" 
        >
          BPM
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setBpm((b) => Math.max(60, b - 1))}
            className="flex h-6 w-6 items-center justify-center rounded font-mono text-sm text-white/40 hover:bg-white/10 hover:text-white/70"
          >
            \u2212
          </button>
          <span
            className="w-10 text-center font-mono text-lg font-bold"
            style= color: "#3a86ff" 
          >
            {bpm}
          </span>
          <button
            onClick={() => setBpm((b) => Math.min(200, b + 1))}
            className="flex h-6 w-6 items-center justify-center rounded font-mono text-sm text-white/40 hover:bg-white/10 hover:text-white/70"
          >
            +
          </button>
        </div>
      </div>

      {/* Volume */}
      <div className="flex flex-col items-center gap-1">
        <span
          className="font-mono text-[10px] uppercase tracking-widest"
          style= color: "rgba(255,255,255,0.4)" 
        >
          VOL
        </span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
          className="w-20 accent-[#8338ec]"
          aria-label="Volume"
        />
      </div>
    </div>
  );
}
