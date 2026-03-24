import { cn } from "@/utils/cn";

interface StatusBadgeProps {
  label: string;
  dotColor: string;
  bgColor: string;
  textColor?: string;
  className?: string;
}

export function StatusBadge({
  label,
  dotColor,
  bgColor,
  textColor,
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium whitespace-nowrap",
        textColor || "text-primary",
        bgColor,
        className,
      )}
    >
      <span className={cn("size-2 shrink-0 rounded-full", dotColor)} />
      {label}
    </span>
  );
}
