"use client";

import { useAtom } from "jotai";
import { Icon } from "@nds-icons";
import { cursorClickIcon } from "@nds-icons/cursorClick/default.icon";
import { pencilIcon } from "@nds-icons/pencil/default.icon";
import { squareDashedIcon } from "@nds-icons/squareDashed/default.icon";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { pencilLineIcon } from "@nds-icons/pencilLine/default.icon";
import { eraserLineDashedIcon } from "@nds-icons/eraserLineDashed/default.icon";
import { composeIcon } from "@nds-icons/compose/default.icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { currentToolAtom, currentColorAtom } from "./atoms";
import type { Tool } from "./types";

export function WhiteboardToolbar() {
  const [currentTool, setCurrentTool] = useAtom(currentToolAtom);
  const [currentColor, setCurrentColor] = useAtom(currentColorAtom);

  const tools: Array<{ id: Tool; icon: any; label: string }> = [
    { id: "select", icon: cursorClickIcon, label: "Select" },
    { id: "pencil", icon: pencilIcon, label: "Pencil" },
    { id: "rectangle", icon: squareDashedIcon, label: "Rectangle" },
    { id: "circle", icon: circleIcon, label: "Circle" },
    { id: "line", icon: pencilLineIcon, label: "Line" },
    { id: "eraser", icon: eraserLineDashedIcon, label: "Eraser" },
    { id: "postit", icon: composeIcon, label: "Post-it" },
  ];

  const colors = [
    { value: "#000000", label: "Black" },
    { value: "#EF4444", label: "Red" },
    { value: "#F97316", label: "Orange" },
    { value: "#EAB308", label: "Yellow" },
    { value: "#22C55E", label: "Green" },
    { value: "#3B82F6", label: "Blue" },
    { value: "#A855F7", label: "Purple" },
    { value: "#EC4899", label: "Pink" },
  ];

  return (
    <div className="absolute left-4 top-20 z-10 flex flex-col gap-2 bg-elevated shadow-md-outline rounded-lg p-2">
      <div className="flex flex-col gap-1">
        {tools.map((tool, index) => (
          <div key={tool.id}>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-10 h-10 p-0 rounded-md",
                currentTool === tool.id && "bg-tertiary"
              )}
              onClick={() => setCurrentTool(tool.id)}
              title={tool.label}
            >
              <Icon icon={tool.icon} className="w-5 h-5" />
            </Button>
            {(index === 0 || index === 5) && (
              <div className="h-px bg-border-primary my-1" />
            )}
          </div>
        ))}
      </div>

      <div className="h-px bg-border-primary" />

      <div className="grid grid-cols-4 gap-1 p-1">
        {colors.map((color) => (
          <button
            key={color.value}
            className={cn(
              "w-6 h-6 rounded border-2 transition-all hover:scale-110",
              currentColor === color.value
                ? "border-primary"
                : "border-transparent"
            )}
            style={{ backgroundColor: color.value }}
            onClick={() => setCurrentColor(color.value)}
            title={color.label}
          />
        ))}
      </div>
    </div>
  );
}
