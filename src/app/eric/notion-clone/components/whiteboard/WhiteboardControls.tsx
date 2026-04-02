"use client";

import { useAtom } from "jotai";
import { Icon } from "@nds-icons";
import { magnifyingGlassPlusIcon } from "@nds-icons/magnifyingGlassPlus/default.icon";
import { plusMinusIcon } from "@nds-icons/plusMinus/default.icon";
import { arrowSquareLeftRightIcon } from "@nds-icons/arrowSquareLeftRight/default.icon";
import { Button } from "@/components/ui/button";
import { viewTransformAtom } from "./atoms";

export function WhiteboardControls() {
  const [viewTransform, setViewTransform] = useAtom(viewTransformAtom);

  const handleZoomIn = () => {
    setViewTransform((prev) => ({
      ...prev,
      scale: Math.min(prev.scale * 1.2, 3),
    }));
  };

  const handleZoomOut = () => {
    setViewTransform((prev) => ({
      ...prev,
      scale: Math.max(prev.scale / 1.2, 0.1),
    }));
  };

  const handleReset = () => {
    setViewTransform({ x: 0, y: 0, scale: 1 });
  };

  const zoomPercentage = Math.round(viewTransform.scale * 100);

  return (
    <div className="absolute right-4 bottom-4 z-10 flex items-center gap-2 bg-elevated shadow-sm-outline rounded-lg p-2">
      <Button
        variant="ghost"
        size="xs"
        className="w-8 h-8 p-0"
        onClick={handleZoomOut}
        title="Zoom out"
      >
        <Icon icon={plusMinusIcon} className="w-4 h-4" />
      </Button>

      <span className="text-body-sm text-secondary min-w-[3rem] text-center">
        {zoomPercentage}%
      </span>

      <Button
        variant="ghost"
        size="xs"
        className="w-8 h-8 p-0"
        onClick={handleZoomIn}
        title="Zoom in"
      >
        <Icon icon={magnifyingGlassPlusIcon} className="w-4 h-4" />
      </Button>

      <div className="w-px h-6 bg-border-primary" />

      <Button
        variant="ghost"
        size="xs"
        className="w-8 h-8 p-0"
        onClick={handleReset}
        title="Reset view"
      >
        <Icon icon={arrowSquareLeftRightIcon} className="w-4 h-4" />
      </Button>
    </div>
  );
}
