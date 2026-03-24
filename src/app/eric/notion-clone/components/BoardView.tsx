"use client";

import { cn } from "@/utils/cn";

export interface BoardColumn {
  id: string;
  name: string;
  color: string;
  bgColor: string;
}

interface BoardViewProps<T> {
  columns: BoardColumn[];
  items: T[];
  groupBy: keyof T;
  renderCard: (item: T) => React.ReactNode;
  getItemId: (item: T) => string;
  onCardClick?: (item: T) => void;
}

export function BoardView<T>({
  columns,
  items,
  groupBy,
  renderCard,
  getItemId,
  onCardClick,
}: BoardViewProps<T>) {
  const grouped = columns.map((col) => ({
    ...col,
    items: items.filter((item) => String(item[groupBy]) === col.id),
  }));

  return (
    <div className="flex gap-3 overflow-x-auto py-2">
      {grouped.map((col) => (
        <div key={col.id} className="flex w-[260px] shrink-0 flex-col">
          <div className="mb-2 flex items-center gap-2 px-1">
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px] font-medium",
                col.bgColor,
                col.color,
              )}
            >
              {col.name}
            </span>
            <span className="text-tertiary text-xs">{col.items.length}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {col.items.map((item) => (
              <div
                key={getItemId(item)}
                className={cn(
                  "bg-elevated border-primary-translucent rounded-lg border px-3 py-2.5 shadow-xs transition-shadow hover:shadow-sm",
                  onCardClick && "cursor-pointer",
                )}
                onClick={() => onCardClick?.(item)}
              >
                {renderCard(item)}
              </div>
            ))}
            {col.items.length === 0 && (
              <div className="text-quaternary rounded-lg border border-dashed border-[var(--theme-colors-border-primary)] px-3 py-6 text-center text-xs">
                No items
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
