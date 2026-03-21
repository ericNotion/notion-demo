"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Icon, type LoadedIconFunction } from "@nds-icons";
import { arrowExpandDiagonalIcon } from "@nds-icons/arrowExpandDiagonal/default.icon";
import { arrowUpDownIcon } from "@nds-icons/arrowUpDown/default.icon";
import { filterIcon } from "@nds-icons/filter/default.icon";
import { gearIcon } from "@nds-icons/gear/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";

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
  className?: string;
}

export function ReusableDatabase<T extends { id: string }>({
  title,
  icon,
  columns,
  data,
  onNew,
  className = "",
}: ReusableDatabaseProps<T>) {
  return (
    <div className={`mt-12 ${className}`}>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <Icon icon={icon} size={20} />}
          <h2 className="text-primary text-xl font-semibold">{title}</h2>
        </div>
        <div className="flex items-center gap-1">
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
          <Button variant="primary" onClick={onNew}>
            New
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Embedded database container with proper styling */}
      <div className="bg-primary border-primary rounded-lg border shadow-sm">
        {/* Table */}
        <div className="overflow-hidden">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="border-primary border-b">
                {columns.map((column) => (
                  <th
                    key={column.id}
                    className={`text-secondary hover:bg-secondary/50 h-8 cursor-pointer px-3 text-left text-sm font-normal ${column.width || ""}`}
                  >
                    <span>{column.label}</span>
                  </th>
                ))}
                <th
                  className="text-secondary h-8 w-20 px-2 text-left text-sm font-normal"
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
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  className="group border-primary hover:bg-secondary/50 border-b"
                >
                  {columns.map((column) => (
                    <td
                      key={column.id}
                      className="border-primary h-9 border-r px-3"
                    >
                      {column.render(row)}
                    </td>
                  ))}

                  {/* Actions Column */}
                  <td className="h-9 px-3 text-center" colSpan={2}>
                    {/* Empty - no icons in rows */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* New Page Button */}
          <div className="px-3 py-2">
            <button
              className="text-tertiary hover:bg-secondary/50 flex items-center gap-1 rounded px-2 py-1 text-sm"
              onClick={onNew}
            >
              <span>+</span>
              <span>New page</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
