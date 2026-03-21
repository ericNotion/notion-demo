"use client";

import { Agentation } from "@/components/playground-kit";
import { useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "./components/Canvas";
import { Toolbar } from "./components/Toolbar";
import {
  historyAtom,
  historyIndexAtom,
  objectsAtom,
  selectedToolAtom,
  viewTransformAtom,
} from "./atoms";

export default function WhiteboardPage() {
  const [objects, setObjects] = useAtom(objectsAtom);
  const [, setSelectedTool] = useAtom(selectedToolAtom);
  const [viewTransform, setViewTransform] = useAtom(viewTransformAtom);
  const [history, setHistory] = useAtom(historyAtom);
  const [historyIndex, setHistoryIndex] = useAtom(historyIndexAtom);

  // Save to history
  const saveToHistory = useCallback(
    (newObjects: typeof objects) => {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newObjects);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    },
    [history, historyIndex, setHistory, setHistoryIndex]
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Undo: Ctrl/Cmd + Z
      if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        if (historyIndex > 0) {
          setHistoryIndex(historyIndex - 1);
          setObjects(history[historyIndex - 1]);
        }
      }

      // Redo: Ctrl/Cmd + Shift + Z or Ctrl/Cmd + Y
      if (
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "z") ||
        ((e.ctrlKey || e.metaKey) && e.key === "y")
      ) {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          setHistoryIndex(historyIndex + 1);
          setObjects(history[historyIndex + 1]);
        }
      }

      // Fit to view: Ctrl/Cmd + 0
      if ((e.ctrlKey || e.metaKey) && e.key === "0") {
        e.preventDefault();
        // Calculate bounding box of all objects
        if (objects.length > 0) {
          let minX = Infinity;
          let minY = Infinity;
          let maxX = -Infinity;
          let maxY = -Infinity;

          objects.forEach((obj) => {
            minX = Math.min(minX, obj.position.x);
            minY = Math.min(minY, obj.position.y);

            if ("width" in obj && "height" in obj) {
              maxX = Math.max(maxX, obj.position.x + obj.width);
              maxY = Math.max(maxY, obj.position.y + obj.height);
            } else {
              maxX = Math.max(maxX, obj.position.x);
              maxY = Math.max(maxY, obj.position.y);
            }
          });

          const padding = 100;
          const width = maxX - minX + padding * 2;
          const height = maxY - minY + padding * 2;
          const centerX = (minX + maxX) / 2;
          const centerY = (minY + maxY) / 2;

          const scaleX = window.innerWidth / width;
          const scaleY = window.innerHeight / height;
          const scale = Math.min(scaleX, scaleY, 1);

          setViewTransform({
            x: window.innerWidth / 2 - centerX * scale,
            y: window.innerHeight / 2 - centerY * scale,
            scale,
          });
        } else {
          // Reset to default view
          setViewTransform({ x: 0, y: 0, scale: 1 });
        }
      }

      // Delete selected objects
      if (e.key === "Delete" || e.key === "Backspace") {
        const newObjects = objects.filter((obj) => !obj.selected);
        if (newObjects.length !== objects.length) {
          setObjects(newObjects);
          saveToHistory(newObjects);
        }
      }

      // Select all: Ctrl/Cmd + A
      if ((e.ctrlKey || e.metaKey) && e.key === "a") {
        e.preventDefault();
        setObjects(objects.map((obj) => ({ ...obj, selected: true })));
      }

      // Tool shortcuts
      if (e.key === "v") {
        setSelectedTool("select");
      } else if (e.key === "r") {
        setSelectedTool("rectangle");
      } else if (e.key === "e") {
        setSelectedTool("ellipse");
      } else if (e.key === "p") {
        setSelectedTool("pen");
      } else if (e.key === "t") {
        setSelectedTool("text");
      } else if (e.key === "s") {
        setSelectedTool("sticky-note");
      } else if (e.key === "l") {
        setSelectedTool("connector");
      } else if (e.key === "f") {
        setSelectedTool("frame");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    objects,
    setObjects,
    historyIndex,
    history,
    setHistoryIndex,
    setSelectedTool,
    setViewTransform,
    saveToHistory,
  ]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-primary">
      <Canvas onSaveHistory={saveToHistory} />
      <Toolbar />
      <Agentation />
    </div>
  );
}
