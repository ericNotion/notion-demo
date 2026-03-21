"use client";

import { Agentation } from "@/components/playground-kit";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowUpDownLeftRightIcon } from "@nds-icons/arrowUpDownLeftRight/default.icon";
import { arrowUTurnUpLeftIcon } from "@nds-icons/arrowUTurnUpLeft/default.icon";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { composeIcon } from "@nds-icons/compose/default.icon";
import { cursorClickIcon } from "@nds-icons/cursorClick/default.icon";
import { paintPaletteIcon } from "@nds-icons/paintPalette/default.icon";
import { pencilLineIcon } from "@nds-icons/pencilLine/default.icon";
import { squareDashedIcon } from "@nds-icons/squareDashed/default.icon";
import { textCursorIBeamIcon } from "@nds-icons/textCursorIBeam/default.icon";
import { trashIcon } from "@nds-icons/trash/default.icon";
import { atom, useAtom } from "jotai";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// Types
type Tool =
  | "select"
  | "pen"
  | "rectangle"
  | "ellipse"
  | "text"
  | "sticky"
  | "pan";

type Color = string;

interface Point {
  x: number;
  y: number;
}

interface BaseElement {
  id: string;
  type: string;
  color: Color;
  x: number;
  y: number;
}

interface PathElement extends BaseElement {
  type: "path";
  points: Point[];
  strokeWidth: number;
}

interface RectElement extends BaseElement {
  type: "rectangle";
  width: number;
  height: number;
  strokeWidth: number;
}

interface EllipseElement extends BaseElement {
  type: "ellipse";
  width: number;
  height: number;
  strokeWidth: number;
}

interface TextElement extends BaseElement {
  type: "text";
  text: string;
  fontSize: number;
}

interface StickyElement extends BaseElement {
  type: "sticky";
  text: string;
  width: number;
  height: number;
  backgroundColor: Color;
}

type Element =
  | PathElement
  | RectElement
  | EllipseElement
  | TextElement
  | StickyElement;

// Atoms
const currentToolAtom = atom<Tool>("select");
const currentColorAtom = atom<Color>("#3b82f6");
const elementsAtom = atom<Element[]>([]);
const selectedElementIdAtom = atom<string | null>(null);
const historyAtom = atom<Element[][]>([[]]);
const historyIndexAtom = atom<number>(0);

// Colors for palette and sticky notes
const COLORS = [
  "#3b82f6", // blue
  "#ef4444", // red
  "#10b981", // green
  "#f59e0b", // amber
  "#8b5cf6", // purple
  "#ec4899", // pink
  "#14b8a6", // teal
  "#64748b", // slate
];

const STICKY_COLORS = [
  "#fef3c7", // yellow
  "#dbeafe", // blue
  "#dcfce7", // green
  "#fce7f3", // pink
  "#f3e8ff", // purple
  "#fed7aa", // orange
];

export default function WhiteboardPage() {
  const [currentTool, setCurrentTool] = useAtom(currentToolAtom);
  const [currentColor, setCurrentColor] = useAtom(currentColorAtom);
  const [elements, setElements] = useAtom(elementsAtom);
  const [selectedElementId, setSelectedElementId] = useAtom(
    selectedElementIdAtom,
  );
  const [history, setHistory] = useAtom(historyAtom);
  const [historyIndex, setHistoryIndex] = useAtom(historyIndexAtom);

  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentElement, setCurrentElement] = useState<Element | null>(null);
  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [pan, setPan] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState<Point | null>(null);
  const [editingTextId, setEditingTextId] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Generate unique ID
  const generateId = () => `${Date.now()}-${Math.random()}`;

  // Add to history
  const addToHistory = useCallback(
    (newElements: Element[]) => {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push([...newElements]);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    },
    [history, historyIndex, setHistory, setHistoryIndex],
  );

  // Undo
  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setElements(history[historyIndex - 1]);
    }
  }, [historyIndex, history, setHistoryIndex, setElements]);

  // Redo
  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setElements(history[historyIndex + 1]);
    }
  }, [historyIndex, history, setHistoryIndex, setElements]);

  // Delete selected element
  const deleteSelected = useCallback(() => {
    if (selectedElementId) {
      const newElements = elements.filter((el) => el.id !== selectedElementId);
      setElements(newElements);
      setSelectedElementId(null);
      addToHistory(newElements);
    }
  }, [
    selectedElementId,
    elements,
    setElements,
    setSelectedElementId,
    addToHistory,
  ]);

  // Convert screen coordinates to canvas coordinates
  const screenToCanvas = useCallback(
    (screenX: number, screenY: number): Point => {
      if (!canvasRef.current) return { x: 0, y: 0 };
      const rect = canvasRef.current.getBoundingClientRect();
      return {
        x: (screenX - rect.left - pan.x) / zoom,
        y: (screenY - rect.top - pan.y) / zoom,
      };
    },
    [pan, zoom],
  );

  // Handle mouse down
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button === 1 || (e.button === 0 && e.metaKey)) {
        // Middle click or Cmd+Click for panning
        setIsPanning(true);
        setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
        return;
      }

      if (currentTool === "pan") {
        setIsPanning(true);
        setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
        return;
      }

      const point = screenToCanvas(e.clientX, e.clientY);

      if (currentTool === "select") {
        // Check if clicking on an element
        const clickedElement = elements
          .slice()
          .reverse()
          .find((el) => {
            if (el.type === "path") {
              return el.points.some(
                (p) =>
                  Math.abs(p.x - point.x) < 10 && Math.abs(p.y - point.y) < 10,
              );
            }
            if (el.type === "rectangle" || el.type === "sticky") {
              return (
                point.x >= el.x &&
                point.x <= el.x + el.width &&
                point.y >= el.y &&
                point.y <= el.y + el.height
              );
            }
            if (el.type === "ellipse") {
              const dx = point.x - (el.x + el.width / 2);
              const dy = point.y - (el.y + el.height / 2);
              return (
                (dx * dx) / ((el.width / 2) * (el.width / 2)) +
                  (dy * dy) / ((el.height / 2) * (el.height / 2)) <=
                1
              );
            }
            if (el.type === "text") {
              return (
                point.x >= el.x &&
                point.x <= el.x + 200 &&
                point.y >= el.y &&
                point.y <= el.y + 30
              );
            }
            return false;
          });

        if (clickedElement) {
          setSelectedElementId(clickedElement.id);
          if (
            clickedElement.type === "text" ||
            clickedElement.type === "sticky"
          ) {
            setEditingTextId(clickedElement.id);
          }
        } else {
          setSelectedElementId(null);
          setEditingTextId(null);
        }
        return;
      }

      setIsDrawing(true);
      setStartPoint(point);

      if (currentTool === "pen") {
        const newPath: PathElement = {
          id: generateId(),
          type: "path",
          color: currentColor,
          x: point.x,
          y: point.y,
          points: [{ x: 0, y: 0 }],
          strokeWidth: 2,
        };
        setCurrentElement(newPath);
      } else if (currentTool === "text") {
        const newText: TextElement = {
          id: generateId(),
          type: "text",
          color: currentColor,
          x: point.x,
          y: point.y,
          text: "",
          fontSize: 16,
        };
        setCurrentElement(newText);
        setElements([...elements, newText]);
        setEditingTextId(newText.id);
        setIsDrawing(false);
      } else if (currentTool === "sticky") {
        const newSticky: StickyElement = {
          id: generateId(),
          type: "sticky",
          color: "#000000",
          backgroundColor: STICKY_COLORS[0],
          x: point.x,
          y: point.y,
          text: "",
          width: 200,
          height: 200,
        };
        setCurrentElement(newSticky);
        setElements([...elements, newSticky]);
        setEditingTextId(newSticky.id);
        setIsDrawing(false);
      }
    },
    [
      currentTool,
      currentColor,
      elements,
      pan,
      screenToCanvas,
      setElements,
      setSelectedElementId,
    ],
  );

  // Handle mouse move
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isPanning && panStart) {
        setPan({
          x: e.clientX - panStart.x,
          y: e.clientY - panStart.y,
        });
        return;
      }

      if (!isDrawing || !startPoint) return;

      const point = screenToCanvas(e.clientX, e.clientY);

      if (currentTool === "pen" && currentElement?.type === "path") {
        const relativePoint = {
          x: point.x - currentElement.x,
          y: point.y - currentElement.y,
        };
        setCurrentElement({
          ...currentElement,
          points: [...currentElement.points, relativePoint],
        });
      } else if (currentTool === "rectangle") {
        const width = point.x - startPoint.x;
        const height = point.y - startPoint.y;
        const newRect: RectElement = {
          id: currentElement?.id || generateId(),
          type: "rectangle",
          color: currentColor,
          x: Math.min(startPoint.x, point.x),
          y: Math.min(startPoint.y, point.y),
          width: Math.abs(width),
          height: Math.abs(height),
          strokeWidth: 2,
        };
        setCurrentElement(newRect);
      } else if (currentTool === "ellipse") {
        const width = point.x - startPoint.x;
        const height = point.y - startPoint.y;
        const newEllipse: EllipseElement = {
          id: currentElement?.id || generateId(),
          type: "ellipse",
          color: currentColor,
          x: Math.min(startPoint.x, point.x),
          y: Math.min(startPoint.y, point.y),
          width: Math.abs(width),
          height: Math.abs(height),
          strokeWidth: 2,
        };
        setCurrentElement(newEllipse);
      }
    },
    [
      isDrawing,
      isPanning,
      startPoint,
      panStart,
      currentTool,
      currentColor,
      currentElement,
      screenToCanvas,
    ],
  );

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    if (isPanning) {
      setIsPanning(false);
      setPanStart(null);
      return;
    }

    if (
      isDrawing &&
      currentElement &&
      currentTool !== "text" &&
      currentTool !== "sticky"
    ) {
      const newElements = [...elements, currentElement];
      setElements(newElements);
      addToHistory(newElements);
      setCurrentElement(null);
    }

    setIsDrawing(false);
    setStartPoint(null);
  }, [
    isDrawing,
    isPanning,
    currentElement,
    elements,
    currentTool,
    setElements,
    addToHistory,
  ]);

  // Handle wheel for zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY;
    const zoomFactor = delta > 0 ? 0.9 : 1.1;
    setZoom((prevZoom) => Math.max(0.1, Math.min(5, prevZoom * zoomFactor)));
  }, []);

  // Handle text input
  const handleTextInput = useCallback(
    (id: string, text: string) => {
      setElements((prev) =>
        prev.map((el) => {
          if (el.id === id && (el.type === "text" || el.type === "sticky")) {
            return { ...el, text };
          }
          return el;
        }),
      );
    },
    [setElements],
  );

  // Handle text blur
  const handleTextBlur = useCallback(() => {
    setEditingTextId(null);
    addToHistory(elements);
  }, [elements, addToHistory]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Delete" || e.key === "Backspace") {
        if (!editingTextId) {
          deleteSelected();
        }
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      }
      if (e.key === " " && !editingTextId) {
        e.preventDefault();
        setCurrentTool("pan");
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === " " && currentTool === "pan") {
        setCurrentTool("select");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    deleteSelected,
    undo,
    redo,
    currentTool,
    editingTextId,
    setCurrentTool,
  ]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Toolbar */}
      <div className="absolute left-4 top-4 z-10 flex flex-col gap-1 rounded-lg border border-primary bg-elevated p-2 shadow-md-outline">
        <ToolButton
          icon={cursorClickIcon}
          active={currentTool === "select"}
          onClick={() => setCurrentTool("select")}
          tooltip="Select"
        />
        <ToolButton
          icon={arrowUpDownLeftRightIcon}
          active={currentTool === "pan"}
          onClick={() => setCurrentTool("pan")}
          tooltip="Pan (Space)"
        />
        <div className="my-1 h-px bg-border-primary" />
        <ToolButton
          icon={pencilLineIcon}
          active={currentTool === "pen"}
          onClick={() => setCurrentTool("pen")}
          tooltip="Pen"
        />
        <ToolButton
          icon={squareDashedIcon}
          active={currentTool === "rectangle"}
          onClick={() => setCurrentTool("rectangle")}
          tooltip="Rectangle"
        />
        <ToolButton
          icon={circleIcon}
          active={currentTool === "ellipse"}
          onClick={() => setCurrentTool("ellipse")}
          tooltip="Ellipse"
        />
        <ToolButton
          icon={textCursorIBeamIcon}
          active={currentTool === "text"}
          onClick={() => setCurrentTool("text")}
          tooltip="Text"
        />
        <ToolButton
          icon={composeIcon}
          active={currentTool === "sticky"}
          onClick={() => setCurrentTool("sticky")}
          tooltip="Sticky Note"
        />
        <div className="my-1 h-px bg-border-primary" />
        <div className="relative">
          <ToolButton
            icon={paintPaletteIcon}
            active={showColorPicker}
            onClick={() => setShowColorPicker(!showColorPicker)}
            tooltip="Colors"
          />
          <AnimatePresence>
            {showColorPicker && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute left-full top-0 ml-2 flex gap-1 rounded-lg border border-primary bg-elevated p-2 shadow-md-outline"
              >
                {COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setCurrentColor(color);
                      setShowColorPicker(false);
                    }}
                    className={cn(
                      "h-6 w-6 rounded-md border-2 transition-all hover:scale-110",
                      currentColor === color
                        ? "border-primary ring-2 ring-blue-500 ring-offset-1"
                        : "border-border-primary",
                    )}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="my-1 h-px bg-border-primary" />
        <ToolButton
          icon={arrowUTurnUpLeftIcon}
          onClick={undo}
          disabled={historyIndex === 0}
          tooltip="Undo (⌘Z)"
        />
        <ToolButton
          icon={trashIcon}
          onClick={deleteSelected}
          disabled={!selectedElementId}
          tooltip="Delete"
        />
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        className={cn(
          "h-full w-full",
          currentTool === "pan" || isPanning
            ? "cursor-grab"
            : "cursor-crosshair",
        )}
      >
        <svg
          className="h-full w-full"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "0 0",
          }}
        >
          {/* Grid pattern */}
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="stroke-border-secondary opacity-20"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Render elements */}
          {elements.map((element) => (
            <g key={element.id}>
              {element.type === "path" && (
                <path
                  d={`M ${element.points.map((p) => `${element.x + p.x},${element.y + p.y}`).join(" L ")}`}
                  fill="none"
                  stroke={element.color}
                  strokeWidth={element.strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {element.type === "rectangle" && (
                <rect
                  x={element.x}
                  y={element.y}
                  width={element.width}
                  height={element.height}
                  fill="none"
                  stroke={element.color}
                  strokeWidth={element.strokeWidth}
                  className={cn(
                    selectedElementId === element.id &&
                      "stroke-blue-500 stroke-[3px]",
                  )}
                />
              )}
              {element.type === "ellipse" && (
                <ellipse
                  cx={element.x + element.width / 2}
                  cy={element.y + element.height / 2}
                  rx={element.width / 2}
                  ry={element.height / 2}
                  fill="none"
                  stroke={element.color}
                  strokeWidth={element.strokeWidth}
                  className={cn(
                    selectedElementId === element.id &&
                      "stroke-blue-500 stroke-[3px]",
                  )}
                />
              )}
            </g>
          ))}

          {/* Render current drawing element */}
          {currentElement && (
            <g>
              {currentElement.type === "path" && (
                <path
                  d={`M ${currentElement.points.map((p) => `${currentElement.x + p.x},${currentElement.y + p.y}`).join(" L ")}`}
                  fill="none"
                  stroke={currentElement.color}
                  strokeWidth={currentElement.strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {currentElement.type === "rectangle" && (
                <rect
                  x={currentElement.x}
                  y={currentElement.y}
                  width={currentElement.width}
                  height={currentElement.height}
                  fill="none"
                  stroke={currentElement.color}
                  strokeWidth={currentElement.strokeWidth}
                />
              )}
              {currentElement.type === "ellipse" && (
                <ellipse
                  cx={currentElement.x + currentElement.width / 2}
                  cy={currentElement.y + currentElement.height / 2}
                  rx={currentElement.width / 2}
                  ry={currentElement.height / 2}
                  fill="none"
                  stroke={currentElement.color}
                  strokeWidth={currentElement.strokeWidth}
                />
              )}
            </g>
          )}
        </svg>

        {/* Text and sticky note elements (rendered as HTML) */}
        <div
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "0 0",
          }}
          className="pointer-events-none absolute inset-0"
        >
          {elements.map((element) => {
            if (element.type === "text") {
              return (
                <div
                  key={element.id}
                  className="pointer-events-auto absolute"
                  style={{
                    left: element.x,
                    top: element.y,
                    color: element.color,
                    fontSize: element.fontSize,
                  }}
                >
                  {editingTextId === element.id ? (
                    <input
                      type="text"
                      value={element.text}
                      onChange={(e) =>
                        handleTextInput(element.id, e.target.value)
                      }
                      onBlur={handleTextBlur}
                      autoFocus
                      className="border-b-2 border-blue-500 bg-transparent outline-hidden"
                      style={{
                        color: element.color,
                        fontSize: element.fontSize,
                        width: "200px",
                      }}
                      placeholder="Type text..."
                    />
                  ) : (
                    <div
                      className={cn(
                        "cursor-pointer",
                        selectedElementId === element.id &&
                          "ring-2 ring-blue-500",
                      )}
                    >
                      {element.text || "Click to edit"}
                    </div>
                  )}
                </div>
              );
            }
            if (element.type === "sticky") {
              return (
                <div
                  key={element.id}
                  className={cn(
                    "pointer-events-auto absolute rounded-md p-4 shadow-sm-outline",
                    selectedElementId === element.id && "ring-2 ring-blue-500",
                  )}
                  style={{
                    left: element.x,
                    top: element.y,
                    width: element.width,
                    height: element.height,
                    backgroundColor: element.backgroundColor,
                  }}
                >
                  {editingTextId === element.id ? (
                    <textarea
                      value={element.text}
                      onChange={(e) =>
                        handleTextInput(element.id, e.target.value)
                      }
                      onBlur={handleTextBlur}
                      autoFocus
                      className="h-full w-full resize-none bg-transparent outline-hidden"
                      placeholder="Type note..."
                      style={{ fontSize: "14px" }}
                    />
                  ) : (
                    <div
                      className="h-full w-full cursor-pointer overflow-hidden text-body"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {element.text || "Click to edit"}
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Info bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg border border-primary bg-elevated px-4 py-2 text-caption text-secondary shadow-md-outline">
        Zoom: {Math.round(zoom * 100)}% · Pan: {Math.round(pan.x)},{" "}
        {Math.round(pan.y)} · Elements: {elements.length}
      </div>

      <Agentation />
    </div>
  );
}

interface ToolButtonProps {
  icon: any;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  tooltip: string;
}

function ToolButton({
  icon,
  active = false,
  disabled = false,
  onClick,
  tooltip,
}: ToolButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "rounded-md p-2 transition-all",
          active
            ? "bg-blue-500 text-white"
            : "text-secondary hover:bg-tertiary hover:text-primary",
          disabled && "cursor-not-allowed opacity-40",
        )}
      >
        <Icon icon={icon} size="small" />
      </button>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.1 }}
            className="pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md bg-elevated px-3 py-1.5 text-caption text-primary shadow-md-outline"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
