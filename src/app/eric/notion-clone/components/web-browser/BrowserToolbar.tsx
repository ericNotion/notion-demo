"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@nds-icons";
import { arrowChevronSingleLeftIcon } from "@nds-icons/arrowChevronSingleLeft/default.icon";
import { arrowChevronSingleRightIcon } from "@nds-icons/arrowChevronSingleRight/default.icon";
import { arrowCircleSpinClockwiseIcon } from "@nds-icons/arrowCircleSpinClockwise/default.icon";
import { globeIcon } from "@nds-icons/globe/default.icon";
import { xMarkIcon } from "@nds-icons/xMark/default.icon";
import { cn } from "@/utils/cn";

interface BrowserToolbarProps {
  url: string;
  onClose?: () => void;
  onBack?: () => void;
  onForward?: () => void;
  onRefresh?: () => void;
  canGoBack?: boolean;
  canGoForward?: boolean;
}

export function BrowserToolbar({
  url,
  onClose,
  onBack,
  onForward,
  onRefresh,
  canGoBack = true,
  canGoForward = false,
}: BrowserToolbarProps) {
  return (
    <div className="flex items-center gap-2 border-b border-primary bg-elevated px-3 py-2">
      {/* Navigation Controls */}
      <div className="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          disabled={!canGoBack}
          className={cn(!canGoBack && "opacity-40")}
        >
          <Icon icon={arrowChevronSingleLeftIcon} color="secondary" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onForward}
          disabled={!canGoForward}
          className={cn(!canGoForward && "opacity-40")}
        >
          <Icon icon={arrowChevronSingleRightIcon} color="secondary" />
        </Button>
        <Button variant="ghost" size="sm" onClick={onRefresh}>
          <Icon icon={arrowCircleSpinClockwiseIcon} color="secondary" />
        </Button>
      </div>

      {/* URL Bar */}
      <div className="flex flex-1 items-center gap-2 rounded-md border border-primary bg-primary px-3 py-1.5 transition-colors hover:border-strong">
        <Icon icon={globeIcon} color="tertiary" size="sm" />
        <input
          type="text"
          value={url}
          readOnly
          className="flex-1 bg-transparent text-body text-primary outline-none placeholder:text-tertiary"
          placeholder="Enter URL..."
        />
      </div>

      {/* Close Button */}
      <Button variant="ghost" size="sm" onClick={onClose}>
        <Icon icon={xMarkIcon} color="secondary" />
      </Button>
    </div>
  );
}
