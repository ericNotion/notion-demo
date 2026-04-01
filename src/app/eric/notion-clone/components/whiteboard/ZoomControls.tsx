"use client";

import { Icon } from "@nds-icons";
import { magnifyingGlassPlusIcon } from "@nds-icons/magnifyingGlassPlus/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { useAtom } from "jotai";
import { viewStateAtom } from "./atoms";
import { Button } from "@/components/ui/button";

export function ZoomControls() {
  const [viewState, setViewState] = useAtom(viewStateAtom);

  const handleZoomIn = () => {
    setViewState((prev) => ({
      ...prev,
      zoom: Math.min(prev.zoom * 1.2, 5),
    }));
  };

  const handleZoomOut = () => {
    setViewState((prev) => ({
      ...prev,
      zoom: Math.max(prev.zoom / 1.2, 0.1),
    }));
  };

  const handleReset = () => {
    setViewState({
      zoom: 1,
      panX: 0,
      panY: 0,
    });
  };

  const zoomPercent = Math.round(viewState.zoom * 100);

  return (
    <div className="absolute right-6 bottom-6 flex items-center gap-2 bg-elevated shadow-md-outline rounded-lg p-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleZoomOut}
        title="Zoom Out"
      >
        <Icon icon={magnifyingGlassIcon} color="secondary" />
      </Button>
      <button
        onClick={handleReset}
        className="px-3 py-1 text-body text-secondary hover:bg-tertiary rounded-md transition-colors min-w-[60px]"
        title="Reset Zoom"
      >
        {zoomPercent}%
      </button>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleZoomIn}
        title="Zoom In"
      >
        <Icon icon={magnifyingGlassPlusIcon} color="secondary" />
      </Button>
    </div>
  );
}
