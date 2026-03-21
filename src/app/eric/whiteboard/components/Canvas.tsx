"use client";

import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CanvasObject, Point } from "../atoms";
import {
  isDraggingAtom,
  isDrawingAtom,
  objectsAtom,
  selectedToolAtom,
  viewTransformAtom,
} from "../atoms";
import { CanvasRenderer } from "./CanvasRenderer";

type CanvasProps = {
  onSaveHistory: (objects: CanvasObject[]) => void;
};

export function Canvas({ onSaveHistory }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [objects, setObjects] = useAtom(objectsAtom);
  const [selectedTool] = useAtom(selectedToolAtom);
  const [viewTransform, setViewTransform] = useAtom(viewTransformAtom);
  const [isDragging, setIsDragging] = useAtom(isDraggingAtom);
  const [isDrawing, setIsDrawing] = useAtom(isDrawingAtom);
  const [dragStart, setDragStart] = useState<Point | null>(null);
  const [dragOffset, setDragOffset] = useState<Point[]>([]);
  const [currentDrawing, setCurrentDrawing] = useState<CanvasObject | null>(null);

  // Screen to canvas coordinates
  const screenToCanvas = useCallback(
    (screenX: number, screenY: number): Point => {
      return {
        x: (screenX - viewTransform.x) / viewTransform.scale,
        y: (screenY - viewTransform.y) / viewTransform.scale,
      };
    },
    [viewTransform]
  );

  // Mouse down handler
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const point = screenToCanvas(e.clientX, e.clientY);

      if (selectedTool === "select") {
        // Check if clicking on an object
        const clickedObject = objects
          .slice()
          .reverse()
          .find((obj) => {
            if ("width" in obj && "height" in obj) {
              return (
                point.x >= obj.position.x &&
                point.x <= obj.position.x + obj.width &&
                point.y >= obj.position.y &&
                point.y <= obj.position.y + obj.height
              );
            }
            return false;
          });

        if (clickedObject) {
          // Select the object
          if (!e.shiftKey) {
            setObjects(
              objects.map((obj) => ({
                ...obj,
                selected: obj.id === clickedObject.id,
              }))
            );
          } else {
            setObjects(
              objects.map((obj) =>
                obj.id === clickedObject.id ? { ...obj, selected: true } : obj
              )
            );
          }

          // Start dragging
          setIsDragging(true);
          setDragStart(point);
          const selected = objects.filter((obj) => obj.selected || obj.id === clickedObject.id);
          setDragOffset(
            selected.map((obj) => ({
              x: obj.position.x - point.x,
              y: obj.position.y - point.y,
            }))
          );
        } else {
          // Deselect all
          setObjects(objects.map((obj) => ({ ...obj, selected: false })));
        }
      } else if (selectedTool === "pen") {
        // Start freehand drawing
        setIsDrawing(true);
        const newObject: CanvasObject = {
          id: `freehand-${Date.now()}`,
          type: "freehand",
          position: point,
          selected: false,
          rotation: 0,
          points: [{ x: 0, y: 0 }],
          color: "#000000",
          strokeWidth: 2,
        };
        setCurrentDrawing(newObject);
      } else if (
        selectedTool === "rectangle" ||
        selectedTool === "ellipse" ||
        selectedTool === "diamond" ||
        selectedTool === "triangle" ||
        selectedTool === "rounded-rectangle"
      ) {
        // Start shape drawing
        setIsDrawing(true);
        const newObject: CanvasObject = {
          id: `shape-${Date.now()}`,
          type: "shape",
          shapeType: selectedTool,
          position: point,
          selected: false,
          rotation: 0,
          width: 0,
          height: 0,
          fill: "#e3e3e3",
          stroke: "#000000",
          strokeWidth: 2,
        };
        setCurrentDrawing(newObject);
        setDragStart(point);
      } else if (selectedTool === "sticky-note") {
        // Create sticky note
        const newObject: CanvasObject = {
          id: `sticky-${Date.now()}`,
          type: "sticky-note",
          position: point,
          selected: false,
          rotation: 0,
          width: 200,
          height: 200,
          color: "#fef08a",
          text: "",
        };
        setObjects([...objects, newObject]);
        onSaveHistory([...objects, newObject]);
      } else if (selectedTool === "text") {
        // Create text
        const newObject: CanvasObject = {
          id: `text-${Date.now()}`,
          type: "text",
          position: point,
          selected: false,
          rotation: 0,
          text: "Text",
          fontSize: 16,
          color: "#000000",
        };
        setObjects([...objects, newObject]);
        onSaveHistory([...objects, newObject]);
      } else if (selectedTool === "frame") {
        // Start frame drawing
        setIsDrawing(true);
        const newObject: CanvasObject = {
          id: `frame-${Date.now()}`,
          type: "frame",
          position: point,
          selected: false,
          rotation: 0,
          width: 0,
          height: 0,
          name: "Frame",
          color: "#94a3b8",
        };
        setCurrentDrawing(newObject);
        setDragStart(point);
      } else if (selectedTool === "connector") {
        // Start connector drawing
        setIsDrawing(true);
        const newObject: CanvasObject = {
          id: `connector-${Date.now()}`,
          type: "connector",
          position: point,
          selected: false,
          rotation: 0,
          startPoint: { x: 0, y: 0 },
          endPoint: { x: 0, y: 0 },
          style: "straight",
          arrowEnd: true,
        };
        setCurrentDrawing(newObject);
        setDragStart(point);
      }
    },
    [
      selectedTool,
      objects,
      setObjects,
      screenToCanvas,
      setIsDragging,
      setIsDrawing,
      onSaveHistory,
    ]
  );

  // Mouse move handler
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const point = screenToCanvas(e.clientX, e.clientY);

      if (isDragging && dragStart) {
        // Move selected objects
        const selected = objects.filter((obj) => obj.selected);
        const newObjects = objects.map((obj) => {
          if (obj.selected) {
            const index = selected.indexOf(obj);
            return {
              ...obj,
              position: {
                x: point.x + dragOffset[index].x,
                y: point.y + dragOffset[index].y,
              },
            };
          }
          return obj;
        });
        setObjects(newObjects);
      } else if (isDrawing && currentDrawing && dragStart) {
        if (currentDrawing.type === "freehand") {
          // Add point to freehand path
          const newPoint = {
            x: point.x - currentDrawing.position.x,
            y: point.y - currentDrawing.position.y,
          };
          setCurrentDrawing({
            ...currentDrawing,
            points: [...currentDrawing.points, newPoint],
          });
        } else if (currentDrawing.type === "shape") {
          // Update shape size
          const width = point.x - dragStart.x;
          const height = point.y - dragStart.y;
          setCurrentDrawing({
            ...currentDrawing,
            width: Math.abs(width),
            height: Math.abs(height),
            position: {
              x: width < 0 ? point.x : dragStart.x,
              y: height < 0 ? point.y : dragStart.y,
            },
          });
        } else if (currentDrawing.type === "frame") {
          // Update frame size
          const width = point.x - dragStart.x;
          const height = point.y - dragStart.y;
          setCurrentDrawing({
            ...currentDrawing,
            width: Math.abs(width),
            height: Math.abs(height),
            position: {
              x: width < 0 ? point.x : dragStart.x,
              y: height < 0 ? point.y : dragStart.y,
            },
          });
        } else if (currentDrawing.type === "connector") {
          // Update connector end point
          setCurrentDrawing({
            ...currentDrawing,
            endPoint: {
              x: point.x - currentDrawing.position.x,
              y: point.y - currentDrawing.position.y,
            },
          });
        }
      }
    },
    [
      isDragging,
      isDrawing,
      dragStart,
      dragOffset,
      currentDrawing,
      objects,
      setObjects,
      screenToCanvas,
    ]
  );

  // Mouse up handler
  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setDragStart(null);
      setDragOffset([]);
      onSaveHistory(objects);
    } else if (isDrawing && currentDrawing) {
      setIsDrawing(false);
      const newObjects = [...objects, currentDrawing];
      setObjects(newObjects);
      setCurrentDrawing(null);
      setDragStart(null);
      onSaveHistory(newObjects);
    }
  }, [
    isDragging,
    isDrawing,
    currentDrawing,
    objects,
    setObjects,
    setIsDragging,
    setIsDrawing,
    onSaveHistory,
  ]);

  // Wheel handler for zoom and pan
  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLCanvasElement>) => {
      e.preventDefault();

      if (e.ctrlKey || e.metaKey) {
        // Zoom
        const delta = -e.deltaY * 0.01;
        const newScale = Math.max(0.1, Math.min(5, viewTransform.scale * (1 + delta)));
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Zoom towards mouse position
        const newX = mouseX - ((mouseX - viewTransform.x) * newScale) / viewTransform.scale;
        const newY = mouseY - ((mouseY - viewTransform.y) * newScale) / viewTransform.scale;

        setViewTransform({
          x: newX,
          y: newY,
          scale: newScale,
        });
      } else {
        // Pan
        setViewTransform({
          ...viewTransform,
          x: viewTransform.x - e.deltaX,
          y: viewTransform.y - e.deltaY,
        });
      }
    },
    [viewTransform, setViewTransform]
  );

  // Render canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Apply transform
    ctx.save();
    ctx.translate(viewTransform.x, viewTransform.y);
    ctx.scale(viewTransform.scale, viewTransform.scale);

    // Draw grid
    const gridSize = 50;
    const gridColor = "#f1f5f9";
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1 / viewTransform.scale;

    const startX = Math.floor(-viewTransform.x / viewTransform.scale / gridSize) * gridSize;
    const startY = Math.floor(-viewTransform.y / viewTransform.scale / gridSize) * gridSize;
    const endX = startX + (canvas.width / viewTransform.scale) + gridSize;
    const endY = startY + (canvas.height / viewTransform.scale) + gridSize;

    for (let x = startX; x < endX; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, startY);
      ctx.lineTo(x, endY);
      ctx.stroke();
    }

    for (let y = startY; y < endY; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
      ctx.stroke();
    }

    // Draw objects
    const allObjects = currentDrawing ? [...objects, currentDrawing] : objects;
    allObjects.forEach((obj) => {
      CanvasRenderer.renderObject(ctx, obj);
    });

    ctx.restore();
  }, [objects, viewTransform, currentDrawing]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0", {
        "cursor-grab": selectedTool === "select" && !isDragging,
        "cursor-grabbing": isDragging,
        "cursor-crosshair":
          selectedTool !== "select" && selectedTool !== "pen",
        "cursor-pencil": selectedTool === "pen",
      })}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    />
  );
}
