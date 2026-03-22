"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { checklistIcon } from "@nds-icons/checklist/default.icon";
import { cursorClickIcon } from "@nds-icons/cursorClick/default.icon";
import { eraserLineDashedIcon } from "@nds-icons/eraserLineDashed/default.icon";
import { paintPaletteIcon } from "@nds-icons/paintPalette/default.icon";
import { pencilIcon } from "@nds-icons/pencil/default.icon";
import { squareOnSquareDashedIcon } from "@nds-icons/squareOnSquareDashed/default.icon";
import { useEffect, useRef, useState } from "react";
import type { DrawingStroke, StickyNote, WhiteboardBlock } from "./atoms";
import { createBlockId } from "./atoms";

type Tool = "select" | "pen" | "sticky" | "eraser";
type Color =
  | "blue"
  | "green"
  | "yellow"
  | "pink"
  | "purple"
  | "orange"
  | "red"
  | "gray";

const colorMap: Record<Color, { bg: string; border: string; text: string }> = {
  blue: {
    bg: "bg-blue-subtle",
    border: "border-blue-primary",
    text: "text-blue-primary",
  },
  green: {
    bg: "bg-green-subtle",
    border: "border-green-primary",
    text: "text-green-primary",
  },
  yellow: {
    bg: "bg-yellow-subtle",
    border: "border-yellow-primary",
    text: "text-yellow-primary",
  },
  pink: {
    bg: "bg-pink-subtle",
    border: "border-pink-primary",
    text: "text-pink-primary",
  },
  purple: {
    bg: "bg-purple-subtle",
    border: "border-purple-primary",
    text: "text-purple-primary",
  },
  orange: {
    bg: "bg-orange-subtle",
    border: "border-orange-primary",
    text: "text-orange-primary",
  },
  red: {
    bg: "bg-red-subtle",
    border: "border-red-primary",
    text: "text-red-primary",
  },
  gray: {
    bg: "bg-secondary",
    border: "border-primary",
    text: "text-primary",
  },
};

const strokeColorMap: Record<Color, string> = {
  blue: "#3b82f6",
  green: "#22c55e",
  yellow: "#eab308",
  pink: "#ec4899",
  purple: "#a855f7",
  orange: "#f97316",
  red: "#ef4444",
  gray: "#6b7280",
};

interface WhiteboardProps {
  block: WhiteboardBlock;
  onChange: (
    stickyNotes: StickyNote[],
    strokes: DrawingStroke[],
  ) => void;
  onConvertToTask: (text: string) => void;
}

export function Whiteboard({
  block,
  onChange,
  onConvertToTask,
}: WhiteboardProps) {
  const [tool, setTool] = useState<Tool>("select");
  const [color, setColor] = useState<Color>("blue");
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>(
    block.stickyNotes,
  );
  const [strokes, setStrokes] = useState<DrawingStroke[]>(block.strokes);
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [draggingNote, setDraggingNote] = useState<{
    id: string;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStroke, setCurrentStroke] = useState<DrawingStroke | null>(
    null,
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Redraw canvas whenever strokes change
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
      ctx.lineWidth = 2;
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

  // Sync with parent
  useEffect(() => {
    onChange(stickyNotes, strokes);
  }, [stickyNotes, strokes, onChange]);

  const getMousePos = (e: React.MouseEvent<HTMLElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (tool === "pen") {
      const pos = getMousePos(e);
      const newStroke: DrawingStroke = {
        id: createBlockId("stroke"),
        color: strokeColorMap[color],
        points: [pos],
      };
      setCurrentStroke(newStroke);
      setIsDrawing(true);
    } else if (tool === "sticky") {
      const pos = getMousePos(e);
      const newNote: StickyNote = {
        id: createBlockId("note"),
        text: "",
        color,
        x: Math.max(0, pos.x - 75),
        y: Math.max(0, pos.y - 75),
      };
      setStickyNotes((prev) => [...prev, newNote]);
      setSelectedNote(newNote.id);
      setTool("select");
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (tool === "pen" && isDrawing && currentStroke) {
      const pos = getMousePos(e);
      setCurrentStroke({
        ...currentStroke,
        points: [...currentStroke.points, pos],
      });
      // Update strokes immediately for live drawing
      setStrokes((prev) => {
        const filtered = prev.filter((s) => s.id !== currentStroke.id);
        return [
          ...filtered,
          { ...currentStroke, points: [...currentStroke.points, pos] },
        ];
      });
    }
  };

  const handleCanvasMouseUp = () => {
    if (tool === "pen" && isDrawing && currentStroke) {
      if (currentStroke.points.length > 1) {
        setStrokes((prev) => {
          const filtered = prev.filter((s) => s.id !== currentStroke.id);
          return [...filtered, currentStroke];
        });
      }
      setCurrentStroke(null);
      setIsDrawing(false);
    }
  };

  const handleNoteMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    noteId: string,
  ) => {
    if (tool !== "select") return;
    e.stopPropagation();
    setSelectedNote(noteId);
    const note = stickyNotes.find((n) => n.id === noteId);
    if (!note) return;
    setDraggingNote({
      id: noteId,
      offsetX: e.clientX - note.x,
      offsetY: e.clientY - note.y,
    });
  };

  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggingNote || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - draggingNote.offsetX;
    const newY = e.clientY - rect.top - draggingNote.offsetY;

    setStickyNotes((prev) =>
      prev.map((note) =>
        note.id === draggingNote.id
          ? { ...note, x: Math.max(0, newX), y: Math.max(0, newY) }
          : note,
      ),
    );
  };

  const handleContainerMouseUp = () => {
    setDraggingNote(null);
  };

  const updateNoteText = (noteId: string, text: string) => {
    setStickyNotes((prev) =>
      prev.map((note) => (note.id === noteId ? { ...note, text } : note)),
    );
  };

  const handleConvertToTask = (noteId: string) => {
    const note = stickyNotes.find((n) => n.id === noteId);
    if (!note || !note.text.trim()) return;
    onConvertToTask(note.text);
    // Remove the sticky note after conversion
    setStickyNotes((prev) => prev.filter((n) => n.id !== noteId));
    setSelectedNote(null);
  };

  const clearCanvas = () => {
    setStrokes([]);
    setStickyNotes([]);
    setSelectedNote(null);
  };

  return (
    <div className="border-primary my-2 overflow-hidden rounded-lg border">
      {/* Toolbar */}
      <div className="bg-secondary border-primary flex items-center gap-1 border-b px-2 py-1.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTool("select")}
          className={cn(tool === "select" && "bg-tertiary")}
        >
          <Icon icon={cursorClickIcon} size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTool("pen")}
          className={cn(tool === "pen" && "bg-tertiary")}
        >
          <Icon icon={pencilIcon} size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTool("sticky")}
          className={cn(tool === "sticky" && "bg-tertiary")}
        >
          <Icon icon={squareOnSquareDashedIcon} size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTool("eraser")}
          className={cn(tool === "eraser" && "bg-tertiary")}
        >
          <Icon icon={eraserLineDashedIcon} size={16} />
        </Button>

        <div className="bg-tertiary mx-2 h-5 w-px" />

        <div className="flex items-center gap-1">
          <Icon icon={paintPaletteIcon} size={16} color="secondary" />
          <div className="flex gap-0.5">
            {(
              [
                "blue",
                "green",
                "yellow",
                "pink",
                "purple",
                "orange",
                "red",
                "gray",
              ] as Color[]
            ).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={cn(
                  "size-5 rounded-sm border-2 transition-transform hover:scale-110",
                  colorMap[c].bg,
                  color === c ? "border-primary scale-110" : "border-transparent",
                )}
                aria-label={c}
              />
            ))}
          </div>
        </div>

        <div className="flex-1" />

        <Button variant="ghost" size="sm" onClick={clearCanvas}>
          Clear
        </Button>
      </div>

      {/* Canvas Area */}
      <div
        ref={containerRef}
        className="bg-secondary relative"
        style={{ height: "400px" }}
        onMouseMove={handleContainerMouseMove}
        onMouseUp={handleContainerMouseUp}
        onMouseLeave={handleContainerMouseUp}
      >
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="absolute inset-0"
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
          style={{ cursor: tool === "pen" ? "crosshair" : "default" }}
        />

        {/* Sticky Notes */}
        {stickyNotes.map((note) => (
          <div
            key={note.id}
            className={cn(
              "shadow-sm-outline group absolute flex flex-col rounded-md border-2 p-2",
              colorMap[note.color].bg,
              colorMap[note.color].border,
              selectedNote === note.id && "ring-2 ring-blue-primary ring-offset-2",
            )}
            style={{
              left: `${note.x}px`,
              top: `${note.y}px`,
              width: "150px",
              height: "150px",
              cursor: tool === "select" ? "move" : "default",
            }}
            onMouseDown={(e) => handleNoteMouseDown(e, note.id)}
          >
            <textarea
              value={note.text}
              onChange={(e) => updateNoteText(note.id, e.target.value)}
              className={cn(
                "text-caption flex-1 resize-none border-0 bg-transparent p-0 outline-none",
                colorMap[note.color].text,
              )}
              placeholder="Type here..."
              onClick={(e) => e.stopPropagation()}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleConvertToTask(note.id);
              }}
              className="opacity-0 group-hover:opacity-100 mt-1 h-6 w-full text-xs transition-opacity"
            >
              <Icon icon={checklistIcon} size={14} />
              Convert to task
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
