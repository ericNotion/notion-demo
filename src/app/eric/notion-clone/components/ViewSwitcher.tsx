"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowChevronSingleDownIcon } from "@nds-icons/arrowChevronSingleDown/default.icon";
import { arrowExpandDiagonalIcon } from "@nds-icons/arrowExpandDiagonal/default.icon";
import { arrowUpDownIcon } from "@nds-icons/arrowUpDown/default.icon";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { filterIcon } from "@nds-icons/filter/default.icon";
import { lightningIcon } from "@nds-icons/lightning/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { personIcon } from "@nds-icons/person/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { slidersIcon } from "@nds-icons/sliders/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";
import { viewBoardIcon } from "@nds-icons/viewBoard/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";

export type ViewType = "table" | "board";

interface ViewSwitcherProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
  onFilterClick?: () => void;
  filterActive?: boolean;
}

const views = [
  { id: "table" as const, icon: starIcon, label: "All Tasks" },
  { id: "board" as const, icon: circleIcon, label: "By Status" },
];

export function ViewSwitcher({
  activeView,
  onViewChange,
  onFilterClick,
  filterActive,
}: ViewSwitcherProps) {
  return (
    <div className="flex flex-col border-b border-[var(--theme-colors-border-primary)]">
      {/* View tabs row */}
      <div className="flex items-center gap-1 px-2 py-1.5">
        {views.map((view) => (
          <Button
            key={view.id}
            variant="ghost"
            shape="pill"
            size="sm"
            onClick={() => onViewChange(view.id)}
            className={cn(
              "h-7 gap-1.5 px-3 transition-colors",
              activeView === view.id
                ? "bg-tertiary text-primary"
                : "text-secondary hover:text-primary",
            )}
          >
            <Icon
              icon={view.icon}
              size={14}
              color={activeView === view.id ? "primary" : "secondary"}
            />
            {view.label}
          </Button>
        ))}
      </div>

      {/* Toolbar row */}
      <div className="flex items-center justify-between px-2 py-1.5">
        <div className="flex items-center gap-0.5">
          <IconButton
            variant="ghost"
            size="sm"
            onClick={onFilterClick}
            className={cn(filterActive && "text-blue-500")}
          >
            <Icon
              icon={filterIcon}
              size={16}
              color={filterActive ? "bluePrimary" : "secondary"}
            />
          </IconButton>
          <IconButton variant="ghost" size="sm">
            <Icon icon={arrowUpDownIcon} size={16} color="secondary" />
          </IconButton>
          <IconButton variant="ghost" size="sm">
            <Icon icon={lightningIcon} size={16} color="secondary" />
          </IconButton>
          <IconButton variant="ghost" size="sm">
            <Icon icon={magnifyingGlassIcon} size={16} color="secondary" />
          </IconButton>
          <IconButton variant="ghost" size="sm">
            <Icon icon={arrowExpandDiagonalIcon} size={16} color="secondary" />
          </IconButton>
          <IconButton variant="ghost" size="sm">
            <Icon icon={slidersIcon} size={16} color="secondary" />
          </IconButton>
        </div>

        {/* New button on the right */}
        <Button
          variant="primary"
          shape="pill"
          size="sm"
          className="h-7 gap-1 px-3"
        >
          <Icon icon={plusIcon} size={14} color="white" />
          New
          <Icon icon={arrowChevronSingleDownIcon} size={12} color="white" />
        </Button>
      </div>
    </div>
  );
}
