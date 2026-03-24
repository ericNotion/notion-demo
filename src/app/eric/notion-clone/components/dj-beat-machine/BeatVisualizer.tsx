"use client";

import { useEffect, useRef } from "react";
import type { DrumType } from "./types";

interface BeatVisualizerProps {
  steps: Record<DrumType, boolean[]>;
  currentStep: number;
  isPlaying: boolean;
}

export function BeatVisualizer({
  steps,
  currentStep,
  isPlaying,
}: BeatVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const animate = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      if (!isPlaying) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const barWidth = width / 16;
      const drums: DrumType[] = ["kick", "snare", "hihat", "openhat", "clap", "perc"];

      drums.forEach((drum, drumIndex) => {
        const isActive = steps[drum][currentStep];
        if (!isActive) return;

        const colors: Record<DrumType, string> = {
          kick: "#8b5cf6",
          snare: "#3b82f6",
          hihat: "#10b981",
          openhat: "#eab308",
          clap: "#ec4899",
          perc: "#f97316",
        };

        const color = colors[drum];
        const barHeight = (height / drums.length) * (1 - drumIndex * 0.1);
        const y = height - barHeight;

        // Draw bar at current step
        ctx.fillStyle = color;
        ctx.fillRect(currentStep * barWidth, y, barWidth - 2, barHeight);

        // Add glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = color;
        ctx.fillRect(currentStep * barWidth, y, barWidth - 2, barHeight);
        ctx.shadowBlur = 0;
      });

      // Draw step indicator
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fillRect(currentStep * barWidth, 0, barWidth - 2, height);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [steps, currentStep, isPlaying]);

  return (
    <div className="relative w-full h-32 bg-accent-primary rounded-md overflow-hidden">
      <canvas
        ref={canvasRef}
        width={800}
        height={128}
        className="w-full h-full"
      />
    </div>
  );
}
