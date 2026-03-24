"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowChevronSingleDownSmallIcon } from "@nds-icons/arrowChevronSingleDown/small.icon";
import { arrowUpDownSmallIcon } from "@nds-icons/arrowUpDown/small.icon";
import { docPlainTextIcon } from "@nds-icons/docPlainText/default.icon";
import { filterSmallIcon } from "@nds-icons/filter/small.icon";
import { lightningSmallIcon } from "@nds-icons/lightning/small.icon";
import { magnifyingGlassSmallIcon } from "@nds-icons/magnifyingGlass/small.icon";
import { slidersSmallIcon } from "@nds-icons/sliders/small.icon";
import { viewBoardIcon } from "@nds-icons/viewBoard/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";

interface CollectionsViewHeaderProps {
  views: string[];
  className?: string;
  activeView?: string;
  onViewChange?: (view: string) => void;
}

export function CollectionsViewHeader({
  views,
  className,
  activeView = "Table",
  onViewChange,
}: CollectionsViewHeaderProps) {
  return (
    <div
      className={cn(
        "my-1 ml-0.5 flex w-full items-center justify-between py-2",
        className,
      )}
    >
      {/* Left group: dynamic views */}
      <div className="flex grow-1 items-center gap-px overflow-auto">
        {views.map((view) => {
          const isActive = activeView === view;
          return (
            <div
              key={view}
              onClick={() => onViewChange?.(view)}
              className={cn(
                "flex h-8 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-base font-medium text-neutral-500 hover:bg-neutral-100",
                isActive && "text-default bg-neutral-100",
              )}
            >
              {/* Add icons based on view name */}
              {view === "Table" && (
                <Icon
                  icon={viewTableIcon}
                  className={cn("h-5 w-5", !isActive && "opacity-60")}
                />
              )}
              {view === "Board" && (
                <Icon
                  icon={viewBoardIcon}
                  className={cn("h-5 w-5", !isActive && "opacity-60")}
                />
              )}
              {view === "Form" && (
                <Icon
                  icon={docPlainTextIcon}
                  className={cn("h-5 w-5", !isActive && "opacity-60")}
                />
              )}
              <span className="text-sm">{view}</span>
            </div>
          );
        })}
      </div>
      {/* Right group */}
      <div className="flex flex-shrink-0 items-center gap-2.5">
        <Icon icon={filterSmallIcon} size="sm" className="opacity-60" />
        <Icon icon={arrowUpDownSmallIcon} size="sm" className="opacity-60" />
        <Icon icon={lightningSmallIcon} size="sm" className="opacity-60" />
        <Icon
          icon={magnifyingGlassSmallIcon}
          size="sm"
          className="opacity-60"
        />
        <Icon icon={slidersSmallIcon} size="sm" className="opacity-60" />
        <Button variant="primary" className="ml-1">
          <span>New</span>
          <Icon
            icon={arrowChevronSingleDownSmallIcon}
            size="xs"
            color="inversePrimary"
          />
        </Button>
      </div>
    </div>
  );
}
