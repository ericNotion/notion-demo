"use client";

import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { eraserLineDashedIcon } from "@nds-icons/eraserLineDashed/default.icon";
import { useEffect, useRef, useState } from "react";

interface Stroke {
  points: { x: number; y: number }[];
  color: string;
  width: number;
}

interface WhiteboardProps {
  strokes: Stroke[];
  onChange: (strokes: Stroke[]) => void;
}

const COLORS = [
  { name: "Black", value: "#000000" },
  { name: "Blue", value: "#0066FF" },
  { name: "Red", value: "#FF3B30" },
  { name: "Green", value: "#34C759" },
];

const WIDTHS = [
  { name: "Thin", value: 2 },
  { name: "Medium", value: 4 },
  { name: "Thick", value: 8 },
];

export function Whiteboard({ strokes, onChange }: WhiteboardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);
  const [selectedColor, setSelectedColor] = useState(COLORS[0].value);
  const [selectedWidth, setSelectedWidth] = useState(WIDTHS[1].value);

  // Redraw canvas when strokes change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all strokes
    strokes.forEach((stroke) => {
      if (stroke.points.length < 2) return;

      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);

      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }

      ctx.stroke();
    });
  }, [strokes]);

  const getCanvasPoint = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const point = getCanvasPoint(e);
    if (!point) return;

    setIsDrawing(true);
    setCurrentStroke({
      points: [point],
      color: selectedColor,
      width: selectedWidth,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !currentStroke) return;

    const point = getCanvasPoint(e);
    if (!point) return;

    const newStroke = {
      ...currentStroke,
      points: [...currentStroke.points, point],
    };

    setCurrentStroke(newStroke);

    // Draw current stroke immediately for real-time feedback
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || currentStroke.points.length < 1) return;

    ctx.strokeStyle = currentStroke.color;
    ctx.lineWidth = currentStroke.width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const lastPoint = currentStroke.points[currentStroke.points.length - 1];
    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  };

  const handleMouseUp = () => {
    if (currentStroke && currentStroke.points.length > 1) {
      onChange([...strokes, currentStroke]);
    }
    setIsDrawing(false);
    setCurrentStroke(null);
  };

  const handleClear = () => {
    onChange([]);
  };

  return (
    <div className="border-primary bg-secondary rounded-md border">
      {/* Toolbar */}
      <div className="border-primary flex items-center gap-3 border-b px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="text-body-sm text-secondary">Color:</span>
          {COLORS.map((color) => (
            <button
              key={color.value}
              type="button"
              onClick={() => setSelectedColor(color.value)}
              className={cn(
                "border-primary size-6 rounded-sm border transition-all hover:scale-110",
                selectedColor === color.value && "ring-primary ring-2 ring-offset-1",
              )}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>

        <div className="border-primary h-5 w-px bg-border-primary" />

        <div className="flex items-center gap-1.5">
          <span className="text-body-sm text-secondary">Size:</span>
          {WIDTHS.map((width) => (
            <button
              key={width.value}
              type="button"
              onClick={() => setSelectedWidth(width.value)}
              className={cn(
                "text-body-sm text-secondary hover:text-primary rounded-sm px-2 py-1 transition-colors",
                selectedWidth === width.value && "bg-tertiary text-primary font-medium",
              )}
              title={width.name}
            >
              {width.name}
            </button>
          ))}
        </div>

        <div className="flex-1" />

        <button
          type="button"
          onClick={handleClear}
          className="text-secondary hover:text-primary hover:bg-tertiary flex items-center gap-1.5 rounded-sm px-2 py-1 transition-colors"
          title="Clear whiteboard"
        >
          <Icon icon={eraserLineDashedIcon} size={16} />
          <span className="text-body-sm">Clear</span>
        </button>
      </div>

      {/* Canvas */}
      <div className="bg-primary p-4">
        <canvas
          ref={canvasRef}
          width={700}
          height={400}
          className="bg-elevated rounded-sm"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDrawing ? "crosshair" : "default" }}
        />
      </div>
    </div>
  );
}
