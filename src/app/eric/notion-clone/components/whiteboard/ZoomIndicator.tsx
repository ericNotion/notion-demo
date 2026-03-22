"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@nds-icons";
import { dashIcon } from "@nds-icons/dash/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { useAtom } from "jotai";
import { viewportAtom } from "./atoms";

export function ZoomIndicator() {
  const [viewport, setViewport] = useAtom(viewportAtom);

  const handleZoomIn = () => {
    setViewport((prev) => ({
      ...prev,
      scale: Math.min(5, prev.scale * 1.2),
    }));
  };

  const handleZoomOut = () => {
    setViewport((prev) => ({
      ...prev,
      scale: Math.max(0.1, prev.scale / 1.2),
    }));
  };

  const handleResetZoom = () => {
    setViewport({
      offsetX: 0,
      offsetY: 0,
      scale: 1,
    });
  };

  const zoomPercentage = Math.round(viewport.scale * 100);

  return (
    <div className="bg-elevated border-secondary absolute bottom-4 left-4 flex items-center gap-1 rounded-lg border px-1.5 py-1 shadow-md-outline">
      <Button variant="ghost" size="xs" onClick={handleZoomOut}>
        <Icon icon={dashIcon} size={14} color="secondary" />
      </Button>

      <button
        type="button"
        onClick={handleResetZoom}
        className="hover:bg-secondary-translucent text-secondary min-w-[48px] rounded-md px-2 py-1 text-xs font-medium transition-colors"
      >
        {zoomPercentage}%
      </button>

      <Button variant="ghost" size="xs" onClick={handleZoomIn}>
        <Icon icon={plusIcon} size={14} color="secondary" />
      </Button>
    </div>
  );
}
