"use client";

import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";
import { Icon } from "@nds-icons";
import { arrowTriangleDownCircleIcon } from "@nds-icons/arrowTriangleDownCircle/default.icon";
import { checkmarkCircleIcon } from "@nds-icons/checkmarkCircle/default.icon";
import { peekSideIcon } from "@nds-icons/peekSide/default.icon";
import { peopleIcon } from "@nds-icons/people/default.icon";
import { plusSmallIcon } from "@nds-icons/plus/small.icon";
import { textFormatIcon } from "@nds-icons/textFormat/default.icon";
import { textJustifyLeftIcon } from "@nds-icons/textJustifyLeft/default.icon";
import Image from "next/image";

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

interface CollectionsBlockProps {
  properties: Property[];
  rows: Row[];
  className?: string;
}

export function CollectionsBlock({
  properties,
  rows,
  className,
}: CollectionsBlockProps) {
  return (
    <div className="bg-primary border-primary rounded-lg border shadow-sm">
      {/* Embedded database container with proper styling */}
      <div className="overflow-auto p-4">
        <div className={className}>
          {/* Table Header */}
          <div className="flex">
            {properties.map((property) => (
              <div
                key={property.id}
                className="border-secondary hover:bg-secondary flex h-9 min-w-[150px] cursor-pointer items-center gap-1.5 border-b px-3"
                style={{ width: property.width }}
              >
                {property.type === "Title" && (
                  <Icon icon={textFormatIcon} color="secondary" />
                )}
                {property.type === "Text" && (
                  <Icon icon={textJustifyLeftIcon} color="secondary" />
                )}
                {property.type === "Person" && (
                  <Icon icon={peopleIcon} color="secondary" />
                )}
                {property.type === "Status" && (
                  <Icon icon={checkmarkCircleIcon} color="secondary" />
                )}
                {property.type === "Select" && (
                  <Icon icon={arrowTriangleDownCircleIcon} color="secondary" />
                )}
                <span className="text-tertiary text-sm">{property.name}</span>
              </div>
            ))}
          </div>

          {/* Table Rows */}
          {rows.map((row) => (
            <div key={row.id} className="flex">
              {properties.map((property) => (
                <div
                  key={`${row.id}-${property.id}`}
                  className="border-secondary flex h-9 min-w-[150px] items-center border-r border-b px-3 last:border-r-0"
                  style={{ width: property.width }}
                >
                  {renderCellContent(row[property.id], property.type)}
                </div>
              ))}
            </div>
          ))}
          {/* New page button */}
          <Button
            variant="ghost"
            size="sm"
            className="text-tertiary mt-1 ml-1 h-7 px-1.5"
          >
            <Icon icon={plusSmallIcon} color="tertiary" size="sm" />
            <span>New Page</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

function renderCellContent(value: CellValue, type: string) {
  switch (type) {
    case "Title":
      return (
        <div className="group relative flex h-full w-full items-center">
          <span className="text-primary max-w-full truncate text-sm font-medium">
            {value}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="bg-secondary absolute top-1/2 -right-1.5 z-10 ml-1 h-6 -translate-y-1/2 gap-0.5 px-1 opacity-0 shadow-sm group-hover:opacity-100"
          >
            <Icon icon={peekSideIcon} color="secondary" />
            <span className="text-tertiary text-xs tracking-wide">OPEN</span>
          </Button>
        </div>
      );
    case "Text":
      return (
        <span className="text-primary max-w-full truncate text-sm">
          {value}
        </span>
      );
    case "Person":
      return (
        <div className="text-primary flex items-center gap-2 text-sm">
          <div className="relative h-5 w-5 overflow-hidden rounded-full">
            <Image
              src={`https://i.pravatar.cc/150?u=${value}`}
              alt={value as string}
              sizes="150px"
              fill
              className="object-cover"
            />
          </div>
          <span>{typeof value === "string" ? value : "Unknown"}</span>
        </div>
      );
    case "Status":
      return <StatusPill status={value as string} />;
    case "Select":
      return (
        <div className="bg-tertiary text-primary flex h-5 items-center gap-1.5 rounded-sm px-1.5 text-sm">
          <span>{value}</span>
        </div>
      );
    default:
      return <span className="text-primary">{value}</span>;
  }
}
