"use client";

import { useAtom } from "jotai";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import {
  elementsAtom,
  viewportAtom,
  isDraggingAtom,
  selectedElementsAtom,
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

    setViewport({
      ...viewport,
      x: viewport.x + dx,
      y: viewport.y + dy,
    });

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = -e.deltaY * 0.001;
      const newZoom = Math.max(0.1, Math.min(3, viewport.zoom + delta));

      setViewport({
        ...viewport,
        zoom: newZoom,
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "0") {
        e.preventDefault();
        // This will be handled by the parent component
        window.dispatchEvent(new CustomEvent("fitToView"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      ref={canvasRef}
      className={cn(
        "relative w-full h-full overflow-hidden bg-bg-primary",
        isDragging && "cursor-grabbing",
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--border-secondary) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-secondary) 1px, transparent 1px)
          `,
          backgroundSize: `${20 * viewport.zoom}px ${20 * viewport.zoom}px`,
          backgroundPosition: `${viewport.x}px ${viewport.y}px`,
        }}
      />

      {/* Canvas content */}
      <div
        style={{
          transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
          transformOrigin: "0 0",
        }}
      >
        <AnimatePresence>
          {elements.map((element) => (
            <CanvasElement
              key={element.id}
              element={element}
              isSelected={selectedElements.includes(element.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Instructions */}
      {elements.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-text-tertiary">
            <p className="text-body-lg mb-2">
              Start with a template or blank canvas
            </p>
            <p className="text-body">
              Pan with middle mouse or Cmd/Ctrl + drag • Zoom with Cmd/Ctrl +
              scroll
            </p>
          </div>
        </div>
      )}
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
    return <ShapeElement element={element} isSelected={isSelected} />;
  } else if (element.type === "sticky") {
    return <StickyElement element={element} isSelected={isSelected} />;
  } else if (element.type === "text") {
    return <TextElement element={element} isSelected={isSelected} />;
  } else if (element.type === "connector") {
    return <ConnectorElement element={element} isSelected={isSelected} />;
  }
  return null;
}

function ShapeElement({
  element,
  isSelected,
}: {
  element: WhiteboardElement;
  isSelected: boolean;
}) {
  const color = element.color || "#e3f2fd";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn(
        "absolute flex items-center justify-center",
        "border-2 cursor-pointer",
        isSelected ? "border-blue-500" : "border-blue-400",
      )}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        backgroundColor: color,
        borderRadius: element.shapeType === "circle" ? "50%" : "4px",
        transform:
          element.shapeType === "diamond" ? "rotate(45deg)" : undefined,
      }}
    >
      <div
        className="text-body font-medium text-center px-2"
        style={{
          transform:
            element.shapeType === "diamond" ? "rotate(-45deg)" : undefined,
        }}
      >
        {element.content}
      </div>
    </motion.div>
  );
}

function StickyElement({
  element,
  isSelected,
}: {
  element: WhiteboardElement;
  isSelected: boolean;
}) {
  const color = element.color || "#fff9c4";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn(
        "absolute p-3 rounded-md border-2 cursor-pointer",
        isSelected ? "border-yellow-600" : "border-yellow-500",
      )}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        backgroundColor: color,
      }}
    >
      <div className="text-body text-text-primary whitespace-pre-wrap break-words">
        {element.content}
      </div>
    </motion.div>
  );
}

function TextElement({
  element,
  isSelected,
}: {
  element: WhiteboardElement;
  isSelected: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "absolute text-body-lg font-semibold cursor-pointer",
        isSelected && "outline outline-2 outline-blue-500",
      )}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        minHeight: element.height,
      }}
    >
      {element.content}
    </motion.div>
  );
}

function ConnectorElement({
  element,
  isSelected,
}: {
  element: WhiteboardElement;
  isSelected: boolean;
}) {
  if (!element.connectorPoints || element.connectorPoints.length < 2)
    return null;

  const points = element.connectorPoints;
  const pathData = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="absolute pointer-events-none"
      style={{
        left: Math.min(...points.map((p) => p.x)) - 10,
        top: Math.min(...points.map((p) => p.y)) - 10,
        width:
          Math.max(...points.map((p) => p.x)) -
          Math.min(...points.map((p) => p.x)) +
          20,
        height:
          Math.max(...points.map((p) => p.y)) -
          Math.min(...points.map((p) => p.y)) +
          20,
      }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#666" />
        </marker>
      </defs>
      <path
        d={pathData}
        stroke={isSelected ? "#3b82f6" : "#666"}
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
    </motion.svg>
  );
}
