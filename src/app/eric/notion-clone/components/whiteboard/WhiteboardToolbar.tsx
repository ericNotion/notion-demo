"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowStraightRightIcon } from "@nds-icons/arrowStraightRight/default.icon";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { cursorClickIcon } from "@nds-icons/cursorClick/default.icon";
import { eraserLineDashedIcon } from "@nds-icons/eraserLineDashed/default.icon";
import { pencilScribbleIcon } from "@nds-icons/pencilScribble/default.icon";
import { squareDashedIcon } from "@nds-icons/squareDashed/default.icon";
import { textCursorIBeamIcon } from "@nds-icons/textCursorIBeam/default.icon";
import { useAtom } from "jotai";
import { currentToolAtom, elementsAtom, selectedElementIdsAtom, strokeColorAtom } from "./atoms";
import type { Tool } from "./types";

const tools: Array<{ id: Tool; icon: any; label: string }> = [
  { id: "select", icon: cursorClickIcon, label: "Select" },
  { id: "draw", icon: pencilScribbleIcon, label: "Draw" },
  { id: "rectangle", icon: squareDashedIcon, label: "Rectangle" },
  { id: "circle", icon: circleIcon, label: "Circle" },
  { id: "arrow", icon: arrowStraightRightIcon, label: "Arrow" },
  { id: "text", icon: textCursorIBeamIcon, label: "Text" },
  { id: "eraser", icon: eraserLineDashedIcon, label: "Eraser" },
];

const colors = [
  { value: "#1f1f1f", label: "Black" },
  { value: "#dc2626", label: "Red" },
  { value: "#ea580c", label: "Orange" },
  { value: "#ca8a04", label: "Yellow" },
  { value: "#16a34a", label: "Green" },
  { value: "#2563eb", label: "Blue" },
  { value: "#7c3aed", label: "Purple" },
  { value: "#db2777", label: "Pink" },
];

export function WhiteboardToolbar() {
  const [currentTool, setCurrentTool] = useAtom(currentToolAtom);
  const [elements, setElements] = useAtom(elementsAtom);
  const [selectedIds, setSelectedIds] = useAtom(selectedElementIdsAtom);
  const [strokeColor, setStrokeColor] = useAtom(strokeColorAtom);

  const handleConvertToPage = () => {
    if (selectedIds.size === 0) {
      alert("Please select elements to convert to a page");
      return;
    }
    
    // Simulated UI action - just show feedback
    const selectedCount = selectedIds.size;
    alert(
      `Converting ${selectedCount} element${selectedCount > 1 ? "s" : ""} to a Notion page...\n\nThis would create a new page with:\n• Screenshots of selected elements\n• Text content extraction\n• Preserved spatial layout`,
    );
  };

  const handleClear = () => {
    if (elements.length === 0) return;
    
    if (confirm("Clear entire whiteboard?")) {
      setElements([]);
      setSelectedIds(new Set());
    }
  };

  const handleColorChange = (color: string) => {
    setStrokeColor(color);
    
    if (selectedIds.size > 0) {
      setElements((prev) =>
        prev.map((el) => {
          if (!selectedIds.has(el.id)) return el;
          
          if (el.type === "rectangle" || el.type === "circle") {
            return { ...el, color, fill: undefined };
          }
          
          return { ...el, color };
        })
      );
    }
  };

  return (
    <div className="bg-elevated border-secondary absolute left-1/2 top-4 z-10 flex -translate-x-1/2 items-center gap-1 rounded-lg border px-2 py-1.5 shadow-md-outline">
      {tools.map((tool) => (
        <button
          key={tool.id}
          type="button"
          onClick={() => setCurrentTool(tool.id)}
          className={cn(
            "hover:bg-secondary-translucent flex size-8 items-center justify-center rounded-md transition-colors",
            currentTool === tool.id && "bg-blue-primary/10 text-blue-primary",
          )}
          title={tool.label}
        >
          <Icon
            icon={tool.icon}
            size={18}
            color={currentTool === tool.id ? undefined : "secondary"}
          />
        </button>
      ))}

      <Separator orientation="vertical" className="mx-1 h-6" />

      {colors.map((color) => (
        <button
          key={color.value}
          type="button"
          onClick={() => handleColorChange(color.value)}
          className={cn(
            "h-4 w-4 rounded-full cursor-pointer transition-all",
            strokeColor === color.value && "ring-2 ring-offset-1 ring-blue-500"
          )}
          style={{ backgroundColor: color.value }}
          title={color.label}
        />
      ))}

      <Separator orientation="vertical" className="mx-1 h-6" />

      <Button
        variant="ghost"
        size="xs"
        onClick={handleConvertToPage}
        disabled={selectedIds.size === 0}
        className="text-caption"
      >
        Convert to page
      </Button>

      <Button
        variant="ghost"
        size="xs"
        onClick={handleClear}
        disabled={elements.length === 0}
        className="text-caption text-tertiary"
      >
        Clear
      </Button>
    </div>
  );
}
