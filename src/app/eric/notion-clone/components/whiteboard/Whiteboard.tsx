"use client";

import { useAtom } from "jotai";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import {
  currentToolAtom,
  currentColorAtom,
  drawingsAtom,
  postItNotesAtom,
  viewTransformAtom,
  isDrawingAtom,
} from "./atoms";
import type { Drawing, Point, PostItNote as PostItNoteType } from "./types";
import { WhiteboardToolbar } from "./WhiteboardToolbar";
import { WhiteboardControls } from "./WhiteboardControls";
import { PostItNote } from "./PostItNote";

export function Whiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTool] = useAtom(currentToolAtom);
  const [currentColor] = useAtom(currentColorAtom);
  const [drawings, setDrawings] = useAtom(drawingsAtom);
  const [postItNotes, setPostItNotes] = useAtom(postItNotesAtom);
  const [viewTransform, setViewTransform] = useAtom(viewTransformAtom);
  const [isDrawing, setIsDrawing] = useAtom(isDrawingAtom);
  const [currentDrawing, setCurrentDrawing] = useState<Drawing | null>(null);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState<Point>({ x: 0, y: 0 });

  // Resize canvas to match container
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvasRef.current.width = rect.width;
        canvasRef.current.height = rect.height;
        redrawCanvas();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Redraw canvas when drawings or transform changes
  useEffect(() => {
    redrawCanvas();
  }, [drawings, viewTransform]);

  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply transform
    ctx.save();
    ctx.translate(viewTransform.x, viewTransform.y);
    ctx.scale(viewTransform.scale, viewTransform.scale);

    // Draw all drawings
    drawings.forEach((drawing) => {
      drawShape(ctx, drawing);
    });

    ctx.restore();
  };

  const drawShape = (ctx: CanvasRenderingContext2D, drawing: Drawing) => {
    if (drawing.points.length === 0) return;

    ctx.strokeStyle = drawing.color;
    ctx.lineWidth = drawing.strokeWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (drawing.type === "pencil") {
      ctx.beginPath();
      ctx.moveTo(drawing.points[0].x, drawing.points[0].y);
      for (let i = 1; i < drawing.points.length; i++) {
        ctx.lineTo(drawing.points[i].x, drawing.points[i].y);
      }
      ctx.stroke();
    } else if (drawing.type === "line") {
      if (drawing.points.length >= 2) {
        const start = drawing.points[0];
        const end = drawing.points[drawing.points.length - 1];
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      }
    } else if (drawing.type === "rectangle") {
      if (drawing.points.length >= 2) {
        const start = drawing.points[0];
        const end = drawing.points[drawing.points.length - 1];
        const width = end.x - start.x;
        const height = end.y - start.y;
        ctx.strokeRect(start.x, start.y, width, height);
      }
    } else if (drawing.type === "circle") {
      if (drawing.points.length >= 2) {
        const start = drawing.points[0];
        const end = drawing.points[drawing.points.length - 1];
        const radius = Math.sqrt(
          Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
        );
        ctx.beginPath();
        ctx.arc(start.x, start.y, radius, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }
  };

  const getCanvasPoint = (e: React.MouseEvent): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left - viewTransform.x) / viewTransform.scale,
      y: (e.clientY - rect.top - viewTransform.y) / viewTransform.scale,
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const point = getCanvasPoint(e);

    if (currentTool === "select") {
      setIsPanning(true);
      setPanStart({ x: e.clientX - viewTransform.x, y: e.clientY - viewTransform.y });
      return;
    }

    if (currentTool === "postit") {
      const colors = [
        "#FEF3C7",
        "#DBEAFE",
        "#D1FAE5",
        "#FCE7F3",
        "#E9D5FF",
        "#FED7AA",
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomRotation = (Math.random() - 0.5) * 4; // -2 to +2 degrees

      const newNote: PostItNoteType = {
        id: `note-${Date.now()}`,
        x: point.x,
        y: point.y,
        width: 150,
        height: 150,
        color: randomColor,
        text: "",
        rotation: randomRotation,
      };

      setPostItNotes([...postItNotes, newNote]);
      return;
    }

    if (currentTool === "eraser") {
      // Find and remove drawing under cursor
      const eraserRadius = 10;
      setDrawings((prevDrawings) =>
        prevDrawings.filter((drawing) => {
          return !drawing.points.some(
            (p) =>
              Math.sqrt(Math.pow(p.x - point.x, 2) + Math.pow(p.y - point.y, 2)) <
              eraserRadius
          );
        })
      );
      setIsDrawing(true);
      return;
    }

    if (
      currentTool === "pencil" ||
      currentTool === "rectangle" ||
      currentTool === "circle" ||
      currentTool === "line"
    ) {
      const newDrawing: Drawing = {
        id: `drawing-${Date.now()}`,
        type: currentTool,
        points: [point],
        color: currentColor,
        strokeWidth: 2,
      };

      setCurrentDrawing(newDrawing);
      setIsDrawing(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      setViewTransform({
        ...viewTransform,
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y,
      });
      return;
    }

    if (!isDrawing) return;

    const point = getCanvasPoint(e);

    if (currentTool === "eraser") {
      const eraserRadius = 10;
      setDrawings((prevDrawings) =>
        prevDrawings.filter((drawing) => {
          return !drawing.points.some(
            (p) =>
              Math.sqrt(Math.pow(p.x - point.x, 2) + Math.pow(p.y - point.y, 2)) <
              eraserRadius
          );
        })
      );
      return;
    }

    if (currentDrawing) {
      if (currentTool === "pencil") {
        setCurrentDrawing({
          ...currentDrawing,
          points: [...currentDrawing.points, point],
        });
      } else {
        setCurrentDrawing({
          ...currentDrawing,
          points: [currentDrawing.points[0], point],
        });
      }
    }
  };

  const handleMouseUp = () => {
    if (isPanning) {
      setIsPanning(false);
      return;
    }

    if (isDrawing && currentDrawing) {
      setDrawings([...drawings, currentDrawing]);
      setCurrentDrawing(null);
    }

    setIsDrawing(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(0.1, Math.min(3, viewTransform.scale * delta));

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const worldX = (mouseX - viewTransform.x) / viewTransform.scale;
    const worldY = (mouseY - viewTransform.y) / viewTransform.scale;

    const newX = mouseX - worldX * newScale;
    const newY = mouseY - worldY * newScale;

    setViewTransform({
      x: newX,
      y: newY,
      scale: newScale,
    });
  };

  // Draw current drawing in progress
  useEffect(() => {
    if (!currentDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    redrawCanvas();

    ctx.save();
    ctx.translate(viewTransform.x, viewTransform.y);
    ctx.scale(viewTransform.scale, viewTransform.scale);
    drawShape(ctx, currentDrawing);
    ctx.restore();
  }, [currentDrawing]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-primary overflow-hidden"
      style={{ cursor: isPanning ? "grabbing" : currentTool === "select" ? "grab" : "crosshair" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      />

      {/* Post-it notes layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          {postItNotes.map((note) => (
            <div key={note.id} className="pointer-events-auto">
              <PostItNote note={note} />
            </div>
          ))}
        </div>
      </div>

      <WhiteboardToolbar />
      <WhiteboardControls />
    </div>
  );
}
