"use client";

import { useAtom } from "jotai";
import { elementsAtom, viewportAtom } from "../atoms";
import { cn } from "@/utils/cn";
import type { WhiteboardElement } from "../types";

export function Minimap() {
  const [elements] = useAtom(elementsAtom);
  const [viewport, setViewport] = useAtom(viewportAtom);

  if (elements.length === 0) return null;

  // Calculate bounds of all elements
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  elements.forEach((el) => {
    minX = Math.min(minX, el.x);
    minY = Math.min(minY, el.y);
    maxX = Math.max(maxX, el.x + el.width);
    maxY = Math.max(maxY, el.y + el.height);
  });

  const contentWidth = maxX - minX;
  const contentHeight = maxY - minY;

  // Minimap dimensions
  const minimapWidth = 200;
  const minimapHeight = 150;
  const scale =
    Math.min(
      minimapWidth / (contentWidth || 1),
      minimapHeight / (contentHeight || 1),
    ) * 0.8;

  const handleMinimapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / scale + minX;
    const y = (e.clientY - rect.top) / scale + minY;

    setViewport({
      ...viewport,
      x: -x + window.innerWidth / 2,
      y: -y + window.innerHeight / 2,
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50",
        "rounded-lg border border-border-primary bg-bg-elevated",
        "shadow-md-outline overflow-hidden",
        "cursor-pointer",
      )}
      style={{ width: minimapWidth, height: minimapHeight }}
      onClick={handleMinimapClick}
    >
      <svg
        width={minimapWidth}
        height={minimapHeight}
        className="w-full h-full"
      >
        {/* Background */}
        <rect width="100%" height="100%" fill="var(--bg-secondary)" />

        {/* Elements */}
        {elements.map((el) => {
          const x = (el.x - minX) * scale;
          const y = (el.y - minY) * scale;
          const w = el.width * scale;
          const h = el.height * scale;

          return (
            <rect
              key={el.id}
              x={x}
              y={y}
              width={w}
              height={h}
              fill={el.color || "#3b82f6"}
              opacity={0.6}
              rx={2}
            />
          );
        })}

        {/* Viewport indicator */}
        <rect
          x={(-viewport.x - minX) * scale}
          y={(-viewport.y - minY) * scale}
          width={(window.innerWidth / viewport.zoom) * scale}
          height={(window.innerHeight / viewport.zoom) * scale}
          fill="none"
          stroke="var(--border-blue-primary)"
          strokeWidth={2}
          rx={4}
        />
      </svg>

      {/* Label */}
      <div className="absolute top-2 left-2 text-caption text-text-tertiary pointer-events-none">
        Map
      </div>
    </div>
  );
}
