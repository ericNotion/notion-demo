"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Icon } from "@nds-icons";
import { questionMarkCircleIcon } from "@nds-icons/questionMarkCircle/default.icon";
import { useState } from "react";

export function WhiteboardHelp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-elevated border-secondary hover:bg-secondary-translucent absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full border shadow-md-outline transition-colors"
        title="Keyboard shortcuts"
      >
        <Icon icon={questionMarkCircleIcon} size={20} color="secondary" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Keyboard shortcuts</DialogTitle>
            <DialogDescription>
              Shortcuts and controls for the whiteboard
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <h4 className="text-primary mb-2 text-sm font-semibold">Tools</h4>
              <div className="space-y-1.5">
                <ShortcutRow label="Select" shortcut="V or 1" />
                <ShortcutRow label="Draw" shortcut="D or 2" />
                <ShortcutRow label="Rectangle" shortcut="R or 3" />
                <ShortcutRow label="Circle" shortcut="C or 4" />
                <ShortcutRow label="Arrow" shortcut="A or 5" />
                <ShortcutRow label="Text" shortcut="T or 6" />
                <ShortcutRow label="Eraser" shortcut="E or 7" />
              </div>
            </div>

            <div>
              <h4 className="text-primary mb-2 text-sm font-semibold">Canvas</h4>
              <div className="space-y-1.5">
                <ShortcutRow label="Pan" shortcut="⌘ + Drag or Middle click" />
                <ShortcutRow label="Zoom" shortcut="⌘ + Scroll" />
                <ShortcutRow label="Select all" shortcut="⌘ A" />
                <ShortcutRow label="Delete selected" shortcut="Delete or Backspace" />
              </div>
            </div>

            <div>
              <h4 className="text-primary mb-2 text-sm font-semibold">Selection</h4>
              <div className="space-y-1.5">
                <ShortcutRow label="Multi-select" shortcut="Shift + Click" />
                <ShortcutRow label="Deselect all" shortcut="Click empty area" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function ShortcutRow({ label, shortcut }: { label: string; shortcut: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-secondary">{label}</span>
      <kbd className="bg-secondary text-tertiary rounded-xs px-1.5 py-0.5 font-mono text-xs">
        {shortcut}
      </kbd>
    </div>
  );
}
