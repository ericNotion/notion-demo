"use client";

import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { currentToolAtom } from "./atoms";
import type { Tool } from "./types";
import { WhiteboardCanvas } from "./WhiteboardCanvas";
import { WhiteboardHelp } from "./WhiteboardHelp";
import { WhiteboardToolbar } from "./WhiteboardToolbar";
import { ZoomIndicator } from "./ZoomIndicator";

export function Whiteboard() {
  const setCurrentTool = useSetAtom(currentToolAtom);

  // Tool keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const toolMap: Record<string, Tool> = {
        v: "select",
        "1": "select",
        d: "draw",
        "2": "draw",
        r: "rectangle",
        "3": "rectangle",
        c: "circle",
        "4": "circle",
        a: "arrow",
        "5": "arrow",
        t: "text",
        "6": "text",
        e: "eraser",
        "7": "eraser",
      };

      const tool = toolMap[e.key.toLowerCase()];
      if (tool) {
        e.preventDefault();
        setCurrentTool(tool);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setCurrentTool]);

  return (
    <div className="bg-primary relative h-full w-full overflow-hidden">
      <WhiteboardToolbar />
      <WhiteboardCanvas />
      <ZoomIndicator />
      <WhiteboardHelp />
    </div>
  );
}
