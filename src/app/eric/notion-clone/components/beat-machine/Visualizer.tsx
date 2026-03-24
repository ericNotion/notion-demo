"use client";

import { useEffect, useRef } from "react";

type VisualizerProps = {
  isPlaying: boolean;
  currentStep: number;
};

export function Visualizer({ isPlaying, currentStep }: VisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    let animationId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      if (isPlaying) {
        const barCount = 32;
        const barWidth = width / barCount;

        for (let i = 0; i < barCount; i++) {
          const progress = (currentStep + i / 4) % 16;
          const amplitude = Math.sin(progress * Math.PI * 0.5) * 0.8;
          const randomVariation = Math.random() * 0.2;
          const barHeight =
            (amplitude + randomVariation) * height * 0.7 + height * 0.1;

          const hue = 280 + (i / barCount) * 40;
          const saturation = 70 + Math.sin(progress) * 30;
          const lightness = 50 + Math.sin(progress * 2) * 20;

          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`;

          const x = i * barWidth;
          const y = height - barHeight;

          ctx.fillRect(x, y, barWidth - 2, barHeight);

          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness + 20}%, 0.3)`;
          ctx.fillRect(x, y, barWidth - 2, 2);
        }

        const glowSize = 60;
        const gradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          0,
          width / 2,
          height / 2,
          glowSize,
        );
        gradient.addColorStop(0, "rgba(168, 85, 247, 0.2)");
        gradient.addColorStop(1, "rgba(168, 85, 247, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(width / 2 - glowSize, height / 2 - glowSize, glowSize * 2, glowSize * 2);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying, currentStep]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={200}
      className="w-full h-[200px] rounded-lg"
      style={{ imageRendering: "crisp-edges" }}
    />
  );
}
