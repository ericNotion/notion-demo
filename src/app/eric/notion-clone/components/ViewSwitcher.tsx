"use client";

import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";

export type ViewType = "table" | "board";

interface ViewSwitcherProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const views = [
  { id: "table" as const, icon: starIcon, label: "All Tasks" },
  { id: "board" as const, icon: circleIcon, label: "By Status" },
];

export function ViewSwitcher({
  activeView,
  onViewChange,
}: ViewSwitcherProps) {
  return (
    <div className="flex items-center gap-1 py-0.5">
      {views.map((view) => (
        <button
          key={view.id}
          type="button"
          onClick={() => onViewChange(view.id)}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors",
            activeView === view.id
              ? "bg-tertiary text-primary"
              : "text-secondary hover:text-primary hover:bg-tertiary-translucent",
          )}
        >
          <Icon
            icon={view.icon}
            size={14}
            color={activeView === view.id ? "primary" : "secondary"}
          />
          {view.label}
        </button>
      ))}
    </div>
  );
}
