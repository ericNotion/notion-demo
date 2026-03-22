"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Generate stars
    const generateStars = () => {
      const stars: Star[] = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 8000);

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }

      return stars;
    };

    starsRef.current = generateStars();

    // Animation loop
    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars with twinkling effect
      starsRef.current.forEach((star) => {
        const twinkle = Math.sin(frame * star.twinkleSpeed + star.twinklePhase);
        const currentOpacity = star.opacity + twinkle * 0.3;

        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, currentOpacity)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow to some stars
        if (star.size > 1.5 && currentOpacity > 0.6) {
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.size * 3,
          );
          gradient.addColorStop(0, `rgba(200, 200, 255, ${currentOpacity * 0.3})`);
          gradient.addColorStop(1, "rgba(200, 200, 255, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Occasionally add a shooting star
      if (frame % 400 === 0 && Math.random() > 0.7) {
        drawShootingStar(ctx, canvas.width, canvas.height);
      }

      frame++;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: "transparent" }}
    />
  );
}

function drawShootingStar(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) {
  const startX = Math.random() * width * 0.5;
  const startY = Math.random() * height * 0.5;
  const length = Math.random() * 100 + 50;
  const angle = Math.random() * Math.PI * 0.25 + Math.PI * 0.25; // 45-90 degrees

  const gradient = ctx.createLinearGradient(
    startX,
    startY,
    startX + Math.cos(angle) * length,
    startY + Math.sin(angle) * length,
  );

  gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(0.1, "rgba(200, 200, 255, 0.8)");
  gradient.addColorStop(0.3, "rgba(255, 200, 255, 0.6)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.strokeStyle = gradient;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(
    startX + Math.cos(angle) * length,
    startY + Math.sin(angle) * length,
  );
  ctx.stroke();
}
