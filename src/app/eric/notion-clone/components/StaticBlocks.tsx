"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowDiagonalUpRightIcon } from "@nds-icons/arrowDiagonalUpRight/default.icon";
import { arrowUpDownIcon } from "@nds-icons/arrowUpDown/default.icon";
import { calendarAltIcon } from "@nds-icons/calendarAlt/default.icon";
import { circleIcon } from "@nds-icons/circle/default.icon";
import { filterIcon } from "@nds-icons/filter/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { personIcon } from "@nds-icons/person/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { slidersIcon } from "@nds-icons/sliders/default.icon";
import { textNormalIcon } from "@nds-icons/textNormal/default.icon";
import Link from "next/link";

export function CalloutBlock({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rainbow-card bg-secondary neon-glow my-2 flex gap-3 rounded-lg px-4 py-3">
      <span className="shrink-0 text-lg">{icon}</span>
      <div className="text-primary text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

export function DividerBlock() {
  return <hr className="border-primary my-4 border-t" />;
}

interface InlineDatabaseBlockProps {
  title: string;
  emoji: string;
  href: string;
  headers: string[];
  rows: string[][];
}

// Status color mapping
const statusColors: Record<string, string> = {
  "In review": "bg-blue-secondary text-blue-accent-primary",
  "On track": "bg-green-secondary text-green-primary",
  Blocked: "bg-red-secondary text-red-secondary",
  Done: "bg-secondary text-tertiary",
  Exploring: "bg-purple-secondary text-purple-secondary",
  Parked: "bg-secondary text-tertiary",
};

// Helper to check if a value looks like a status
const getStatusColor = (value: string): string | null => {
  return statusColors[value] || null;
};

// Helper to determine column type and icon
const getColumnIcon = (header: string, columnIndex: number) => {
  const lowerHeader = header.toLowerCase();

  if (columnIndex === 0 || lowerHeader.includes("name") || lowerHeader.includes("idea")) {
    return textNormalIcon;
  }
  if (lowerHeader.includes("status")) {
    return circleIcon;
  }
  if (lowerHeader.includes("owner") || lowerHeader.includes("author") || lowerHeader.includes("assignee")) {
    return personIcon;
  }
  if (lowerHeader.includes("due") || lowerHeader.includes("date")) {
    return calendarAltIcon;
  }
  return textNormalIcon;
};

export function InlineDatabaseBlock({
  title,
  emoji,
  href,
  headers,
  rows,
}: InlineDatabaseBlockProps) {
  return (
    <div className="my-6">
      {/* Database Title */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-[22px]">{emoji}</span>
        <Link
          href={href}
          className="rainbow-text content-inline-database-title font-bold hover:underline"
        >
          {title}
        </Link>
      </div>

      {/* View Tabs */}
      <div className="mb-3 flex items-center gap-1">
        <button className="bg-tertiary-translucent text-primary rounded-full px-3 py-1 text-xs font-medium">
          ⭐ All {title === "Launch tracker" ? "launches" : "ideas"}
        </button>
        <Link
          href={href}
          className="text-tertiary hover:text-secondary ml-auto flex items-center gap-1 text-xs"
        >
          <Icon icon={arrowDiagonalUpRightIcon} size={12} color="tertiary" />
          Open
        </Link>
      </div>

      {/* Toolbar */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="xxs">
            <Icon icon={filterIcon} size={14} color="secondary" />
          </Button>
          <Button variant="ghost" size="xxs">
            <Icon icon={arrowUpDownIcon} size={14} color="secondary" />
          </Button>
          <Button variant="ghost" size="xxs">
            <Icon icon={magnifyingGlassIcon} size={14} color="secondary" />
          </Button>
          <Button variant="ghost" size="xxs">
            <Icon icon={slidersIcon} size={14} color="secondary" />
          </Button>
        </div>
        <Button variant="primary" size="sm" className="gap-1">
          <span>New</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-80"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>

      {/* Table */}
      <div className="rainbow-card bg-primary overflow-hidden rounded-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-secondary border-b">
              {headers.map((header, i) => (
                <th
                  key={header}
                  className="text-secondary px-2 py-1.5 text-left text-caption font-normal"
                >
                  <div className="flex items-center gap-1.5">
                    <Icon icon={getColumnIcon(header, i)} size={14} color="secondary" />
                    <span>{header}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="hover:bg-tertiary border-secondary border-b last:border-b-0"
              >
                {row.map((cell, j) => {
                  const statusColor = j > 0 ? getStatusColor(cell) : null;

                  return (
                    <td key={j} className="px-2 py-1.5">
                      {j === 0 ? (
                        <div className="text-primary flex items-center gap-2 font-medium">
                          <span className="bg-secondary flex size-5 items-center justify-center rounded-xs text-[11px]">
                            📄
                          </span>
                          <span>{cell}</span>
                        </div>
                      ) : statusColor ? (
                        <span
                          className={cn(
                            "inline-block rounded-full px-2 py-0.5 text-caption font-medium",
                            statusColor,
                          )}
                        >
                          {cell}
                        </span>
                      ) : (
                        <span className={cn(
                          "text-sm",
                          j === headers.length - 1 ? "text-secondary" : "text-primary"
                        )}>
                          {cell}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        {/* New Row */}
        <div className="hover:bg-tertiary px-2 py-1.5">
          <button className="text-secondary flex items-center gap-1 text-body-sm">
            <Icon icon={plusIcon} size={14} color="secondary" />
            <span>New</span>
          </button>
        </div>
      </div>
    </div>
  );
}
