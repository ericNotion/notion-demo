"use client";

import { Button } from "@/components/playground-kit";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowUTurnUpLeftIcon } from "@nds-icons/arrowUTurnUpLeft/default.icon";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { cursorClickIcon } from "@nds-icons/cursorClick/default.icon";
import { eraserLineDashedIcon } from "@nds-icons/eraserLineDashed/default.icon";
import { paintBrushIcon } from "@nds-icons/paintBrush/default.icon";
import { rectanglePlusIcon } from "@nds-icons/rectanglePlus/default.icon";
import { textCursorIBeamIcon } from "@nds-icons/textCursorIBeam/default.icon";
import { useEffect, useRef, useState } from "react";

type Tool = "select" | "pen" | "rectangle" | "circle" | "text" | "eraser";

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  id: string;
  type: "pen" | "rectangle" | "circle" | "text";
  points: Point[];
  color: string;
  strokeWidth: number;
  text?: string;
}

interface WhiteboardProps {
  data: {
    strokes: Stroke[];
  };
  onChange: (data: { strokes: Stroke[] }) => void;
}

const COLORS = [
  { name: "Black", value: "#1f2937" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Red", value: "#ef4444" },
  { name: "Green", value: "#10b981" },
  { name: "Purple", value: "#8b5cf6" },
  { name: "Orange", value: "#f59e0b" },
];

export function Whiteboard({ data, onChange }: WhiteboardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useState<Tool>("pen");
  const [color, setColor] = useState("#1f2937");
  const [strokeWidth] = useState(2);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStroke, setCurrentStroke] = useState<Point[]>([]);
  const [history, setHistory] = useState<Stroke[][]>([data.strokes]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const strokes = history[historyIndex] || [];

  useEffect(() => {
    redrawCanvas();
  }, [strokes]);

  function redrawCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    strokes.forEach((stroke) => {
      if (stroke.points.length === 0) return;

      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.strokeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (stroke.type === "pen") {
        ctx.beginPath();
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        stroke.points.forEach((point) => {
          ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
      } else if (stroke.type === "rectangle" && stroke.points.length >= 2) {
        const start = stroke.points[0];
        const end = stroke.points[stroke.points.length - 1];
        ctx.strokeRect(
          start.x,
          start.y,
          end.x - start.x,
          end.y - start.y,
        );
      } else if (stroke.type === "circle" && stroke.points.length >= 2) {
        const start = stroke.points[0];
        const end = stroke.points[stroke.points.length - 1];
        const radius = Math.sqrt(
          Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2),
        );
        ctx.beginPath();
        ctx.arc(start.x, start.y, radius, 0, 2 * Math.PI);
        ctx.stroke();
      } else if (stroke.type === "text" && stroke.text) {
        ctx.fillStyle = stroke.color;
        ctx.font = "16px sans-serif";
        ctx.fillText(stroke.text, stroke.points[0].x, stroke.points[0].y);
      }
    });

    if (currentStroke.length > 0 && isDrawing) {
      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (tool === "pen") {
        ctx.beginPath();
        ctx.moveTo(currentStroke[0].x, currentStroke[0].y);
        currentStroke.forEach((point) => {
          ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
      } else if (tool === "rectangle" && currentStroke.length >= 2) {
        const start = currentStroke[0];
        const end = currentStroke[currentStroke.length - 1];
        ctx.strokeRect(
          start.x,
          start.y,
          end.x - start.x,
          end.y - start.y,
        );
      } else if (tool === "circle" && currentStroke.length >= 2) {
        const start = currentStroke[0];
        const end = currentStroke[currentStroke.length - 1];
        const radius = Math.sqrt(
          Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2),
        );
        ctx.beginPath();
        ctx.arc(start.x, start.y, radius, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }
  }

  function getMousePos(e: React.MouseEvent<HTMLCanvasElement>): Point {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  function handleMouseDown(e: React.MouseEvent<HTMLCanvasElement>) {
    if (tool === "select") return;

    const pos = getMousePos(e);
    setIsDrawing(true);
    setCurrentStroke([pos]);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!isDrawing) return;

    const pos = getMousePos(e);

    if (tool === "pen") {
      setCurrentStroke((prev) => [...prev, pos]);
    } else if (tool === "rectangle" || tool === "circle") {
      setCurrentStroke((prev) => [prev[0], pos]);
    }

    redrawCanvas();
  }

  function handleMouseUp() {
    if (!isDrawing || currentStroke.length === 0) {
      setIsDrawing(false);
      return;
    }

    if (tool === "eraser") {
      setIsDrawing(false);
      setCurrentStroke([]);
      return;
    }

    const newStroke: Stroke = {
      id: `stroke_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      type: tool === "select" ? "pen" : (tool as "pen" | "rectangle" | "circle" | "text"),
      points: currentStroke,
      color,
      strokeWidth,
    };

    const newStrokes = [...strokes, newStroke];
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newStrokes);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    onChange({ strokes: newStrokes });

    setIsDrawing(false);
    setCurrentStroke([]);
  }

  function handleUndo() {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      onChange({ strokes: history[newIndex] });
    }
  }

  function handleClear() {
    const newHistory = [...history, []];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    onChange({ strokes: [] });
  }

  return (
    <div className="border-primary rounded-md border">
      <div className="bg-secondary border-primary flex items-center gap-1 border-b px-2 py-1.5">
        <div className="flex items-center gap-1">
          <Button
            variant={tool === "select" ? "tertiary" : "ghost"}
            size="sm"
            onClick={() => setTool("select")}
          >
            <Icon icon={cursorClickIcon} size={16} />
          </Button>
          <Button
            variant={tool === "pen" ? "tertiary" : "ghost"}
            size="sm"
            onClick={() => setTool("pen")}
          >
            <Icon icon={paintBrushIcon} size={16} />
          </Button>
          <Button
            variant={tool === "rectangle" ? "tertiary" : "ghost"}
            size="sm"
            onClick={() => setTool("rectangle")}
          >
            <Icon icon={rectanglePlusIcon} size={16} />
          </Button>
          <Button
            variant={tool === "circle" ? "tertiary" : "ghost"}
            size="sm"
            onClick={() => setTool("circle")}
          >
            <Icon icon={circleIcon} size={16} />
          </Button>
          <Button
            variant={tool === "text" ? "tertiary" : "ghost"}
            size="sm"
            onClick={() => setTool("text")}
          >
            <Icon icon={textCursorIBeamIcon} size={16} />
          </Button>
          <Button
            variant={tool === "eraser" ? "tertiary" : "ghost"}
            size="sm"
            onClick={() => setTool("eraser")}
          >
            <Icon icon={eraserLineDashedIcon} size={16} />
          </Button>
        </div>

        <div className="border-primary mx-2 h-5 w-px border-r" />

        <div className="flex items-center gap-1">
          {COLORS.map((c) => (
            <button
              key={c.value}
              type="button"
              className={cn(
                "size-6 rounded transition-all",
                color === c.value
                  ? "ring-primary ring-2 ring-offset-2"
                  : "hover:ring-primary hover:ring-1 hover:ring-offset-1",
              )}
              style= backgroundColor: c.value 
              onClick={() => setColor(c.value)}
              aria-label={c.name}
            />
          ))}
        </div>

        <div className="border-primary mx-2 h-5 w-px border-r" />

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleUndo}
            disabled={historyIndex === 0}
          >
            <Icon icon={arrowUTurnUpLeftIcon} size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={handleClear}>
            <span className="text-body-sm">Clear</span>
          </Button>
        </div>
      </div>

      <div className="bg-primary p-4">
        <canvas
          ref={canvasRef}
          width={680}
          height={400}
          className="bg-primary border-primary rounded cursor-crosshair border"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>
    </div>
  );
}
