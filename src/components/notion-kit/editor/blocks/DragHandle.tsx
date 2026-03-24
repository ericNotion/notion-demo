import { cn } from "@/utils/cn";

export function CmdIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "border-primary flex size-[46px] shrink-0 items-center justify-center rounded-lg border",
        className,
      )}
    >
      {children}
    </span>
  );
}

interface DragHandleProps {
  onAdd?: () => void;
  onGripPointerDown?: (e: React.PointerEvent) => void;
  onGripClick?: () => void;
  className?: string;
  groupClass?: string;
  style?: React.CSSProperties;
}

export function DragHandle({
  onAdd,
  onGripPointerDown,
  onGripClick,
  className,
  groupClass = "group-hover/block:opacity-100 group-focus-within/block:opacity-100",
  style,
}: DragHandleProps) {
  return (
    <div
      className={cn(
        "absolute top-0 flex items-center gap-0.5 opacity-0 transition-opacity",
        groupClass,
        className,
      )}
      style={style}
    >
      <button
        type="button"
        className="text-tertiary hover:bg-primary/5 flex size-6 cursor-pointer items-center justify-center rounded-xs dark:hover:bg-white/10"
        onClick={onAdd}
        tabIndex={-1}
        aria-label="Add block"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d="M7 2v10M2 7h10" />
        </svg>
      </button>
      <div
        role="button"
        tabIndex={-1}
        className="text-tertiary hover:bg-primary/5 flex size-6 cursor-grab items-center justify-center rounded-xs select-none active:cursor-grabbing dark:hover:bg-white/10"
        onPointerDown={onGripPointerDown}
        onClick={onGripClick}
        aria-label="Drag to reorder"
      >
        <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor">
          <circle cx="2.5" cy="2.5" r="1.2" />
          <circle cx="7.5" cy="2.5" r="1.2" />
          <circle cx="2.5" cy="7" r="1.2" />
          <circle cx="7.5" cy="7" r="1.2" />
          <circle cx="2.5" cy="11.5" r="1.2" />
          <circle cx="7.5" cy="11.5" r="1.2" />
        </svg>
      </div>
    </div>
  );
}
