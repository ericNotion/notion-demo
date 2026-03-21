"use client";

import { cn } from "@/utils/cn";

interface FilterBarProps {
  filters: { id: string; label: string }[];
  activeFilters: Set<string>;
  onToggle: (id: string) => void;
  onClear: () => void;
}

export function FilterBar({
  filters,
  activeFilters,
  onToggle,
  onClear,
}: FilterBarProps) {
  return (
    <div className="flex items-center gap-1.5 py-2">
      {filters.map((filter) => {
        const active = activeFilters.has(filter.id);
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onToggle(filter.id)}
            className={cn(
              "rounded-full border px-2.5 py-1 text-[12px] font-medium transition-colors",
              active
                ? "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400"
                : "text-secondary border-primary-translucent hover:bg-secondary-translucent",
            )}
          >
            {filter.label}
          </button>
        );
      })}
      {activeFilters.size > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="text-tertiary hover:text-secondary ml-1 text-[12px]"
        >
          Clear
        </button>
      )}
    </div>
  );
}
