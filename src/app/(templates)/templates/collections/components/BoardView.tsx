"use client";

import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { plusSmallIcon } from "@nds-icons/plus/small.icon";
import Image from "next/image";
import { useState } from "react";

interface Property {
  id: string;
  name: string;
  type: string;
  width?: number;
}

type CellValue = string | number | boolean | null;

interface Row {
  id: string;
  [key: string]: CellValue;
}

interface BoardViewProps {
  properties: Property[];
  rows: Row[];
  className?: string;
  onRowUpdate?: (rowId: string, updates: Partial<Row>) => void;
  padding?: number;
}

const statusColumns = [
  {
    id: "Not Started",
    name: "Not Started",
    bgColor: "rgba(229, 231, 235, 0.3)", // Light gray background
    buttonBorderColor: "rgba(107, 114, 128, 0.3)", // Gray border
    tagBg: "#E5E7EB", // Neutral-200 equivalent
    tagText: "#374151", // Neutral-700 equivalent
    countColor: "#6B7280", // Neutral-500 equivalent
  },
  {
    id: "In Progress",
    name: "In Progress",
    bgColor: "rgba(211, 229, 239, 0.3)", // Light blue background matching pill
    buttonBorderColor: "rgba(82, 147, 188, 0.3)", // Blue border
    tagBg: "#D3E5EF", // Exact match to status pill
    tagText: "#183347", // Exact match to status pill
    countColor: "#5293BC", // Exact match to status pill dot
  },
  {
    id: "Completed",
    name: "Completed",
    bgColor: "rgba(219, 236, 221, 0.3)", // Light green background matching pill
    buttonBorderColor: "rgba(94, 152, 114, 0.3)", // Green border
    tagBg: "#DBECDD", // Exact match to status pill
    tagText: "#1C3829", // Exact match to status pill
    countColor: "#5E9872", // Exact match to status pill dot
  },
];

function renderCardProperty(value: CellValue, property: Property) {
  switch (property.type) {
    case "Title":
      return <div className="text-primary text-sm font-medium">{value}</div>;
    case "Text":
      // Skip text/description properties on board cards
      return null;
    case "Person":
      return (
        <div className="flex items-center gap-1.5">
          <div className="relative h-5 w-5 overflow-hidden rounded-full">
            <Image
              src={`https://i.pravatar.cc/150?u=${value}`}
              alt={value as string}
              sizes="150px"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-secondary text-sm">{value}</span>
        </div>
      );
    case "Status":
      return (
        <div className="flex self-start">
          <StatusPill status={value as string} />
        </div>
      );
    case "Select":
      return (
        <div className="bg-tertiary flex h-5 w-fit items-center gap-1 rounded-sm px-1 text-sm">
          <span className="text-primary">{value}</span>
        </div>
      );
    default:
      return null;
  }
}

function BoardCard({
  row,
  properties,
  onDragStart,
  isDragging,
}: {
  row: Row;
  properties: Property[];
  onDragStart: (e: React.DragEvent, row: Row) => void;
  isDragging: boolean;
}) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, row)}
      className={cn(
        "group bg-primary border-primary mb-3 w-full cursor-grab rounded-lg border p-3 shadow-sm active:cursor-grabbing",
        isDragging && "transform opacity-50 shadow-lg",
      )}
    >
      <div className="flex flex-col gap-3">
        {properties.map((property) => {
          const value = row[property.id];
          if (!value && property.type !== "Title") return null;
          return (
            <div key={property.id}>{renderCardProperty(value, property)}</div>
          );
        })}
      </div>
    </div>
  );
}

export function BoardView({
  properties,
  rows,
  className,
  onRowUpdate,
}: BoardViewProps) {
  const [draggedRow, setDraggedRow] = useState<Row | null>(null);
  const [, setDraggedOverColumn] = useState<string | null>(null);

  // Group rows by status
  const groupedRows = statusColumns.reduce(
    (acc, column) => {
      acc[column.id] = rows.filter(
        (row) => (row.status as string) === column.id,
      );
      return acc;
    },
    {} as Record<string, Row[]>,
  );

  const handleDragStart = (e: React.DragEvent, row: Row) => {
    setDraggedRow(row);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", "");
  };

  const handleDragEnd = () => {
    setDraggedRow(null);
    setDraggedOverColumn(null);
  };

  const handleDragOver = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDraggedOverColumn(columnId);
  };

  const handleDragLeave = () => {
    setDraggedOverColumn(null);
  };

  const handleDrop = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    if (draggedRow && onRowUpdate) {
      // columnId is now the actual status value
      onRowUpdate(draggedRow.id, { status: columnId });
    }
    setDraggedRow(null);
    setDraggedOverColumn(null);
  };

  return (
    <div className={cn("flex overflow-auto pb-6", className)}>
      <div className="flex gap-3 overflow-x-auto">
        {statusColumns.map((column) => (
          <div
            key={column.id}
            className="flex-shrink-0"
            style={{ width: "280px" }}
          >
            {/* Column Content with Header Inside */}
            <div
              className={cn(
                "min-h-[200px] rounded-xl p-3 transition-all",
                column.bgColor,
              )}
              onDragOver={(e) => handleDragOver(e, column.id)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, column.id)}
            >
              {/* Column Header Inside Colored Area */}
              <div className="mb-3 flex items-center gap-2">
                {/* Tag matching Figma */}
                <div
                  className={cn(
                    "flex h-6 items-center gap-1 rounded-md px-1.5 text-sm font-medium",
                    column.tagBg,
                    column.tagText,
                  )}
                >
                  {column.name}
                </div>
                {/* Count */}
                <span className={cn("text-sm font-medium", column.countColor)}>
                  {groupedRows[column.id].length}
                </span>
              </div>
              {groupedRows[column.id].map((row) => (
                <BoardCard
                  key={row.id}
                  row={row}
                  properties={properties}
                  onDragStart={handleDragStart}
                  isDragging={draggedRow?.id === row.id}
                />
              ))}

              {/* Add New Card Button - Matching Figma exactly */}
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "hover:bg-secondary h-8 w-full gap-1.5 rounded-lg border bg-transparent p-3",
                  column.buttonBorderColor,
                  column.tagText,
                )}
              >
                <Icon
                  icon={plusSmallIcon}
                  size="sm"
                  className={column.tagText}
                />
                <span className="text-sm">New Page</span>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Drag end handler */}
      <div
        onDragEnd={handleDragEnd}
        className="pointer-events-none absolute inset-0"
      />
    </div>
  );
}
