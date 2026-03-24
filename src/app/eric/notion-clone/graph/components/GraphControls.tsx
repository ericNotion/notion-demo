import { Button } from "@/components/ui/button";
import { Icon } from "@nds-icons";
import { magnifyingGlassPlusIcon } from "@nds-icons/magnifyingGlassPlus/default.icon";
import { magnifyingGlassMinusIcon } from "@nds-icons/magnifyingGlassMinus/default.icon";
import { arrowExpandDiagonalIcon } from "@nds-icons/arrowExpandDiagonal/default.icon";

type GraphControlsProps = {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFitView: () => void;
  scale: number;
};

export function GraphControls({
  onZoomIn,
  onZoomOut,
  onFitView,
  scale,
}: GraphControlsProps) {
  return (
    <div className="absolute right-4 bottom-4 flex flex-col gap-1 rounded-md border border-primary bg-elevated p-1 shadow-md-outline">
      <Button
        variant="ghost"
        size="sm"
        onClick={onZoomIn}
        aria-label="Zoom in"
        className="h-8 w-8 p-0"
        disabled={scale >= 2}
      >
        <Icon icon={magnifyingGlassPlusIcon} size={16} color="secondary" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onZoomOut}
        aria-label="Zoom out"
        className="h-8 w-8 p-0"
        disabled={scale <= 0.3}
      >
        <Icon icon={magnifyingGlassMinusIcon} size={16} color="secondary" />
      </Button>
      <div className="border-primary my-0.5 h-px border-t" />
      <Button
        variant="ghost"
        size="sm"
        onClick={onFitView}
        aria-label="Fit to view"
        className="h-8 w-8 p-0"
      >
        <Icon icon={arrowExpandDiagonalIcon} size={16} color="secondary" />
      </Button>
    </div>
  );
}
