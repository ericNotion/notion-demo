"use client";

import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { cursorClickIcon } from "@nds-icons/cursorClick/default.icon";
import { duplicateIcon } from "@nds-icons/duplicate/default.icon";
import { lockIcon } from "@nds-icons/lock/default.icon";
import { lockOpenIcon } from "@nds-icons/lockOpen/default.icon";
import { pageIcon } from "@nds-icons/page/default.icon";
import { pencilScribbleIcon } from "@nds-icons/pencilScribble/default.icon";
import { photoIcon } from "@nds-icons/photo/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { squareDashedIcon } from "@nds-icons/squareDashed/default.icon";
import { textFormatIcon } from "@nds-icons/textFormat/default.icon";
import { trashIcon } from "@nds-icons/trash/default.icon";
import { useAtom } from "jotai";

import { objectsAtom, selectedToolAtom, type Tool } from "../atoms";

const tools: {
  id: Tool;
  label: string;
  icon: typeof cursorClickIcon;
  shortcut?: string;
}[] = [
  { id: "select", label: "Select", icon: cursorClickIcon, shortcut: "V" },
  {
    id: "rectangle",
    label: "Rectangle",
    icon: squareDashedIcon,
    shortcut: "R",
  },
  { id: "ellipse", label: "Ellipse", icon: circleIcon, shortcut: "E" },
  { id: "sticky-note", label: "Sticky Note", icon: pageIcon, shortcut: "S" },
  { id: "connector", label: "Connector", icon: plusIcon, shortcut: "L" },
  { id: "pen", label: "Pen", icon: pencilScribbleIcon, shortcut: "P" },
  { id: "text", label: "Text", icon: textFormatIcon, shortcut: "T" },
  { id: "image", label: "Image", icon: photoIcon },
  { id: "frame", label: "Frame", icon: squareDashedIcon, shortcut: "F" },
];

export function Toolbar() {
  const [selectedTool, setSelectedTool] = useAtom(selectedToolAtom);
  const [objects, setObjects] = useAtom(objectsAtom);

  const selectedObjects = objects.filter((obj) => obj.selected);
  const hasSelection = selectedObjects.length > 0;

  const handleCopy = () => {
    if (!hasSelection) return;

    const newObjects = selectedObjects.map((obj) => ({
      ...obj,
      id: `${obj.type}-${Date.now()}-${Math.random()}`,
      position: {
        x: obj.position.x + 20,
        y: obj.position.y + 20,
      },
      selected: true,
    }));

    setObjects([
      ...objects.map((obj) => ({ ...obj, selected: false })),
      ...newObjects,
    ]);
  };

  const handleDelete = () => {
    if (!hasSelection) return;
    setObjects(objects.filter((obj) => !obj.selected));
  };

  const handleLock = () => {
    if (!hasSelection) return;
    // For now, just a placeholder - would need to add locked state
    console.log("Lock/unlock not yet implemented");
  };

  return (
    <>
      {/* Main toolbar */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-lg border border-primary bg-elevated p-1 shadow-md-outline">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={cn(
              "group relative flex h-9 w-9 items-center justify-center rounded-md transition-colors",
              {
                "bg-blue-secondary text-blue-primary": selectedTool === tool.id,
                "text-secondary hover:bg-secondary hover:text-primary":
                  selectedTool !== tool.id,
              },
            )}
            title={`${tool.label}${tool.shortcut ? ` (${tool.shortcut})` : ""}`}
          >
            <Icon icon={tool.icon} className="h-5 w-5" />

            {/* Tooltip */}
            <div className="pointer-events-none absolute bottom-full mb-2 hidden whitespace-nowrap rounded-md bg-elevated px-2 py-1 text-caption text-primary shadow-md-outline group-hover:block">
              {tool.label}
              {tool.shortcut && (
                <span className="ml-2 text-tertiary">{tool.shortcut}</span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Quick actions toolbar (shows when objects are selected) */}
      {hasSelection && (
        <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-lg border border-primary bg-elevated p-1 shadow-md-outline">
          <button
            onClick={handleCopy}
            className="group relative flex h-9 w-9 items-center justify-center rounded-md text-secondary transition-colors hover:bg-secondary hover:text-primary"
            title="Duplicate (Ctrl+D)"
          >
            <Icon icon={duplicateIcon} className="h-5 w-5" />
            <div className="pointer-events-none absolute bottom-full mb-2 hidden whitespace-nowrap rounded-md bg-elevated px-2 py-1 text-caption text-primary shadow-md-outline group-hover:block">
              Duplicate
            </div>
          </button>

          <button
            onClick={handleDelete}
            className="group relative flex h-9 w-9 items-center justify-center rounded-md text-secondary transition-colors hover:bg-secondary hover:text-primary"
            title="Delete (Del)"
          >
            <Icon icon={trashIcon} className="h-5 w-5" />
            <div className="pointer-events-none absolute bottom-full mb-2 hidden whitespace-nowrap rounded-md bg-elevated px-2 py-1 text-caption text-primary shadow-md-outline group-hover:block">
              Delete
            </div>
          </button>

          <button
            onClick={handleLock}
            className="group relative flex h-9 w-9 items-center justify-center rounded-md text-secondary transition-colors hover:bg-secondary hover:text-primary"
            title="Lock/Unlock"
          >
            <Icon icon={lockOpenIcon} className="h-5 w-5" />
            <div className="pointer-events-none absolute bottom-full mb-2 hidden whitespace-nowrap rounded-md bg-elevated px-2 py-1 text-caption text-primary shadow-md-outline group-hover:block">
              Lock
            </div>
          </button>

          <div className="mx-1 h-6 w-px bg-primary" />

          <div className="px-2 text-caption text-secondary">
            {selectedObjects.length} selected
          </div>
        </div>
      )}
    </>
  );
}
