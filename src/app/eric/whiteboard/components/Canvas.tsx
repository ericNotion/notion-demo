"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";

import {
  elementsAtom,
  isDraggingAtom,
  selectedElementsAtom,
  viewportAtom,
} from "../atoms";
import type { WhiteboardElement } from "../types";

interface CanvasProps {
  canvasRef: React.RefObject<HTMLDivElement>;
}

export function Canvas({ canvasRef }: CanvasProps) {
  const [elements] = useAtom(elementsAtom);
  const [viewport, setViewport] = useAtom(viewportAtom);
  const [isDragging, setIsDragging] = useAtom(isDraggingAtom);
  const [selectedElements] = useAtom(selectedElementsAtom);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
    null,
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 1 && !e.metaKey && !e.ctrlKey) return; // Only middle button or cmd/ctrl + click for panning
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart) return;

    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;

    setViewport((prev) => ({
      ...prev,
      x: prev.x + dx,
      y: prev.y + dy,
    }));

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!e.metaKey && !e.ctrlKey) return;
    e.preventDefault();

    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.1, Math.min(3, viewport.zoom * delta));

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const worldX = (mouseX - viewport.x) / viewport.zoom;
    const worldY = (mouseY - viewport.y) / viewport.zoom;

    setViewport({
      x: mouseX - worldX * newZoom,
      y: mouseY - worldY * newZoom,
      zoom: newZoom,
    });
  };

  return (
    <div
      ref={canvasRef}
      className="absolute inset-0 overflow-hidden bg-bg-primary"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      style={{ cursor: isDragging ? "grabbing" : "default" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: `${20 * viewport.zoom}px ${20 * viewport.zoom}px`,
          backgroundPosition: `${viewport.x}px ${viewport.y}px`,
        }}
      />

      {/* Elements */}
      <AnimatePresence>
        {elements.map((element) => {
          const isSelected = selectedElements.includes(element.id);
          return (
            <CanvasElement
              key={element.id}
              element={element}
              isSelected={isSelected}
            />
          );
        })}
      </AnimatePresence>

      {/* Center indicator */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: viewport.x,
          top: viewport.y,
          width: 10,
          height: 10,
          marginLeft: -5,
          marginTop: -5,
        }}
      >
        <div className="h-full w-full rounded-full border-2 border-blue-500/30" />
      </div>
    </div>
  );
}

function CanvasElement({
  element,
  isSelected,
}: {
  element: WhiteboardElement;
  isSelected: boolean;
}) {
  if (element.type === "shape") {
    return (
      <ShapeElement element={element as any} isSelected={isSelected} />
    );
  } else if (element.type === "sticky") {
    return (
      <StickyElement element={element as any} isSelected={isSelected} />
    );
  } else if (element.type === "connector") {
    return (
      <ConnectorElement element={element as any} isSelected={isSelected} />
    );
  }
  return null;
}

function ShapeElement({
  element,
  isSelected,
}: {
  element: WhiteboardElement & { type: "shape" };
  isSelected: boolean;
}) {
  const [viewport] = useAtom(viewportAtom);
  const color = element.color || "#e3f2fd";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={cn(
        "absolute flex items-center justify-center rounded border-2",
        isSelected ? "border-blue-500 ring-2 ring-blue-200" : "border-blue-400",
      )}
      style={{
        left: viewport.x + element.x * viewport.zoom,
        top: viewport.y + element.y * viewport.zoom,
        width: element.width * viewport.zoom,
        height: element.height * viewport.zoom,
        backgroundColor: color,
      }}
    >
      {element.text && (
        <span
          className="text-body select-none px-2 text-center text-gray-700"
          style={{
            fontSize: `${14 * viewport.zoom}px`,
          }}
        >
          {element.text}
        </span>
      )}
    </motion.div>
  );
}

function StickyElement({
  element,
  isSelected,
}: {
  element: WhiteboardElement & { type: "sticky" };
  isSelected: boolean;
}) {
  const [viewport] = useAtom(viewportAtom);
  const color = element.color || "#fff9c4";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={cn(
        "absolute rounded border-2 p-2 shadow-sm",
        isSelected
          ? "border-yellow-500 ring-2 ring-yellow-200"
          : "border-yellow-400",
      )}
      style={{
        left: viewport.x + element.x * viewport.zoom,
        top: viewport.y + element.y * viewport.zoom,
        width: element.width * viewport.zoom,
        height: element.height * viewport.zoom,
        backgroundColor: color,
      }}
    >
      {element.text && (
        <span
          className="text-body block select-none break-words text-gray-800"
          style={{
            fontSize: `${14 * viewport.zoom}px`,
          }}
        >
          {element.text}
        </span>
      )}
    </motion.div>
  );
}

function ConnectorElement({
  element,
  isSelected,
}: {
  element: WhiteboardElement & { type: "connector" };
  isSelected: boolean;
}) {
  const [viewport] = useAtom(viewportAtom);

  if (!element.connectorPoints || element.connectorPoints.length === 0) {
    return null;
  }

  const pathData = element.connectorPoints
    .map((p, i) => {
      const x = viewport.x + p.x * viewport.zoom;
      const y = viewport.y + p.y * viewport.zoom;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <svg className="pointer-events-none absolute inset-0">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        d={pathData}
        stroke={isSelected ? "#3b82f6" : "#666"}
        strokeWidth={isSelected ? 3 : 2}
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill={isSelected ? "#3b82f6" : "#666"} />
        </marker>
      </defs>
    </svg>
  );
}
