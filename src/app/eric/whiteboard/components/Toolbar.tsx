"use client";

import { Icon } from "@nds-icons";
import { duplicateIcon } from "@nds-icons/duplicate/default.icon";
import { mapIcon } from "@nds-icons/map/default.icon";
import { peekCenterIcon } from "@nds-icons/peekCenter/default.icon";
import { squareAndArrowDownIcon } from "@nds-icons/squareAndArrowDown/default.icon";
import { templatesIcon } from "@nds-icons/templates/default.icon";
import { useAtom } from "jotai";

import { PlaygroundButton } from "@/components/playground-kit";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/utils/cn";

import { elementsAtom, isMinimapVisibleAtom, selectedToolAtom } from "../atoms";
import { copySelectionAsImage, exportCanvas } from "../lib/export";
import type { ExportFormat } from "../types";

interface ToolbarProps {
  canvasRef: React.RefObject<HTMLDivElement>;
  onFitToView: () => void;
  onSelectTemplate: () => void;
  isMobile?: boolean;
}

export function Toolbar({
  canvasRef,
  onFitToView,
  onSelectTemplate,
  isMobile = false,
}: ToolbarProps) {
  const [selectedTool] = useAtom(selectedToolAtom);
  const [isMinimapVisible, setIsMinimapVisible] = useAtom(isMinimapVisibleAtom);
  const [elements] = useAtom(elementsAtom);

  const handleExport = async (format: ExportFormat) => {
    await exportCanvas(elements, format, canvasRef.current);
  };

  const handleCopyAsImage = async () => {
    await copySelectionAsImage(elements, canvasRef.current);
  };

  if (isMobile) {
    return (
      <div
        className={cn(
          "fixed left-1/2 top-4 z-40 -translate-x-1/2",
          "flex items-center gap-1 p-1",
          "rounded-lg border border-border-primary bg-bg-elevated",
          "shadow-md-outline",
        )}
      >
        <PlaygroundButton
          variant="ghost"
          size="sm"
          onClick={onSelectTemplate}
          aria-label="Templates"
        >
          <Icon icon={templatesIcon} />
        </PlaygroundButton>

        <PlaygroundButton
          variant="ghost"
          size="sm"
          onClick={onFitToView}
          aria-label="Fit to view"
        >
          <Icon icon={peekCenterIcon} />
        </PlaygroundButton>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <PlaygroundButton variant="ghost" size="sm" aria-label="Export">
              <Icon icon={squareAndArrowDownIcon} />
            </PlaygroundButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleExport("png")}>
              Export as PNG
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleExport("svg")}>
              Export as SVG
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleExport("pdf")}>
              Export as PDF
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "fixed left-1/2 top-4 z-40 -translate-x-1/2",
        "flex items-center gap-2 px-3 py-2",
        "rounded-lg border border-border-primary bg-bg-elevated",
        "shadow-md-outline",
      )}
    >
      {/* Templates */}
      <PlaygroundButton
        variant="ghost"
        size="sm"
        onClick={onSelectTemplate}
        className="gap-2"
      >
        <Icon icon={templatesIcon} />
        <span className="text-body">Templates</span>
      </PlaygroundButton>

      <div className="h-6 w-px bg-border-primary" />

      {/* Fit to view */}
      <PlaygroundButton
        variant="ghost"
        size="sm"
        onClick={onFitToView}
        className="gap-2"
      >
        <Icon icon={peekCenterIcon} />
        <span className="text-body">Fit to view</span>
      </PlaygroundButton>

      <div className="h-6 w-px bg-border-primary" />

      {/* Export */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <PlaygroundButton variant="ghost" size="sm" className="gap-2">
            <Icon icon={squareAndArrowDownIcon} />
            <span className="text-body">Export</span>
          </PlaygroundButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleExport("png")}>
            Export as PNG
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExport("svg")}>
            Export as SVG
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExport("pdf")}>
            Export as PDF
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleCopyAsImage}>
            Copy as image
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="h-6 w-px bg-border-primary" />

      {/* Toggle minimap */}
      <PlaygroundButton
        variant={isMinimapVisible ? "ghost" : "plain"}
        size="sm"
        onClick={() => setIsMinimapVisible(!isMinimapVisible)}
        className="gap-2"
      >
        <Icon icon={mapIcon} />
        <span className="text-body">Minimap</span>
      </PlaygroundButton>
    </div>
  );
}
