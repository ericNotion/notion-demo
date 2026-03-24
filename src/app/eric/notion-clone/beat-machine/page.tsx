"use client";

import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { Icon } from "@nds-icons";
import { waveformIcon } from "@nds-icons/waveform/default.icon";
import { Agentation } from "@/components/playground-kit";
import { BeatGrid } from "../components/beat-machine/BeatGrid";
import { BeatVisualizer } from "../components/beat-machine/BeatVisualizer";
import { TransportControls } from "../components/beat-machine/TransportControls";
import { BeatQueue } from "../components/beat-machine/BeatQueue";
import {
  beatPatternAtom,
  bpmAtom,
  currentStepAtom,
  isPlayingAtom,
} from "../components/beat-machine/atoms";
import { audioEngine } from "../components/beat-machine/audioEngine";
import { STEPS, TRACKS } from "../components/beat-machine/types";

export default function BeatMachinePage() {
  const isPlaying = useAtomValue(isPlayingAtom);
  const currentStep = useAtomValue(currentStepAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);
  const bpm = useAtomValue(bpmAtom);
  const pattern = useAtomValue(beatPatternAtom);

  useEffect(() => {
    audioEngine.initialize();
    return () => {
      audioEngine.cleanup();
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const stepDuration = (60 / bpm / 4) * 1000;
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % STEPS;
        
        TRACKS.forEach((track) => {
          if (pattern[track.type][nextStep]) {
            audioEngine.playSound(track.type);
          }
        });
        
        return nextStep;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isPlaying, bpm, pattern, setCurrentStep]);

  return (
    <Agentation>
      <div className="min-h-screen bg-primary">
        <div className="max-w-7xl mx-auto p-8 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Icon icon={waveformIcon} className="w-8 h-8 text-primary" />
              <h1 className="text-[40px] font-bold tracking-tight text-primary">
                DJ Set Beat Machine
              </h1>
            </div>
            <p className="text-body-lg text-secondary">
              Create beats, watch them visualize, and share with the community
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-6 border border-primary shadow-md-outline">
            <h2 className="text-title-sm text-primary mb-4">Transport</h2>
            <TransportControls />
          </div>

          <div className="bg-secondary rounded-lg p-6 border border-primary shadow-md-outline">
            <h2 className="text-title-sm text-primary mb-4">Visualizer</h2>
            <BeatVisualizer />
          </div>

          <div className="bg-secondary rounded-lg p-6 border border-primary shadow-md-outline">
            <h2 className="text-title-sm text-primary mb-4">Beat Sequencer</h2>
            <BeatGrid />
          </div>

          <div className="bg-secondary rounded-lg p-6 border border-primary shadow-md-outline">
            <h2 className="text-title-sm text-primary mb-4">
              Boiler Room Queue
            </h2>
            <BeatQueue />
          </div>

          <div className="bg-tertiary rounded-lg p-4 text-caption text-secondary text-center">
            💡 Tip: Click cells to toggle beats • Adjust BPM • Save and share your beats
          </div>
        </div>
      </div>
    </Agentation>
  );
}
