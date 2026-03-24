"use client";

import { useRef, useEffect, useCallback } from "react";
import { useAtomValue } from "jotai";
import { isPlayingAtom, currentStepAtom } from "./atoms";
import { getAnalyserNode, TRACK_COLORS } from "./audio-engine";

export function DrumVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const isPlaying = useAtomValue(isPlayingAtom);
  const currentStep = useAtomValue(currentStepAtom);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const analyser = getAnalyserNode();
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, "rgba(10, 0, 20, 0.95)");
    bgGrad.addColorStop(1, "rgba(5, 0, 15, 0.95)");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw bars
    const barWidth = (width / bufferLength) * 2.5;
    const colors = Object.values(TRACK_COLORS);
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * height * 0.85;
      const colorIndex = Math.floor((i / bufferLength) * colors.length);
      const color = colors[colorIndex % colors.length];

      ctx.shadowBlur = 15;
      ctx.shadowColor = color;
      ctx.fillStyle = color;
      ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);

      ctx.shadowBlur = 0;
      ctx.fillStyle = color + "20";
      ctx.fillRect(x, height, barWidth - 1, barHeight * 0.3);

      x += barWidth;
    }

    // Step indicator at bottom
    if (currentStep >= 0) {
      const stepWidth = width / 16;
      ctx.fillStyle = "#ff006e";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#ff006e";
      ctx.fillRect(currentStep * stepWidth, height - 3, stepWidth - 2, 3);
      ctx.shadowBlur = 0;
    }

    animationRef.current = requestAnimationFrame(draw);
  }, [currentStep]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(draw);
    } else {
      cancelAnimationFrame(animationRef.current);
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.offsetHeight);
          bgGrad.addColorStop(0, "rgba(10, 0, 20, 0.95)");
          bgGrad.addColorStop(1, "rgba(5, 0, 15, 0.95)");
          ctx.fillStyle = bgGrad;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
    }
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPlaying, draw]);

  return (
    <canvas
      ref={canvasRef}
      className="h-[140px] w-full rounded-lg"
      style= background: "rgba(10, 0, 20, 0.95)" 
    />
  );
}
