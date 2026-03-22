"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowExpandDiagonalIcon } from "@nds-icons/arrowExpandDiagonal/default.icon";
import { arrowStraightRightIcon } from "@nds-icons/arrowStraightRight/default.icon";
import { arrowUTurnUpLeftIcon } from "@nds-icons/arrowUTurnUpLeft/default.icon";
import { arrowUTurnUpRightIcon } from "@nds-icons/arrowUTurnUpRight/default.icon";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { cursorClickIcon } from "@nds-icons/cursorClick/default.icon";
import { eraserLineDashedIcon } from "@nds-icons/eraserLineDashed/default.icon";
import { pencilIcon } from "@nds-icons/pencil/default.icon";
import { rectangleOnRectangleIcon } from "@nds-icons/rectangleOnRectangle/default.icon";
import { textCursorIBeamIcon } from "@nds-icons/textCursorIBeam/default.icon";
import { useCallback, useEffect, useRef, useState } from "react";
import type { WhiteboardShape } from "@/components/notion-kit/editor/atoms";

type Tool =
  | "select"
  | "pen"
  | "rectangle"
  | "ellipse"
  | "arrow"
  | "text"
  | "eraser";

interface WhiteboardProps {
  shapes: WhiteboardShape[];
  onChange: (shapes: WhiteboardShape[]) => void;
}

export function Whiteboard({ shapes, onChange }: WhiteboardProps) {
  const [tool, setTool] = useState<Tool>("select");
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewOffset, setViewOffset] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>("");
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [history, setHistory] = useState<WhiteboardShape[][]>([shapes]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isSpaceDown, setIsSpaceDown] = useState(false);

  const svgRef = useRef<SVGSVGElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const panStartRef = useRef<{ x: number; y: number } | null>(null);

  const addToHistory = useCallback((newShapes: WhiteboardShape[]) => {
    setHistory((prev) => [...prev.slice(0, historyIndex + 1), newShapes]);
    setHistoryIndex((prev) => prev + 1);
  }, [historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1);
      onChange(history[historyIndex - 1]);
    }
  }, [historyIndex, history, onChange]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1);
      onChange(history[historyIndex + 1]);
    }
  }, [historyIndex, history, onChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.code === "Space") {
        setIsSpaceDown(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === " " || e.code === "Space") {
        setIsSpaceDown(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [undo, redo]);

  const screenToSVG = useCallback(
    (screenX: number, screenY: number) => {
      if (!svgRef.current) return { x: 0, y: 0 };
      const svg = svgRef.current;
      const rect = svg.getBoundingClientRect();
      return {
        x: (screenX - rect.left - viewOffset.x) / zoom,
        y: (screenY - rect.top - viewOffset.y) / zoom,
      };
    },
    [viewOffset, zoom],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      const point = screenToSVG(e.clientX, e.clientY);

      if (e.buttons === 4 || (e.buttons === 1 && isSpaceDown)) {
        setIsPanning(true);
        panStartRef.current = { x: e.clientX, y: e.clientY };
        return;
      }

      if (tool === "select") {
        const clickedShape = shapes.find((shape) => {
          if (shape.type === "rectangle" || shape.type === "ellipse") {
            return (
              point.x >= shape.x &&
              point.x <= shape.x + (shape.width || 0) &&
              point.y >= shape.y &&
              point.y <= shape.y + (shape.height || 0)
            );
          }
          return false;
        });
        setSelectedShapeId(clickedShape?.id || null);
      } else if (tool === "pen") {
        setIsDrawing(true);
        setCurrentPath(`M ${point.x} ${point.y}`);
      } else if (
        tool === "rectangle" ||
        tool === "ellipse" ||
        tool === "arrow"
      ) {
        setIsDrawing(true);
        setStartPoint(point);
      } else if (tool === "text") {
        const id = `shape_${Date.now()}`;
        const newShape: WhiteboardShape = {
          id,
          type: "text",
          x: point.x,
          y: point.y,
          text: "Text",
          color: strokeColor,
        };
        const newShapes = [...shapes, newShape];
        onChange(newShapes);
        addToHistory(newShapes);
      } else if (tool === "eraser") {
        const shapeToRemove = shapes.find((shape) => {
          if (shape.type === "rectangle" || shape.type === "ellipse") {
            return (
              point.x >= shape.x &&
              point.x <= shape.x + (shape.width || 0) &&
              point.y >= shape.y &&
              point.y <= shape.y + (shape.height || 0)
            );
          }
          return false;
        });
        if (shapeToRemove) {
          const newShapes = shapes.filter((s) => s.id !== shapeToRemove.id);
          onChange(newShapes);
          addToHistory(newShapes);
        }
      }
    },
    [tool, shapes, onChange, screenToSVG, addToHistory, isSpaceDown, strokeColor],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (isPanning && panStartRef.current) {
        const dx = e.clientX - panStartRef.current.x;
        const dy = e.clientY - panStartRef.current.y;
        setViewOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
        panStartRef.current = { x: e.clientX, y: e.clientY };
        return;
      }

      if (!isDrawing) return;

      const point = screenToSVG(e.clientX, e.clientY);

      if (tool === "pen") {
        setCurrentPath((prev) => `${prev} L ${point.x} ${point.y}`);
      }
    },
    [isPanning, isDrawing, tool, screenToSVG],
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (isPanning) {
        setIsPanning(false);
        panStartRef.current = null;
        return;
      }

      if (!isDrawing) return;

      const point = screenToSVG(e.clientX, e.clientY);

      if (tool === "pen" && currentPath) {
        const id = `shape_${Date.now()}`;
        const newShape: WhiteboardShape = {
          id,
          type: "path",
          x: 0,
          y: 0,
          path: currentPath,
          color: strokeColor,
          strokeWidth: 2,
        };
        const newShapes = [...shapes, newShape];
        onChange(newShapes);
        addToHistory(newShapes);
        setCurrentPath("");
      } else if (
        (tool === "rectangle" || tool === "ellipse" || tool === "arrow") &&
        startPoint
      ) {
        const id = `shape_${Date.now()}`;
        const width = Math.abs(point.x - startPoint.x);
        const height = Math.abs(point.y - startPoint.y);
        const x = Math.min(point.x, startPoint.x);
        const y = Math.min(point.y, startPoint.y);

        const newShape: WhiteboardShape = {
          id,
          type: tool === "arrow" ? "arrow" : tool,
          x,
          y,
          width,
          height,
          color: strokeColor,
          strokeWidth: 2,
        };
        const newShapes = [...shapes, newShape];
        onChange(newShapes);
        addToHistory(newShapes);
        setStartPoint(null);
      }

      setIsDrawing(false);
    },
    [
      isPanning,
      isDrawing,
      tool,
      currentPath,
      startPoint,
      shapes,
      onChange,
      screenToSVG,
      addToHistory,
      strokeColor,
    ],
  );

  const handleWheel = useCallback((e: React.WheelEvent<SVGSVGElement>) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      setZoom((prev) => Math.max(0.1, Math.min(5, prev * delta)));
    }
  }, []);

  const tools: { id: Tool; icon: typeof cursorClickIcon; label: string }[] = [
    { id: "select", icon: cursorClickIcon, label: "Select" },
    { id: "pen", icon: pencilIcon, label: "Pen" },
    { id: "rectangle", icon: rectangleOnRectangleIcon, label: "Rectangle" },
    { id: "ellipse", icon: circleIcon, label: "Ellipse" },
    { id: "arrow", icon: arrowStraightRightIcon, label: "Arrow" },
    { id: "text", icon: textCursorIBeamIcon, label: "Text" },
    { id: "eraser", icon: eraserLineDashedIcon, label: "Eraser" },
  ];

  const colors = [
    { value: "#000000", label: "Black" },
    { value: "#6B7280", label: "Gray" },
    { value: "#EF4444", label: "Red" },
    { value: "#F97316", label: "Orange" },
    { value: "#EAB308", label: "Yellow" },
    { value: "#22C55E", label: "Green" },
    { value: "#3B82F6", label: "Blue" },
    { value: "#8B5CF6", label: "Purple" },
  ];

  return (
    <div
      ref={canvasContainerRef}
      className={cn(
        "bg-primary border-primary relative overflow-hidden rounded-md border",
        isFullscreen ? "fixed inset-0 z-50" : "h-[400px]",
      )}
    >
      <div className="bg-elevated shadow-sm-outline absolute left-4 top-4 z-10 flex gap-1 rounded-lg p-1">
        {tools.map((t) => (
          <Button
            key={t.id}
            variant={tool === t.id ? "primary" : "ghost"}
            size="sm"
            onClick={() => setTool(t.id)}
            className={cn("size-8 p-0")}
            title={t.label}
          >
            <Icon
              icon={t.icon}
              size={16}
              color={tool === t.id ? "inverse" : "secondary"}
            />
          </Button>
        ))}
        <div className="border-primary mx-1 w-px" />
        {colors.map((color) => (
          <button
            key={color.value}
            type="button"
            onClick={() => setStrokeColor(color.value)}
            className={cn(
              "size-5 rounded-full border-2 transition-all",
              strokeColor === color.value
                ? "ring-2 ring-offset-1 ring-blue-500"
                : "border-gray-300",
            )}
            style={{ backgroundColor: color.value }}
            title={color.label}
          />
        ))}
        <div className="border-primary mx-1 w-px" />
        <Button
          variant="ghost"
          size="sm"
          onClick={undo}
          disabled={historyIndex === 0}
          className="size-8 p-0"
          title="Undo (Cmd+Z)"
        >
          <Icon icon={arrowUTurnUpLeftIcon} size={16} color="secondary" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={redo}
          disabled={historyIndex === history.length - 1}
          className="size-8 p-0"
          title="Redo (Cmd+Shift+Z)"
        >
          <Icon icon={arrowUTurnUpRightIcon} size={16} color="secondary" />
        </Button>
      </div>

      <div className="absolute right-4 top-4 z-10">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="size-8 p-0"
          title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        >
          <Icon icon={arrowExpandDiagonalIcon} size={16} color="secondary" />
        </Button>
      </div>

      <svg
        ref={svgRef}
        className="size-full cursor-crosshair"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: `${20 * zoom}px ${20 * zoom}px`,
          backgroundPosition: `${viewOffset.x}px ${viewOffset.y}px`,
        }}
      >
        <g transform={`translate(${viewOffset.x}, ${viewOffset.y}) scale(${zoom})`}>
          {shapes.map((shape) => {
            if (shape.type === "path") {
              return (
                <path
                  key={shape.id}
                  d={shape.path}
                  stroke={shape.color || "#000000"}
                  strokeWidth={shape.strokeWidth || 2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              );
            } else if (shape.type === "rectangle") {
              return (
                <rect
                  key={shape.id}
                  x={shape.x}
                  y={shape.y}
                  width={shape.width || 0}
                  height={shape.height || 0}
                  stroke={shape.color || "#000000"}
                  strokeWidth={shape.strokeWidth || 2}
                  fill="none"
                  className={cn(
                    selectedShapeId === shape.id &&
                      "stroke-blue-500 stroke-[3px]",
                  )}
                />
              );
            } else if (shape.type === "ellipse") {
              return (
                <ellipse
                  key={shape.id}
                  cx={shape.x + (shape.width || 0) / 2}
                  cy={shape.y + (shape.height || 0) / 2}
                  rx={(shape.width || 0) / 2}
                  ry={(shape.height || 0) / 2}
                  stroke={shape.color || "#000000"}
                  strokeWidth={shape.strokeWidth || 2}
                  fill="none"
                  className={cn(
                    selectedShapeId === shape.id &&
                      "stroke-blue-500 stroke-[3px]",
                  )}
                />
              );
            } else if (shape.type === "arrow") {
              return (
                <line
                  key={shape.id}
                  x1={shape.x}
                  y1={shape.y}
                  x2={shape.x + (shape.width || 0)}
                  y2={shape.y + (shape.height || 0)}
                  stroke={shape.color || "#000000"}
                  strokeWidth={shape.strokeWidth || 2}
                  markerEnd="url(#arrowhead)"
                  className={cn(
                    selectedShapeId === shape.id &&
                      "stroke-blue-500 stroke-[3px]",
                  )}
                />
              );
            } else if (shape.type === "text") {
              return (
                <text
                  key={shape.id}
                  x={shape.x}
                  y={shape.y}
                  fill={shape.color || "#000000"}
                  fontSize="16"
                  className={cn(
                    selectedShapeId === shape.id && "fill-blue-500",
                  )}
                >
                  {shape.text || "Text"}
                </text>
              );
            }
            return null;
          })}

          {isDrawing && tool === "pen" && currentPath && (
            <path
              d={currentPath}
              stroke={strokeColor}
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          {isDrawing &&
            (tool === "rectangle" || tool === "ellipse" || tool === "arrow") &&
            startPoint && (
              <>
                {tool === "rectangle" && (
                  <rect
                    x={startPoint.x}
                    y={startPoint.y}
                    width={0}
                    height={0}
                    stroke={strokeColor}
                    strokeWidth={2}
                    fill="none"
                    opacity={0.5}
                  />
                )}
                {tool === "ellipse" && (
                  <ellipse
                    cx={startPoint.x}
                    cy={startPoint.y}
                    rx={0}
                    ry={0}
                    stroke={strokeColor}
                    strokeWidth={2}
                    fill="none"
                    opacity={0.5}
                  />
                )}
                {tool === "arrow" && (
                  <line
                    x1={startPoint.x}
                    y1={startPoint.y}
                    x2={startPoint.x}
                    y2={startPoint.y}
                    stroke={strokeColor}
                    strokeWidth={2}
                    markerEnd="url(#arrowhead)"
                    opacity={0.5}
                  />
                )}
              </>
            )}
        </g>

        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#000000" />
          </marker>
        </defs>
      </svg>

      {!isFullscreen && shapes.length === 0 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-tertiary text-body-sm text-center">
            <p>Select a tool and start drawing</p>
            <p className="text-caption mt-1">
              Pan: Space + drag • Zoom: Ctrl + scroll
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
