"use client";

import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import { whiteboardColorAtom, whiteboardToolAtom } from "./atoms";
import type { Point, WhiteboardElement } from "./types";
import { WhiteboardToolbar } from "./WhiteboardToolbar";

interface WhiteboardProps {
  blockId: string;
  elements: WhiteboardElement[];
  width: number;
  height: number;
  onChange: (elements: WhiteboardElement[]) => void;
}

export function Whiteboard({
  blockId,
  elements,
  width,
  height,
  onChange,
}: WhiteboardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentElement, setCurrentElement] = useState<WhiteboardElement | null>(null);
  const [history, setHistory] = useState<WhiteboardElement[][]>([elements]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [selectedTool] = useAtom(whiteboardToolAtom);
  const [selectedColor] = useAtom(whiteboardColorAtom);

  const saveToHistory = useCallback((newElements: WhiteboardElement[]) => {
    setHistory((prev) => {
      const newHistory = prev.slice(0, historyIndex + 1);
      newHistory.push(newElements);
      return newHistory;
    });
    setHistoryIndex((prev) => prev + 1);
  }, [historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      onChange(history[newIndex]);
    }
  }, [historyIndex, history, onChange]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      onChange(history[newIndex]);
    }
  }, [historyIndex, history, onChange]);

  const getMousePos = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>): Point => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    },
    [],
  );

  const createElementId = () => {
    return `wb-el-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  };

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (selectedTool === "select") return;

      const pos = getMousePos(e);
      setIsDrawing(true);

      if (selectedTool === "pen") {
        setCurrentElement({
          id: createElementId(),
          type: "pen",
          points: [pos],
          color: selectedColor,
        });
      } else if (selectedTool === "rectangle") {
        setCurrentElement({
          id: createElementId(),
          type: "rectangle",
          x: pos.x,
          y: pos.y,
          width: 0,
          height: 0,
          color: selectedColor,
        });
      } else if (selectedTool === "ellipse") {
        setCurrentElement({
          id: createElementId(),
          type: "ellipse",
          x: pos.x,
          y: pos.y,
          width: 0,
          height: 0,
          color: selectedColor,
        });
      } else if (selectedTool === "text") {
        const text = prompt("Enter text:");
        if (text) {
          const newElement: WhiteboardElement = {
            id: createElementId(),
            type: "text",
            x: pos.x,
            y: pos.y,
            text,
            color: selectedColor,
          };
          const newElements = [...elements, newElement];
          onChange(newElements);
          saveToHistory(newElements);
        }
      }
    },
    [selectedTool, selectedColor, elements, getMousePos, onChange, saveToHistory],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!isDrawing || !currentElement) return;

      const pos = getMousePos(e);

      if (selectedTool === "pen" && currentElement.type === "pen") {
        setCurrentElement({
          ...currentElement,
          points: [...(currentElement.points || []), pos],
        });
      } else if (selectedTool === "rectangle" && currentElement.type === "rectangle") {
        const startX = currentElement.x || 0;
        const startY = currentElement.y || 0;
        setCurrentElement({
          ...currentElement,
          width: pos.x - startX,
          height: pos.y - startY,
        });
      } else if (selectedTool === "ellipse" && currentElement.type === "ellipse") {
        const startX = currentElement.x || 0;
        const startY = currentElement.y || 0;
        setCurrentElement({
          ...currentElement,
          width: pos.x - startX,
          height: pos.y - startY,
        });
      }
    },
    [isDrawing, currentElement, selectedTool, getMousePos],
  );

  const handleMouseUp = useCallback(() => {
    if (isDrawing && currentElement && selectedTool !== "text") {
      const newElements = [...elements, currentElement];
      onChange(newElements);
      saveToHistory(newElements);
      setCurrentElement(null);
    }
    setIsDrawing(false);
  }, [isDrawing, currentElement, elements, selectedTool, onChange, saveToHistory]);

  const drawElement = useCallback((ctx: CanvasRenderingContext2D, element: WhiteboardElement) => {
    ctx.strokeStyle = element.color;
    ctx.fillStyle = element.color;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (element.type === "pen" && element.points && element.points.length > 0) {
      ctx.beginPath();
      ctx.moveTo(element.points[0].x, element.points[0].y);
      for (let i = 1; i < element.points.length; i++) {
        ctx.lineTo(element.points[i].x, element.points[i].y);
      }
      ctx.stroke();
    } else if (element.type === "rectangle") {
      ctx.strokeRect(
        element.x || 0,
        element.y || 0,
        element.width || 0,
        element.height || 0,
      );
    } else if (element.type === "ellipse") {
      const x = element.x || 0;
      const y = element.y || 0;
      const w = element.width || 0;
      const h = element.height || 0;
      const centerX = x + w / 2;
      const centerY = y + h / 2;
      const radiusX = Math.abs(w / 2);
      const radiusY = Math.abs(h / 2);
      
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.stroke();
    } else if (element.type === "text" && element.text) {
      ctx.font = "14px sans-serif";
      ctx.fillText(element.text, element.x || 0, element.y || 0);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw all elements
    elements.forEach((element) => drawElement(ctx, element));

    // Draw current element being created
    if (currentElement) {
      drawElement(ctx, currentElement);
    }
  }, [elements, currentElement, width, height, drawElement]);

  return (
    <div className="group/whiteboard my-2">
      <div className="mb-2 opacity-0 transition-opacity group-hover/whiteboard:opacity-100 group-focus-within/whiteboard:opacity-100">
        <WhiteboardToolbar
          onUndo={undo}
          onRedo={redo}
          canUndo={historyIndex > 0}
          canRedo={historyIndex < history.length - 1}
        />
      </div>
      <div className="shadow-sm-outline overflow-hidden rounded-md border border-primary">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={cn(
            "bg-primary",
            selectedTool === "pen" && "cursor-crosshair",
            selectedTool === "rectangle" && "cursor-crosshair",
            selectedTool === "ellipse" && "cursor-crosshair",
            selectedTool === "text" && "cursor-text",
            selectedTool === "eraser" && "cursor-pointer",
            selectedTool === "select" && "cursor-default",
          )}
        />
      </div>
    </div>
  );
}
