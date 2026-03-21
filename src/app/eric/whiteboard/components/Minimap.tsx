"use client";

import { useAtom } from "jotai";

import { cn } from "@/utils/cn";

import { elementsAtom, selectedElementsAtom, viewportAtom } from "../atoms";
import type { WhiteboardElement } from "../types";

export function Minimap() {
  const [elements] = useAtom(elementsAtom);
  const [viewport] = useAtom(viewportAtom);
  const [selectedElements] = useAtom(selectedElementsAtom);

  if (elements.length === 0) return null;

  // Calculate bounds
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

  const width = maxX - minX;
  const height = maxY - minY;
  const scale = Math.min(200 / width, 150 / height);

  const handleMinimapClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert minimap coordinates to world coordinates
    const worldX = (x / scale + minX) * viewport.zoom;
    const worldY = (y / scale + minY) * viewport.zoom;

    // Center viewport on clicked point
    // setViewport({
    //   ...viewport,
    //   x: window.innerWidth / 2 - worldX,
    //   y: window.innerHeight / 2 - worldY,
    // });
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-40",
        "rounded-lg border border-border-primary bg-bg-elevated/95 p-3",
        "shadow-md-outline",
      )}
    >
      <svg
        width={width * scale}
        height={height * scale}
        className="cursor-pointer"
        onClick={handleMinimapClick}
      >
        {/* Elements */}
        {elements.map((el) => {
          const x = (el.x - minX) * scale;
          const y = (el.y - minY) * scale;
          const w = el.width * scale;
          const h = el.height * scale;
          const color = el.color || "#e3f2fd";

          return (
            <rect
              key={el.id}
              x={x}
              y={y}
              width={w}
              height={h}
              fill={color}
              stroke="#999"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Viewport indicator */}
        <rect
          x={((-viewport.x / viewport.zoom - minX) * scale)}
          y={((-viewport.y / viewport.zoom - minY) * scale)}
          width={(window.innerWidth / viewport.zoom) * scale}
          height={(window.innerHeight / viewport.zoom) * scale}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
