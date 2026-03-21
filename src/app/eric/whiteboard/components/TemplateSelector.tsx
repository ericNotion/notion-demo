"use client";

import { useAtom } from "jotai";

import { PlaygroundButton } from "@/components/playground-kit";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/utils/cn";

import { elementsAtom } from "../atoms";
import { templates } from "../templates/templates";
import type { WhiteboardElement } from "../types";

interface TemplateSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TemplateSelector({
  open,
  onOpenChange,
}: TemplateSelectorProps) {
  const [, setElements] = useAtom(elementsAtom);

  const handleSelectTemplate = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId);
    if (!template) return;

    const newElements: WhiteboardElement[] = template.elements.map(
      (el, index) => ({
        ...el,
        id: `${templateId}-${index}-${Date.now()}`,
      }),
    );

    setElements(newElements);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Choose a template</DialogTitle>
        </DialogHeader>

        <div className="mt-4 grid grid-cols-2 gap-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleSelectTemplate(template.id)}
              className={cn(
                "group relative cursor-pointer rounded-lg border border-border-primary p-6 text-left",
                "bg-bg-secondary hover:bg-bg-tertiary",
                "transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-blue-500",
              )}
            >
              <div className="flex items-start gap-3">
                <div className="text-4xl">{template.preview}</div>
                <div className="flex-1">
                  <h3 className="text-body-lg mb-1 font-semibold text-text-primary">
                    {template.name}
                  </h3>
                  <p className="text-body text-text-secondary">
                    {template.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                <PlaygroundButton
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Use template
                </PlaygroundButton>
              </div>
            </button>
          ))}
        </div>

        {/* Blank canvas option */}
        <button
          onClick={() => {
            setElements([]);
            onOpenChange(false);
          }}
          className={cn(
            "w-full cursor-pointer rounded-lg border border-border-primary p-4 text-center",
            "bg-bg-secondary hover:bg-bg-tertiary",
            "transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
          )}
        >
          <span className="text-body font-medium text-text-primary">
            Start with blank canvas
          </span>
        </button>
      </DialogContent>
    </Dialog>
  );
}
