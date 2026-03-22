import { cn } from "@/utils/cn";

export function PrototypeBanner() {
  return (
    <div
      className={cn(
        "bg-blue-secondary text-blue-primary",
        "flex h-9 w-full items-center justify-center",
        "text-caption",
      )}
    >
      This is an interactive UI prototype — not a real Notion workspace.
    </div>
  );
}
