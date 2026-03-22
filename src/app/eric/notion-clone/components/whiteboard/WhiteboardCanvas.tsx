"use client";

import { cn } from "@/utils/cn";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  currentToolAtom,
  elementsAtom,
  isPanningAtom,
  selectedElementIdsAtom,
  strokeColorAtom,
  strokeWidthAtom,
  viewportAtom,
} from "./atoms";
import type {
  ArrowElement,
  CircleElement,
  DrawElement,
  Point,
  RectangleElement,
  TextElement,
  WhiteboardElement,
} from "./types";

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function drawElement(
  ctx: CanvasRenderingContext2D,
  element: WhiteboardElement,
  isSelected: boolean,
) {
  ctx.save();

  switch (element.type) {
    case "draw": {
      const { points, color, strokeWidth } = element as DrawElement;
      if (points.length < 2) break;

      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
      break;
    }

    case "rectangle": {
      const { x, y, width, height, color, strokeWidth, fill } =
        element as RectangleElement;

      if (fill) {
        ctx.fillStyle = fill;
        ctx.fillRect(x, y, width, height);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.strokeRect(x, y, width, height);
      break;
    }

    case "circle": {
      const { x, y, radius, color, strokeWidth, fill } =
        element as CircleElement;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);

      if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.stroke();
      break;
    }

    case "arrow": {
      const { startX, startY, endX, endY, color, strokeWidth } =
        element as ArrowElement;

      const headLength = 15;
      const angle = Math.atan2(endY - startY, endX - startX);

      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = "round";

      // Draw line
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Draw arrowhead
      ctx.beginPath();
      ctx.moveTo(endX, endY);
      ctx.lineTo(
        endX - headLength * Math.cos(angle - Math.PI / 6),
        endY - headLength * Math.sin(angle - Math.PI / 6),
      );
      ctx.lineTo(
        endX - headLength * Math.cos(angle + Math.PI / 6),
        endY - headLength * Math.sin(angle + Math.PI / 6),
      );
      ctx.closePath();
      ctx.fill();
      break;
    }

    case "text": {
      const { x, y, text, color, fontSize } = element as TextElement;

      ctx.font = `${fontSize}px Inter, sans-serif`;
      ctx.fillStyle = color;
      ctx.textBaseline = "top";
      ctx.fillText(text, x, y);
      break;
    }
  }

  // Draw selection indicator
  if (isSelected) {
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);

    const bounds = getElementBounds(element);
    const padding = 4;
    ctx.strokeRect(
      bounds.x - padding,
      bounds.y - padding,
      bounds.width + padding * 2,
      bounds.height + padding * 2,
    );
  }

  ctx.restore();
}

function getElementBounds(element: WhiteboardElement) {
  switch (element.type) {
    case "draw": {
      const { points } = element as DrawElement;
      if (points.length === 0)
        return { x: 0, y: 0, width: 0, height: 0 };

      const xs = points.map((p) => p.x);
      const ys = points.map((p) => p.y);
      const minX = Math.min(...xs);
      const maxX = Math.max(...xs);
      const minY = Math.min(...ys);
      const maxY = Math.max(...ys);

      return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
      };
    }

    case "rectangle": {
      const { x, y, width, height } = element as RectangleElement;
      return { x, y, width, height };
    }

    case "circle": {
      const { x, y, radius } = element as CircleElement;
      return {
        x: x - radius,
        y: y - radius,
        width: radius * 2,
        height: radius * 2,
      };
    }

    case "arrow": {
      const { startX, startY, endX, endY } = element as ArrowElement;
      const minX = Math.min(startX, endX);
      const maxX = Math.max(startX, endX);
      const minY = Math.min(startY, endY);
      const maxY = Math.max(startY, endY);

      return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
      };
    }

    case "text": {
      const { x, y, text, fontSize } = element as TextElement;
      // Approximate text width
      const width = text.length * fontSize * 0.6;
      return { x, y, width, height: fontSize };
    }
  }
}

function isPointInElement(
  point: Point,
  element: WhiteboardElement,
): boolean {
  const bounds = getElementBounds(element);
  return (
    point.x >= bounds.x &&
    point.x <= bounds.x + bounds.width &&
    point.y >= bounds.y &&
    point.y <= bounds.y + bounds.height
  );
}

export function WhiteboardCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTool = useAtomValue(currentToolAtom);
  const [elements, setElements] = useAtom(elementsAtom);
  const [selectedIds, setSelectedIds] = useAtom(selectedElementIdsAtom);
  const [viewport, setViewport] = useAtom(viewportAtom);
  const [isPanning, setIsPanning] = useAtom(isPanningAtom);
  const strokeColor = useAtomValue(strokeColorAtom);
  const strokeWidth = useAtomValue(strokeWidthAtom);

  const [isDrawing, setIsDrawing] = useState(false);
  const [currentElement, setCurrentElement] = useState<WhiteboardElement | null>(null);
  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [textInput, setTextInput] = useState<{ x: number; y: number } | null>(null);

  const getCanvasPoint = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>): Point => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };

      const rect = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left - viewport.offsetX) / viewport.scale,
        y: (e.clientY - rect.top - viewport.offsetY) / viewport.scale,
      };
    },
    [viewport],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const point = getCanvasPoint(e);

      if (e.button === 1 || (e.button === 0 && e.metaKey)) {
        // Middle click or Cmd+click for panning
        setIsPanning(true);
        setStartPoint(point);
        return;
      }

      if (currentTool === "select") {
        // Check if clicking on an element
        let foundElement = false;
        for (let i = elements.length - 1; i >= 0; i--) {
          if (isPointInElement(point, elements[i])) {
            const elementId = elements[i].id;
            if (e.shiftKey) {
              setSelectedIds((prev) => {
                const next = new Set(prev);
                if (next.has(elementId)) {
                  next.delete(elementId);
                } else {
                  next.add(elementId);
                }
                return next;
              });
            } else {
              setSelectedIds(new Set([elementId]));
            }
            foundElement = true;
            break;
          }
        }

        if (!foundElement && !e.shiftKey) {
          setSelectedIds(new Set());
        }
        return;
      }

      if (currentTool === "text") {
        setTextInput(point);
        return;
      }

      if (currentTool === "eraser") {
        // Find and delete element at point
        for (let i = elements.length - 1; i >= 0; i--) {
          if (isPointInElement(point, elements[i])) {
            setElements((prev) => prev.filter((_, idx) => idx !== i));
            break;
          }
        }
        return;
      }

      setIsDrawing(true);
      setStartPoint(point);

      let newElement: WhiteboardElement;

      switch (currentTool) {
        case "draw":
          newElement = {
            id: generateId(),
            type: "draw",
            points: [point],
            color: strokeColor,
            strokeWidth,
          };
          break;

        case "rectangle":
          newElement = {
            id: generateId(),
            type: "rectangle",
            x: point.x,
            y: point.y,
            width: 0,
            height: 0,
            color: strokeColor,
            strokeWidth,
          };
          break;

        case "circle":
          newElement = {
            id: generateId(),
            type: "circle",
            x: point.x,
            y: point.y,
            radius: 0,
            color: strokeColor,
            strokeWidth,
          };
          break;

        case "arrow":
          newElement = {
            id: generateId(),
            type: "arrow",
            startX: point.x,
            startY: point.y,
            endX: point.x,
            endY: point.y,
            color: strokeColor,
            strokeWidth,
          };
          break;

        default:
          return;
      }

      setCurrentElement(newElement);
    },
    [
      currentTool,
      elements,
      getCanvasPoint,
      setElements,
      setIsPanning,
      setSelectedIds,
      strokeColor,
      strokeWidth,
    ],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const point = getCanvasPoint(e);

      if (isPanning && startPoint) {
        const dx = (point.x - startPoint.x) * viewport.scale;
        const dy = (point.y - startPoint.y) * viewport.scale;

        setViewport((prev) => ({
          ...prev,
          offsetX: prev.offsetX + dx,
          offsetY: prev.offsetY + dy,
        }));
        setStartPoint(point);
        return;
      }

      if (!isDrawing || !currentElement || !startPoint) return;

      let updatedElement: WhiteboardElement = currentElement;

      switch (currentTool) {
        case "draw":
          updatedElement = {
            ...currentElement,
            points: [...(currentElement as DrawElement).points, point],
          } as DrawElement;
          break;

        case "rectangle": {
          const width = point.x - startPoint.x;
          const height = point.y - startPoint.y;
          updatedElement = {
            ...currentElement,
            width,
            height,
          } as RectangleElement;
          break;
        }

        case "circle": {
          const dx = point.x - startPoint.x;
          const dy = point.y - startPoint.y;
          const radius = Math.sqrt(dx * dx + dy * dy);
          updatedElement = {
            ...currentElement,
            radius,
          } as CircleElement;
          break;
        }

        case "arrow":
          updatedElement = {
            ...currentElement,
            endX: point.x,
            endY: point.y,
          } as ArrowElement;
          break;
      }

      setCurrentElement(updatedElement);
    },
    [
      currentTool,
      currentElement,
      isDrawing,
      isPanning,
      startPoint,
      getCanvasPoint,
      setViewport,
      viewport.scale,
    ],
  );

  const handleMouseUp = useCallback(() => {
    if (isPanning) {
      setIsPanning(false);
      setStartPoint(null);
      return;
    }

    if (isDrawing && currentElement) {
      setElements((prev) => [...prev, currentElement]);
      setIsDrawing(false);
      setCurrentElement(null);
      setStartPoint(null);
    }
  }, [currentElement, isDrawing, isPanning, setElements, setIsPanning]);

  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLCanvasElement>) => {
      e.preventDefault();

      if (e.metaKey || e.ctrlKey) {
        // Zoom
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        const newScale = Math.max(0.1, Math.min(5, viewport.scale * delta));

        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        setViewport((prev) => ({
          scale: newScale,
          offsetX: mouseX - (mouseX - prev.offsetX) * (newScale / prev.scale),
          offsetY: mouseY - (mouseY - prev.offsetY) * (newScale / prev.scale),
        }));
      } else {
        // Pan
        setViewport((prev) => ({
          ...prev,
          offsetX: prev.offsetX - e.deltaX,
          offsetY: prev.offsetY - e.deltaY,
        }));
      }
    },
    [setViewport, viewport.scale],
  );

  const handleTextSubmit = useCallback(
    (text: string) => {
      if (!textInput || !text.trim()) {
        setTextInput(null);
        return;
      }

      const newElement: TextElement = {
        id: generateId(),
        type: "text",
        x: textInput.x,
        y: textInput.y,
        text: text.trim(),
        color: strokeColor,
        fontSize: 16,
      };

      setElements((prev) => [...prev, newElement]);
      setTextInput(null);
    },
    [strokeColor, textInput, setElements],
  );

  // Render canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Apply viewport transform
    ctx.save();
    ctx.translate(viewport.offsetX, viewport.offsetY);
    ctx.scale(viewport.scale, viewport.scale);

    // Draw grid
    ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";
    ctx.lineWidth = 1 / viewport.scale;

    const gridSize = 20;
    const startX = Math.floor(-viewport.offsetX / viewport.scale / gridSize) * gridSize;
    const startY = Math.floor(-viewport.offsetY / viewport.scale / gridSize) * gridSize;
    const endX = startX + rect.width / viewport.scale + gridSize;
    const endY = startY + rect.height / viewport.scale + gridSize;

    ctx.beginPath();
    for (let x = startX; x < endX; x += gridSize) {
      ctx.moveTo(x, startY);
      ctx.lineTo(x, endY);
    }
    for (let y = startY; y < endY; y += gridSize) {
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
    }
    ctx.stroke();

    // Draw elements
    elements.forEach((element) => {
      drawElement(ctx, element, selectedIds.has(element.id));
    });

    // Draw current element being created
    if (currentElement) {
      drawElement(ctx, currentElement, false);
    }

    ctx.restore();
  }, [elements, currentElement, selectedIds, viewport]);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        className={cn(
          "h-full w-full",
          isPanning && "cursor-grabbing",
          currentTool === "draw" && "cursor-crosshair",
          currentTool === "select" && "cursor-default",
        )}
      />

      {textInput && (
        <div
          className="absolute"
          style={{
            left: `${textInput.x * viewport.scale + viewport.offsetX}px`,
            top: `${textInput.y * viewport.scale + viewport.offsetY}px`,
          }}
        >
          <input
            type="text"
            autoFocus
            className="border-primary bg-primary text-primary rounded-xs border px-2 py-1 text-sm outline-hidden"
            onBlur={(e) => handleTextSubmit(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleTextSubmit((e.target as HTMLInputElement).value);
              } else if (e.key === "Escape") {
                setTextInput(null);
              }
            }}
          />
        </div>
      )}
    </div>
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Delete selected elements
      if ((e.key === "Delete" || e.key === "Backspace") && selectedIds.size > 0) {
        e.preventDefault();
        setElements((prev) => prev.filter((el) => !selectedIds.has(el.id)));
        setSelectedIds(new Set());
      }

      // Select all
      if ((e.metaKey || e.ctrlKey) && e.key === "a") {
        e.preventDefault();
        setSelectedIds(new Set(elements.map((el) => el.id)));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIds, elements, setElements, setSelectedIds]);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        className={cn(
          "h-full w-full",
          isPanning && "cursor-grabbing",
          currentTool === "draw" && "cursor-crosshair",
          currentTool === "select" && "cursor-default",
        )}
      />

      {textInput && (
        <div
          className="absolute"
          style={{
            left: `${textInput.x * viewport.scale + viewport.offsetX}px`,
            top: `${textInput.y * viewport.scale + viewport.offsetY}px`,
          }}
        >
          <input
            type="text"
            autoFocus
            className="border-primary bg-primary text-primary rounded-xs border px-2 py-1 text-sm outline-hidden"
            onBlur={(e) => handleTextSubmit(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleTextSubmit((e.target as HTMLInputElement).value);
              } else if (e.key === "Escape") {
                setTextInput(null);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
