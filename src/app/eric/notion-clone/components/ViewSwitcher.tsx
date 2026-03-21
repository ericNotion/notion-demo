"use client";

import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { filterIcon } from "@nds-icons/filter/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
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
  { id: "table" as const, icon: viewTableIcon, label: "Table" },
  { id: "board" as const, icon: viewBoardIcon, label: "Board" },
];

export function ViewSwitcher({
  activeView,
  onViewChange,
  onFilterClick,
  filterActive,
}: ViewSwitcherProps) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--theme-colors-border-primary)] pb-0">
      <div className="flex items-center gap-0.5">
        {views.map((view) => (
          <button
            key={view.id}
            type="button"
            onClick={() => onViewChange(view.id)}
            className={cn(
              "flex items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors",
              activeView === view.id
                ? "text-primary border-current"
                : "text-tertiary hover:text-secondary border-transparent",
            )}
          >
            <Icon
              icon={view.icon}
              size={16}
              color={activeView === view.id ? "primary" : "tertiary"}
            />
            {view.label}
          </button>
        ))}
      </div>
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
          <Icon icon={magnifyingGlassIcon} size={16} color="secondary" />
        </IconButton>
      </div>
    </div>
  );
}
