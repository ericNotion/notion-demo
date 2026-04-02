"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import { createBlockId } from "../atoms";
import { CmdIcon, DragHandle } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

interface Point {
  x: number;
  y: number;
}

interface DrawPath {
  points: Point[];
  color: string;
  width: number;
}

interface StickyNote {
  id: string;
  x: number;
  y: number;
  text: string;
  color: string;
}

type Tool = "pen" | "eraser" | "sticky";

const DRAWING_COLORS = [
  { hex: "#000000", label: "Black" },
  { hex: "#6b7280", label: "Gray" },
  { hex: "#ef4444", label: "Red" },
  { hex: "#f97316", label: "Orange" },
  { hex: "#eab308", label: "Yellow" },
  { hex: "#22c55e", label: "Green" },
  { hex: "#06b6d4", label: "Cyan" },
  { hex: "#3b82f6", label: "Blue" },
  { hex: "#a855f7", label: "Purple" },
  { hex: "#ec4899", label: "Pink" },
];

const STICKY_COLORS = [
  { name: "yellow", bg: "bg-yellow-200 dark:bg-yellow-900/50", border: "border-yellow-300 dark:border-yellow-800" },
  { name: "blue", bg: "bg-blue-200 dark:bg-blue-900/50", border: "border-blue-300 dark:border-blue-800" },
  { name: "green", bg: "bg-green-200 dark:bg-green-900/50", border: "border-green-300 dark:border-green-800" },
  { name: "pink", bg: "bg-pink-200 dark:bg-pink-900/50", border: "border-pink-300 dark:border-pink-800" },
  { name: "purple", bg: "bg-purple-200 dark:bg-purple-900/50", border: "border-purple-300 dark:border-purple-800" },
];

function getCanvasCursor(activeTool: Tool): string {
  if (activeTool === "pen") return "crosshair";
  if (activeTool === "eraser") return "cell";
  return "pointer";
}

function WhiteboardBlockComponent({
  block,
  isGripSelected,
  isDragging,
  wrapperRef,
  insertAfter,
  remove,
  focusPrev,
  focusNext,
  startDrag,
  selectGrip,
}: BlockComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tool, setTool] = useState<Tool>("pen");
  const [currentColor, setCurrentColor] = useState("#000000");
  const [isDrawing, setIsDrawing] = useState(false);
  const [paths, setPaths] = useState<DrawPath[]>([]);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>([]);
  const [draggingSticky, setDraggingSticky] = useState<string | null>(null);
  const [editingSticky, setEditingSticky] = useState<string | null>(null);
  const dragOffset = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    paths.forEach((path) => {
      if (path.points.length < 2) return;
      ctx.strokeStyle = path.color;
      ctx.lineWidth = path.width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(path.points[0].x, path.points[0].y);
      for (let i = 1; i < path.points.length; i++) {
        ctx.lineTo(path.points[i].x, path.points[i].y);
      }
      ctx.stroke();
    });
  }, [paths]);

  const getCanvasPoint = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleCanvasPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (tool === "sticky") {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newSticky: StickyNote = {
        id: createBlockId("sticky"),
        x: Math.max(0, Math.min(x - 60, rect.width - 120)),
        y: Math.max(0, Math.min(y - 60, rect.height - 120)),
        text: "",
        color: STICKY_COLORS[0].name,
      };
      setStickyNotes((prev) => [...prev, newSticky]);
      setEditingSticky(newSticky.id);
      return;
    }
    setIsDrawing(true);
    const point = getCanvasPoint(e);
    setCurrentPath([point]);
  };

  const handleCanvasPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || tool === "sticky") return;
    const point = getCanvasPoint(e);
    setCurrentPath((prev) => [...prev, point]);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || currentPath.length === 0) return;
    ctx.strokeStyle = tool === "eraser" ? "#ffffff" : currentColor;
    ctx.lineWidth = tool === "eraser" ? 20 : 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const lastPoint = currentPath[currentPath.length - 1];
    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  };

  const handleCanvasPointerUp = () => {
    if (!isDrawing || tool === "sticky") return;
    setIsDrawing(false);
    if (currentPath.length > 1) {
      setPaths((prev) => [
        ...prev,
        {
          points: currentPath,
          color: tool === "eraser" ? "#ffffff" : currentColor,
          width: tool === "eraser" ? 20 : 2,
        },
      ]);
    }
    setCurrentPath([]);
  };

  const handleStickyPointerDown = (e: React.PointerEvent, stickyId: string) => {
    if (editingSticky === stickyId) return;
    e.stopPropagation();
    const sticky = stickyNotes.find((s) => s.id === stickyId);
    if (!sticky) return;
    setDraggingSticky(stickyId);
    dragOffset.current = { x: e.clientX - sticky.x, y: e.clientY - sticky.y };
  };

  const handleContainerPointerMove = (e: React.PointerEvent) => {
    if (!draggingSticky || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragOffset.current.x;
    const y = e.clientY - rect.top - dragOffset.current.y;
    setStickyNotes((prev) =>
      prev.map((s) =>
        s.id === draggingSticky
          ? { ...s, x: Math.max(0, Math.min(x, rect.width - 120)), y: Math.max(0, Math.min(y, rect.height - 120)) }
          : s
      )
    );
  };

  const handleContainerPointerUp = () => {
    setDraggingSticky(null);
  };

  const handleStickyDoubleClick = (stickyId: string) => {
    setEditingSticky(stickyId);
  };

  const handleStickyTextChange = (stickyId: string, text: string) => {
    setStickyNotes((prev) =>
      prev.map((s) => (s.id === stickyId ? { ...s, text } : s))
    );
  };

  const handleClearAll = () => {
    setPaths([]);
    setStickyNotes([]);
    setCurrentPath([]);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      ctx.fillStyle = "transparent";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const getStickyColorClasses = (colorName: string) => {
    const found = STICKY_COLORS.find((c) => c.name === colorName) || STICKY_COLORS[0];
    return { bg: found.bg, border: found.border };
  };

  const canvasCursorStyle = { cursor: getCanvasCursor(tool) };

  return (
    <div ref={wrapperRef} className={cn("pt-[8px] pb-[8px]", isDragging && "opacity-40")}>
      <div className="group/block relative">
        <DragHandle
          className="top-1/2 -left-[52px] -translate-y-1/2"
          onAdd={() => insertAfter({ id: createBlockId(), type: "paragraph", text: "" })}
          onGripPointerDown={(e) => startDrag(e)}
          onGripClick={() => selectGrip()}
        />
        <div
          data-block-id={block.id}
          className={cn("rounded-xs", isGripSelected && "bg-blue-50 dark:bg-blue-950/30")}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Backspace" || e.key === "Delete") {
              e.preventDefault();
              focusPrev();
              remove();
            }
            if (e.key === "Enter") {
              e.preventDefault();
              insertAfter({ id: createBlockId(), type: "paragraph", text: "" });
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              focusPrev();
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              focusNext();
            }
          }}
        >
          {/* Toolbar */}
          <div className="mb-2 flex items-center gap-1 bg-elevated shadow-sm-outline rounded-md p-1 w-fit">
            <button
              type="button"
              onClick={() => setTool("pen")}
              className={cn(
                "p-1.5 rounded-sm hover:bg-tertiary transition-colors",
                tool === "pen" && "bg-tertiary"
              )}
              title="Pen tool"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-secondary">
                <path d="M11.5 2L14 4.5L5 13.5L2 14L2.5 11L11.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setTool("eraser")}
              className={cn(
                "p-1.5 rounded-sm hover:bg-tertiary transition-colors",
                tool === "eraser" && "bg-tertiary"
              )}
              title="Eraser"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-secondary">
                <path d="M8 12L2 6L6 2L14 10L10 14H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setTool("sticky")}
              className={cn(
                "p-1.5 rounded-sm hover:bg-tertiary transition-colors",
                tool === "sticky" && "bg-tertiary"
              )}
              title="Add sticky note"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-secondary">
                <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 14V10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="w-px h-4 bg-primary mx-1" />
            <div className="flex items-center gap-0.5">
              {DRAWING_COLORS.map((colorObj) => {
                const bgStyle = { backgroundColor: colorObj.hex };
                return (
                  <button
                    key={colorObj.hex}
                    type="button"
                    onClick={() => setCurrentColor(colorObj.hex)}
                    className={cn(
                      "w-5 h-5 rounded-full border-2 transition-all",
                      currentColor === colorObj.hex ? "border-primary scale-110" : "border-transparent"
                    )}
                    style={bgStyle}
                    title={colorObj.label}
                  />
                );
              })}
            </div>
            <div className="w-px h-4 bg-primary mx-1" />
            <button
              type="button"
              onClick={handleClearAll}
              className="p-1.5 rounded-sm hover:bg-tertiary transition-colors"
              title="Clear all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-secondary">
                <path d="M3 4H13M5 4V3C5 2.44772 5.44772 2 6 2H10C10.5523 2 11 2.44772 11 3V4M6 7V11M10 7V11M4 4L5 13C5 13.5523 5.44772 14 6 14H10C10.5523 14 11 13.5523 11 13L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Canvas Container */}
          <div
            ref={containerRef}
            className="relative w-full h-[400px] bg-secondary border border-primary rounded-md overflow-hidden"
            onPointerMove={handleContainerPointerMove}
            onPointerUp={handleContainerPointerUp}
            onPointerLeave={handleContainerPointerUp}
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              onPointerDown={handleCanvasPointerDown}
              onPointerMove={handleCanvasPointerMove}
              onPointerUp={handleCanvasPointerUp}
              onPointerLeave={handleCanvasPointerUp}
              style={canvasCursorStyle}
            />
            {stickyNotes.map((sticky) => {
              const colorClasses = getStickyColorClasses(sticky.color);
              const posStyle = { left: sticky.x, top: sticky.y };
              return (
                <div
                  key={sticky.id}
                  className={cn(
                    "absolute w-[120px] h-[120px] p-2 rounded-md shadow-sm-outline cursor-move",
                    colorClasses.bg,
                    "border",
                    colorClasses.border
                  )}
                  style={posStyle}
                  onPointerDown={(e) => handleStickyPointerDown(e, sticky.id)}
                  onDoubleClick={() => handleStickyDoubleClick(sticky.id)}
                >
                  {editingSticky === sticky.id ? (
                    <textarea
                      autoFocus
                      value={sticky.text}
                      onChange={(e) => handleStickyTextChange(sticky.id, e.target.value)}
                      onBlur={() => setEditingSticky(null)}
                      className="w-full h-full bg-transparent border-none outline-none resize-none text-body text-xs font-medium"
                      placeholder="Type here..."
                    />
                  ) : (
                    <div className="w-full h-full text-body text-xs font-medium overflow-hidden whitespace-pre-wrap break-words">
                      {sticky.text || "Double-click to edit"}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const whiteboardBlockDef: BlockDefinition = {
  type: "whiteboard",
  slashCommand: {
    id: "whiteboard",
    label: "Whiteboard",
    description: "Freehand drawing & sticky notes.",
    icon: (
      <CmdIcon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-secondary">
          <path
            d="M14 3L17 6L7 16L3 17L4 13L14 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CmdIcon>
    ),
    keywords: ["whiteboard", "draw", "canvas", "sketch", "sticky", "tldraw"],
    section: "basic",
  },
  Component: WhiteboardBlockComponent,
};
