"use client";

import { Icon } from "@nds-icons";
import { cursorClickIcon } from "@nds-icons/cursorClick/default.icon";
import { pencilIcon } from "@nds-icons/pencil/default.icon";
import { checkmarkSquareIcon } from "@nds-icons/checkmarkSquare/default.icon";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { lineCurveIcon } from "@nds-icons/lineCurve/default.icon";
import { textCursorIBeamIcon } from "@nds-icons/textCursorIBeam/default.icon";
import { composeIcon } from "@nds-icons/compose/default.icon";
import { arrowUTurnUpLeftIcon } from "@nds-icons/arrowUTurnUpLeft/default.icon";
import { arrowUTurnUpRightIcon } from "@nds-icons/arrowUTurnUpRight/default.icon";
import { trashIcon } from "@nds-icons/trash/default.icon";
import { useAtom } from "jotai";
import { cn } from "@/utils/cn";
import {
  selectedToolAtom,
  selectedColorAtom,
  shapesAtom,
  historyAtom,
  historyIndexAtom,
} from "./atoms";
import type { ToolType } from "./types";
import { COLORS } from "./types";

const TOOLS: { type: ToolType; icon: any; label: string }[] = [
  { type: "select", icon: cursorClickIcon, label: "Select" },
  { type: "pen", icon: pencilIcon, label: "Pen" },
  { type: "rectangle", icon: checkmarkSquareIcon, label: "Rectangle" },
  { type: "ellipse", icon: circleIcon, label: "Ellipse" },
  { type: "line", icon: lineCurveIcon, label: "Line" },
  { type: "text", icon: textCursorIBeamIcon, label: "Text" },
  { type: "sticky", icon: composeIcon, label: "Sticky Note" },
];

export function WhiteboardToolbar() {
  const [selectedTool, setSelectedTool] = useAtom(selectedToolAtom);
  const [selectedColor, setSelectedColor] = useAtom(selectedColorAtom);
  const [shapes, setShapes] = useAtom(shapesAtom);
  const [history, setHistory] = useAtom(historyAtom);
  const [historyIndex, setHistoryIndex] = useAtom(historyIndexAtom);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  const handleUndo = () => {
    if (canUndo) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setShapes(history[newIndex]);
    }
  };

  const handleRedo = () => {
    if (canRedo) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setShapes(history[newIndex]);
    }
  };

  const handleClear = () => {
    const newHistory = [...history.slice(0, historyIndex + 1), []];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setShapes([]);
  };

  return (
    <div className="absolute left-6 top-6 flex flex-col gap-2 bg-elevated shadow-md-outline rounded-lg p-2">
      {/* Drawing Tools */}
      <div className="flex flex-col gap-1">
        {TOOLS.map((tool) => (
          <button
            key={tool.type}
            onClick={() => setSelectedTool(tool.type)}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-md transition-colors",
              selectedTool === tool.type
                ? "bg-blue-primary text-white"
                : "hover:bg-tertiary"
            )}
            title={tool.label}
          >
            <Icon icon={tool.icon} color={selectedTool === tool.type ? "white" : "secondary"} />
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-border-primary" />

      {/* Color Picker */}
      <div className="flex flex-col gap-1">
        {COLORS.map((color) => (
          <button
            key={color.value}
            onClick={() => setSelectedColor(color.value)}
            className={cn(
              "w-10 h-10 rounded-md transition-all",
              selectedColor === color.value
                ? "ring-2 ring-blue-primary ring-offset-2 ring-offset-elevated"
                : "hover:ring-2 hover:ring-border-primary hover:ring-offset-2 hover:ring-offset-elevated"
            )}
            style= backgroundColor: color.value 
            title={color.name}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-border-primary" />

      {/* Actions */}
      <div className="flex flex-col gap-1">
        <button
          onClick={handleUndo}
          disabled={!canUndo}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-md transition-colors",
            canUndo ? "hover:bg-tertiary" : "opacity-30 cursor-not-allowed"
          )}
          title="Undo"
        >
          <Icon icon={arrowUTurnUpLeftIcon} color="secondary" />
        </button>
        <button
          onClick={handleRedo}
          disabled={!canRedo}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-md transition-colors",
            canRedo ? "hover:bg-tertiary" : "opacity-30 cursor-not-allowed"
          )}
          title="Redo"
        >
          <Icon icon={arrowUTurnUpRightIcon} color="secondary" />
        </button>
        <button
          onClick={handleClear}
          className="flex items-center justify-center w-10 h-10 rounded-md transition-colors hover:bg-tertiary"
          title="Clear Canvas"
        >
          <Icon icon={trashIcon} color="secondary" />
        </button>
      </div>
    </div>
  );
}
