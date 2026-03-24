"use client";

import { useEffect, useRef } from "react";

interface BeatVisualizerProps {
  isPlaying: boolean;
  currentStep: number;
  activeColors: string[];
}

export function BeatVisualizer({
  isPlaying,
  currentStep,
  activeColors,
}: BeatVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bars = 32;
    const barWidth = canvas.width / bars;

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bars; i++) {
        let height;
        if (isPlaying && activeColors.length > 0) {
          const phase = (currentStep / 16) * Math.PI * 2;
          const wave = Math.sin(phase + (i / bars) * Math.PI * 4);
          const baseHeight = 0.2 + wave * 0.1;
          const activeBoost = activeColors.length * 0.15;
          height = (baseHeight + activeBoost) * canvas.height;
        } else {
          height = canvas.height * 0.15;
        }

        const x = i * barWidth;
        const y = canvas.height - height;

        const gradient = ctx.createLinearGradient(x, y, x, canvas.height);
        if (activeColors.length > 0) {
          gradient.addColorStop(0, activeColors[0] || "#ff006e");
          gradient.addColorStop(
            1,
            activeColors[activeColors.length - 1] || "#8338ec",
          );
        } else {
          gradient.addColorStop(0, "#333333");
          gradient.addColorStop(1, "#1a1a1a");
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth - 2, height);

        if (isPlaying && activeColors.length > 0) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = activeColors[i % activeColors.length] || "#ff006e";
          ctx.fillRect(x, y, barWidth - 2, height);
          ctx.shadowBlur = 0;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, currentStep, activeColors]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={120}
      className="w-full rounded-lg"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
