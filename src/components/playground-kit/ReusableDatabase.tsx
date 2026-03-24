"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon, type LoadedIconFunction } from "@nds-icons";
import { arrowChevronSingleDownIcon } from "@nds-icons/arrowChevronSingleDown/default.icon";
import { arrowExpandDiagonalIcon } from "@nds-icons/arrowExpandDiagonal/default.icon";
import { arrowUpDownIcon } from "@nds-icons/arrowUpDown/default.icon";
import { filterIcon } from "@nds-icons/filter/default.icon";
import { gearIcon } from "@nds-icons/gear/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";

export type DatabaseViewTab = {
  id: string;
  label: string;
  icon?: LoadedIconFunction;
};

export type ColumnType =
  | "text"
  | "number"
  | "date"
  | "select"
  | "multi-select"
  | "person"
  | "formula"
  | "relation"
  | "rollup"
  | "checkbox"
  | "url"
  | "email"
  | "phone"
  | "files"
  | "location"
  | "custom";

interface EditPropertyOption {
  id: string;
  label: string;
  selected?: boolean;
}

export interface EditPropertySection {
  title: string;
  options: EditPropertyOption[];
}

export interface ColumnConfig {
  // For properties that need configuration (e.g., weather needs date + zipcode)
  dependencies?: { id: string; label: string; type: ColumnType }[];
  customConfig?: Record<string, any>;
  isConfigured?: (config: any) => boolean;
  configComponent?: React.ComponentType<any>;
}

export interface Column<T> {
  id: string;
  type?: ColumnType; // Add type to enable filtering
  label: React.ReactNode;
  labelText?: string; // Plain text version for the menu
  icon?: any;
  width?: string; // e.g., "w-72", "w-28"
  render: (row: T, config?: any) => React.ReactNode;
  editPropertySections?: EditPropertySection[];
  requiresConfiguration?: boolean; // Flag for properties like weather
  configuration?: ColumnConfig; // Configuration metadata
}

interface ReusableDatabaseProps<T> {
  title: string;
  icon?: LoadedIconFunction;
  columns: Column<T>[];
  data: T[];
  onNew?: () => void;
  onRowClick?: (row: T) => void;
  className?: string;
  compact?: boolean;
  showHeader?: boolean;
  showTitle?: boolean;
  headerLeft?: React.ReactNode;
}

const defaultViews: DatabaseViewTab[] = [
  { id: "table", label: "Table", icon: viewTableIcon },
];

export function DatabaseToolbar({
  views = defaultViews,
  activeView,
  onViewChange,
  onNew,
  compact = false,
  className,
}: {
  views?: DatabaseViewTab[];
  activeView?: string;
  onViewChange?: (id: string) => void;
  onNew?: () => void;
  compact?: boolean;
  className?: string;
}) {
  const iconSize = compact ? 14 : undefined;
  const current = activeView ?? views[0]?.id;
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2",
        compact ? "mb-1" : "mb-3",
        className,
      )}
    >
      <div className="flex items-center gap-1">
        {views.map((view) => (
          <button
            key={view.id}
            type="button"
            onClick={() => onViewChange?.(view.id)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors",
              current === view.id
                ? "bg-tertiary text-primary"
                : "text-secondary hover:text-primary hover:bg-tertiary-translucent",
            )}
          >
            {view.icon && (
              <Icon
                icon={view.icon}
                size={14}
                color={current === view.id ? "primary" : "secondary"}
              />
            )}
            {view.label}
          </button>
        ))}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center",
          compact ? "gap-0.5" : "gap-1",
        )}
      >
        <IconButton size={compact ? "xs" : undefined}>
          <Icon icon={filterIcon} color="secondary" size={iconSize} />
        </IconButton>
        <IconButton size={compact ? "xs" : undefined}>
          <Icon icon={arrowUpDownIcon} color="secondary" size={iconSize} />
        </IconButton>
        <IconButton size={compact ? "xs" : undefined}>
          <Icon icon={magnifyingGlassIcon} color="secondary" size={iconSize} />
        </IconButton>
        <IconButton size={compact ? "xs" : undefined}>
          <Icon
            icon={arrowExpandDiagonalIcon}
            color="secondary"
            size={iconSize}
          />
        </IconButton>
        <IconButton size={compact ? "xs" : undefined}>
          <Icon icon={gearIcon} color="secondary" size={iconSize} />
        </IconButton>
        <Button variant="primary" size="sm" className="gap-0.5" onClick={onNew}>
          <span>New</span>
          <Icon
            icon={arrowChevronSingleDownIcon}
            size={compact ? 10 : 12}
            color="white"
            className="opacity-80"
          />
        </Button>
      </div>
    </div>
  );
}

export function ReusableDatabase<T extends { id: string }>({
  title,
  icon,
  columns,
  data,
  onNew,
  onRowClick,
  className = "",
  compact = false,
  showHeader = true,
  showTitle = true,
  headerLeft,
}: ReusableDatabaseProps<T>) {
  return (
    <div
      className={cn(
        !compact && showHeader && !headerLeft && "mt-12",
        className,
      )}
    >
      {showHeader && (
        <div
          className={cn(
            "flex items-center justify-between gap-2",
            compact ? "mb-2" : "mb-3",
          )}
        >
          {headerLeft ? (
            headerLeft
          ) : showTitle ? (
            <div className="flex items-center gap-2">
              {icon && <Icon icon={icon} size={compact ? 16 : 20} />}
              <h2
                className={cn(
                  "text-primary font-semibold",
                  compact ? "text-sm" : "text-xl",
                )}
              >
                {title}
              </h2>
            </div>
          ) : (
            <div />
          )}
          <div className="flex shrink-0 items-center gap-1">
            <IconButton>
              <Icon icon={filterIcon} color="secondary" />
            </IconButton>
            <IconButton>
              <Icon icon={arrowUpDownIcon} color="secondary" />
            </IconButton>
            <IconButton>
              <Icon icon={magnifyingGlassIcon} color="secondary" />
            </IconButton>
            <IconButton>
              <Icon icon={arrowExpandDiagonalIcon} color="secondary" />
            </IconButton>
            <IconButton>
              <Icon icon={gearIcon} color="secondary" />
            </IconButton>
            <Button
              variant="primary"
              size={compact ? "sm" : "md"}
              className="gap-0.5"
              onClick={onNew}
            >
              <span>New</span>
              <Icon
                icon={arrowChevronSingleDownIcon}
                size={compact ? 10 : 12}
                color="white"
                className="opacity-80"
              />
            </Button>
          </div>
        </div>
      )}

      <div className="overflow-hidden">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="border-primary border-b">
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={cn(
                    "text-secondary hover:bg-secondary-translucent cursor-pointer text-left font-normal",
                    compact ? "text-caption h-7 px-2" : "h-8 px-3 text-sm",
                    column.width,
                  )}
                >
                  <span>{column.label}</span>
                </th>
              ))}
              {!compact && (
                <th
                  className="text-secondary h-8 w-20 px-2 text-left font-normal"
                  colSpan={2}
                >
                  <div className="flex items-center gap-0.5">
                    <IconButton>
                      <Icon icon={plusIcon} color="secondary" size={16} />
                    </IconButton>
                    <IconButton>
                      <span className="text-secondary text-xl">⋯</span>
                    </IconButton>
                  </div>
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  "group border-primary hover:bg-secondary-translucent border-b",
                  onRowClick && "cursor-pointer",
                )}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td
                    key={column.id}
                    className={cn(
                      compact ? "h-8 px-2 py-1" : "h-9 px-3 py-1.5",
                    )}
                  >
                    <div className="min-w-0">{column.render(row)}</div>
                  </td>
                ))}

                {!compact && (
                  <td className="h-9 px-3 text-center" colSpan={2} />
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className={compact ? "px-2 py-1" : "px-3 py-2"}>
          <button
            className={cn(
              "text-tertiary hover:bg-secondary-translucent flex items-center gap-1 rounded px-2",
              compact ? "py-0.5 text-xs" : "py-1 text-sm",
            )}
            onClick={onNew}
          >
            <span>+</span>
            <span>New page</span>
          </button>
        </div>
      </div>
    </div>
  );
}
