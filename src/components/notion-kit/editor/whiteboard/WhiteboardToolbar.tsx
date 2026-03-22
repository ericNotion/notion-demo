"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowUTurnUpLeftIcon } from "@nds-icons/arrowUTurnUpLeft/default.icon";
import { arrowUTurnDownLeftIcon } from "@nds-icons/arrowUTurnDownLeft/default.icon";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { cursorClickIcon } from "@nds-icons/cursorClick/default.icon";
import { pencilIcon } from "@nds-icons/pencil/default.icon";
import { rectangleSplit4Icon } from "@nds-icons/rectangleSplit4/default.icon";
import { textAlignLeftIcon } from "@nds-icons/textAlignLeft/default.icon";
import { trashIcon } from "@nds-icons/trash/default.icon";
import { useAtom } from "jotai";
import { whiteboardColorAtom, whiteboardToolAtom } from "./atoms";
import { NOTION_COLORS, type Tool } from "./types";

interface WhiteboardToolbarProps {
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const toolIcons: Record<Tool, typeof pencilIcon> = {
  select: cursorClickIcon,
  pen: pencilIcon,
  rectangle: rectangleSplit4Icon,
  ellipse: circleIcon,
  text: textAlignLeftIcon,
  eraser: trashIcon,
};

const toolLabels: Record<Tool, string> = {
  select: "Select",
  pen: "Draw",
  rectangle: "Rectangle",
  ellipse: "Ellipse",
  text: "Text",
  eraser: "Eraser",
};

export function WhiteboardToolbar({
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}: WhiteboardToolbarProps) {
  const [selectedTool, setSelectedTool] = useAtom(whiteboardToolAtom);
  const [selectedColor, setSelectedColor] = useAtom(whiteboardColorAtom);

  const tools: Tool[] = ["select", "pen", "rectangle", "ellipse", "text", "eraser"];

  return (
    <div className="bg-secondary shadow-sm-outline flex items-center gap-1 rounded-md border border-primary p-1">
      {/* Tools */}
      <div className="flex items-center gap-0.5">
        {tools.map((tool) => (
          <Button
            key={tool}
            variant="ghost"
            size="icon-sm"
            onClick={() => setSelectedTool(tool)}
            className={cn(
              "size-7",
              selectedTool === tool && "bg-tertiary",
            )}
            aria-label={toolLabels[tool]}
          >
            <Icon icon={toolIcons[tool]} size={16} color="secondary" />
          </Button>
        ))}
      </div>

      {/* Divider */}
      <div className="border-primary mx-1 h-5 w-px border-l" />

      {/* Color picker */}
      <div className="flex items-center gap-1">
        {NOTION_COLORS.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => setSelectedColor(color)}
            className={cn(
              "size-5 rounded-sm border-2 transition-all hover:scale-110",
              selectedColor === color
                ? "border-blue-accent-primary"
                : "border-transparent",
            )}
            style={{ backgroundColor: color }}
            aria-label={`Color ${color}`}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="border-primary mx-1 h-5 w-px border-l" />

      {/* Undo/Redo */}
      <div className="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onUndo}
          disabled={!canUndo}
          className="size-7"
          aria-label="Undo"
        >
          <Icon icon={arrowUTurnUpLeftIcon} size={16} color="secondary" />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onRedo}
          disabled={!canRedo}
          className="size-7"
          aria-label="Redo"
        >
          <Icon icon={arrowUTurnDownLeftIcon} size={16} color="secondary" />
        </Button>
      </div>
    </div>
  );
}
