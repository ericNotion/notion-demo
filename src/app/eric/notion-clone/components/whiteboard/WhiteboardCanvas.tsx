"use client";

import { useRef, useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  selectedToolAtom,
  selectedColorAtom,
  shapesAtom,
  historyAtom,
  historyIndexAtom,
  viewStateAtom,
} from "./atoms";
import type { Shape, Point } from "./types";

const canvasStyle = { touchAction: "none" as const };

export function WhiteboardCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedTool] = useAtom(selectedToolAtom);
  const [selectedColor] = useAtom(selectedColorAtom);
  const [shapes, setShapes] = useAtom(shapesAtom);
  const [history, setHistory] = useAtom(historyAtom);
  const [historyIndex, setHistoryIndex] = useAtom(historyIndexAtom);
  const [viewState, setViewState] = useAtom(viewStateAtom);

  const [isDrawing, setIsDrawing] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [currentShape, setCurrentShape] = useState<Shape | null>(null);
  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [lastPanPoint, setLastPanPoint] = useState<Point | null>(null);

  // Draw all shapes on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply zoom and pan
    ctx.save();
    ctx.translate(viewState.panX, viewState.panY);
    ctx.scale(viewState.zoom, viewState.zoom);

    // Draw all shapes
    shapes.forEach((shape) => {
      drawShape(ctx, shape);
    });

    // Draw current shape being created
    if (currentShape) {
      drawShape(ctx, currentShape);
    }

    ctx.restore();
  }, [shapes, currentShape, viewState]);

  // Resize canvas to fill container
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const drawShape = (ctx: CanvasRenderingContext2D, shape: Shape) => {
    ctx.strokeStyle = shape.color;
    ctx.fillStyle = shape.color;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    switch (shape.type) {
      case "pen":
        if (shape.points && shape.points.length > 1) {
          ctx.beginPath();
          ctx.moveTo(shape.points[0].x, shape.points[0].y);
          for (let i = 1; i < shape.points.length; i++) {
            ctx.lineTo(shape.points[i].x, shape.points[i].y);
          }
          ctx.stroke();
        }
        break;

      case "rectangle":
        if (shape.x !== undefined && shape.y !== undefined && shape.width && shape.height) {
          ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        }
        break;

      case "ellipse":
        if (shape.x !== undefined && shape.y !== undefined && shape.width && shape.height) {
          ctx.beginPath();
          ctx.ellipse(
            shape.x + shape.width / 2,
            shape.y + shape.height / 2,
            Math.abs(shape.width / 2),
            Math.abs(shape.height / 2),
            0,
            0,
            2 * Math.PI
          );
          ctx.stroke();
        }
        break;

      case "line":
        if (
          shape.startX !== undefined &&
          shape.startY !== undefined &&
          shape.endX !== undefined &&
          shape.endY !== undefined
        ) {
          ctx.beginPath();
          ctx.moveTo(shape.startX, shape.startY);
          ctx.lineTo(shape.endX, shape.endY);
          ctx.stroke();
        }
        break;

      case "text":
        if (shape.x !== undefined && shape.y !== undefined && shape.text) {
          ctx.font = "16px Inter, sans-serif";
          ctx.fillText(shape.text, shape.x, shape.y);
        }
        break;

      case "sticky":
        if (shape.x !== undefined && shape.y !== undefined && shape.width && shape.height) {
          ctx.fillStyle = shape.color + "40"; // 25% opacity
          ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
          ctx.strokeStyle = shape.color;
          ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
          if (shape.text) {
            ctx.fillStyle = shape.color;
            ctx.font = "14px Inter, sans-serif";
            ctx.fillText(shape.text, shape.x + 8, shape.y + 24);
          }
        }
        break;
    }
  };

  const getCanvasPoint = (e: React.MouseEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - viewState.panX) / viewState.zoom;
    const y = (e.clientY - rect.top - viewState.panY) / viewState.zoom;
    return { x, y };
  };

  const addToHistory = (newShapes: Shape[]) => {
    const newHistory = [...history.slice(0, historyIndex + 1), newShapes];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.button === 1 || (e.button === 0 && e.metaKey)) {
      // Middle click or Cmd+Click for panning
      setIsPanning(true);
      setLastPanPoint({ x: e.clientX, y: e.clientY });
      return;
    }

    if (selectedTool === "select") return;

    const point = getCanvasPoint(e);
    setStartPoint(point);
    setIsDrawing(true);

    const newShape: Shape = {
      id: Date.now().toString(),
      type: selectedTool,
      color: selectedColor,
    };

    if (selectedTool === "pen") {
      newShape.points = [point];
    } else if (selectedTool === "line") {
      newShape.startX = point.x;
      newShape.startY = point.y;
      newShape.endX = point.x;
      newShape.endY = point.y;
    } else if (selectedTool === "text" || selectedTool === "sticky") {
      const text = prompt(selectedTool === "text" ? "Enter text:" : "Enter note:");
      if (text) {
        newShape.x = point.x;
        newShape.y = point.y;
        newShape.text = text;
        if (selectedTool === "sticky") {
          newShape.width = 200;
          newShape.height = 150;
        }
        const updatedShapes = [...shapes, newShape];
        setShapes(updatedShapes);
        addToHistory(updatedShapes);
      }
      setIsDrawing(false);
      return;
    } else {
      newShape.x = point.x;
      newShape.y = point.y;
      newShape.width = 0;
      newShape.height = 0;
    }

    setCurrentShape(newShape);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isPanning && lastPanPoint) {
      const dx = e.clientX - lastPanPoint.x;
      const dy = e.clientY - lastPanPoint.y;
      setViewState((prev) => ({
        ...prev,
        panX: prev.panX + dx,
        panY: prev.panY + dy,
      }));
      setLastPanPoint({ x: e.clientX, y: e.clientY });
      return;
    }

    if (!isDrawing || !currentShape || !startPoint) return;

    const point = getCanvasPoint(e);

    if (selectedTool === "pen") {
      setCurrentShape({
        ...currentShape,
        points: [...(currentShape.points || []), point],
      });
    } else if (selectedTool === "line") {
      setCurrentShape({
        ...currentShape,
        endX: point.x,
        endY: point.y,
      });
    } else if (selectedTool === "rectangle" || selectedTool === "ellipse") {
      setCurrentShape({
        ...currentShape,
        width: point.x - startPoint.x,
        height: point.y - startPoint.y,
      });
    }
  };

  const handleMouseUp = () => {
    if (isPanning) {
      setIsPanning(false);
      setLastPanPoint(null);
      return;
    }

    if (isDrawing && currentShape) {
      const updatedShapes = [...shapes, currentShape];
      setShapes(updatedShapes);
      addToHistory(updatedShapes);
      setCurrentShape(null);
    }
    setIsDrawing(false);
    setStartPoint(null);
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setViewState((prev) => ({
      ...prev,
      zoom: Math.max(0.1, Math.min(5, prev.zoom * delta)),
    }));
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      className="w-full h-full cursor-crosshair bg-primary"
      style={canvasStyle}
    />
  );
}
