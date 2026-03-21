interface EventItemProps {
  title: string;
  timeRange: string;
  color?: string;
}

export function EventItem({
  title,
  timeRange,
  color = "#5e9fe8",
}: EventItemProps) {
  return (
    <div className="hover:bg-secondary-translucent flex h-[30px] cursor-pointer items-center gap-2 rounded-[6px] px-2 py-1">
      <div className="flex size-6 shrink-0 items-center justify-center">
        <div
          className="size-[10px] rounded-[2px]"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="text-secondary min-w-0 flex-1 truncate text-sm/5 font-medium">
        {title}
      </span>
      <span className="text-tertiary shrink-0 text-xs/4 font-medium">
        {timeRange}
      </span>
    </div>
  );
}
