"use client";

import { useAtom } from "jotai";
import { Icon } from "@nds-icons";
import { arrowExpandHorizontalIcon } from "@nds-icons/arrowExpandHorizontal/default.icon";
import { Button } from "@/components/playground-kit/Button";
import { cn } from "@/utils/cn";
import { elementsAtom, isInlineViewAtom } from "../atoms";
import type { WhiteboardElement } from "../types";

interface InlinePreviewProps {
  onEnterFullMode: () => void;
}

export function InlinePreview({ onEnterFullMode }: InlinePreviewProps) {
  const [elements] = useAtom(elementsAtom);
  const [isInlineView] = useAtom(isInlineViewAtom);

  if (!isInlineView) return null;

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

  const width = maxX - minX || 800;
  const height = maxY - minY || 600;
  const scale = Math.min(400 / width, 300 / height);

  return (
    <div
      className={cn(
        "relative w-full h-[300px] rounded-lg overflow-hidden",
        "border border-border-primary bg-bg-secondary",
        "cursor-pointer group",
      )}
      onClick={onEnterFullMode}
    >
      {/* Preview */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width={width * scale}
          height={height * scale}
          className="pointer-events-none"
        >
          {elements.map((el) => (
            <PreviewElement
              key={el.id}
              element={el}
              scale={scale}
              offsetX={minX}
              offsetY={minY}
            />
          ))}
        </svg>
      </div>

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-black/0 group-hover:bg-black/10",
          "transition-colors duration-150",
          "flex items-center justify-center",
        )}
      >
        <Button
          variant="primary"
          size="md"
          className={cn(
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-150",
            "gap-2",
          )}
        >
          <Icon icon={arrowExpandHorizontalIcon} />
          <span>Open whiteboard</span>
        </Button>
      </div>

      {/* Label */}
      <div className="absolute top-3 left-3 px-2 py-1 rounded bg-bg-elevated/90 border border-border-primary">
        <span className="text-caption text-text-secondary">Whiteboard</span>
      </div>
    </div>
  );
}

function PreviewElement({
  element,
  scale,
  offsetX,
  offsetY,
}: {
  element: WhiteboardElement;
  scale: number;
  offsetX: number;
  offsetY: number;
}) {
  const x = (element.x - offsetX) * scale;
  const y = (element.y - offsetY) * scale;
  const w = element.width * scale;
  const h = element.height * scale;
  const color = element.color || "#e3f2fd";

  if (element.type === "shape") {
    if (element.shapeType === "circle") {
      const cx = x + w / 2;
      const cy = y + h / 2;
      const r = Math.min(w, h) / 2;
      return (
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill={color}
          stroke="#1976d2"
          strokeWidth="1"
        />
      );
    } else if (element.shapeType === "diamond") {
      const cx = x + w / 2;
      const cy = y + h / 2;
      const points = `${cx},${y} ${x + w},${cy} ${cx},${y + h} ${x},${cy}`;
      return (
        <polygon
          points={points}
          fill={color}
          stroke="#1976d2"
          strokeWidth="1"
        />
      );
    }
    return (
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={color}
        stroke="#1976d2"
        strokeWidth="1"
        rx="2"
      />
    );
  } else if (element.type === "sticky") {
    return (
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={color}
        stroke="#f9a825"
        strokeWidth="1"
        rx="2"
      />
    );
  } else if (element.type === "connector" && element.connectorPoints) {
    const pathData = element.connectorPoints
      .map((p, i) => {
        const px = (p.x - offsetX) * scale;
        const py = (p.y - offsetY) * scale;
        return `${i === 0 ? "M" : "L"} ${px} ${py}`;
      })
      .join(" ");
    return <path d={pathData} stroke="#666" strokeWidth="1" fill="none" />;
  }

  return null;
}
