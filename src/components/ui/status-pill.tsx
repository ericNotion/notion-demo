import { cn } from "@/utils/cn";

interface StatusPillProps {
  status: string;
  size?: "sm" | "md";
}

export function StatusPill({ status, size = "md" }: StatusPillProps) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Completed":
      case "Done":
        return {
          bg: "bg-green-100 dark:bg-green-950/50",
          text: "text-green-900 dark:text-green-400",
          dot: "bg-green-600 dark:bg-green-400",
        };
      case "In Progress":
      case "In progress":
      case "Live":
        return {
          bg: "bg-blue-secondary-translucent",
          text: "text-blue-primary",
          dot: "bg-blue-accent-primary",
        };
      case "Not Started":
      case "Open":
      case "Backlog":
        return {
          bg: "bg-tertiary",
          text: "text-primary",
          dot: "bg-gray-strong",
        };
      case "Disabled":
        return {
          bg: "bg-tertiary-translucent",
          text: "text-primary",
          dot: "bg-gray-accent-primary",
        };
      default:
        return {
          bg: "bg-tertiary",
          text: "text-primary",
          dot: "bg-gray-strong",
        };
    }
  };

  const styles = getStatusStyles(status);
  const isSmall = size === "sm";

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full",
        isSmall ? "h-4 pr-1.5 pl-[6px] text-xs" : "h-5 pr-2 pl-[7px] text-sm",
        styles.bg,
      )}
    >
      <div
        className={cn(
          "rounded-full",
          isSmall ? "h-1.5 w-1.5" : "h-2 w-2",
          styles.dot,
        )}
      />
      <span className={styles.text}>{status}</span>
    </div>
  );
}
