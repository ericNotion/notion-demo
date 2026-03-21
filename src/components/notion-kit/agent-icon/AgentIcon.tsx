import { cn } from "@/utils/cn";

export type AgentIconName =
  | "alarm"
  | "apple"
  | "book"
  | "bulb"
  | "chat"
  | "check"
  | "file"
  | "ghost"
  | "globe"
  | "hat"
  | "mailbox"
  | "plug"
  | "puzzle"
  | "rock"
  | "sign"
  | "square"
  | "triangle"
  | "umbrella";

export type AgentIconColor =
  | "blue"
  | "brown"
  | "gray"
  | "green"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "teal"
  | "yellow";

export type AgentIconSize = 96 | 64 | 48 | 20 | 16;

export interface AgentIconProps {
  icon: AgentIconName;
  color: AgentIconColor;
  size?: AgentIconSize;
  className?: string;
}

const AGENT_COLORS: Record<AgentIconColor, string> = {
  blue: "#5E9FE8",
  brown: "#BD9576",
  gray: "#989590",
  green: "#72BC8F",
  orange: "#DE9255",
  pink: "#DF84A8",
  purple: "#BF8EDA",
  red: "#E97366",
  teal: "#4FB9C9",
  yellow: "#EAC26B",
};

export function AgentIcon({
  icon,
  color,
  size = 20,
  className,
}: AgentIconProps) {
  const variant = size >= 48 ? "lg" : "sm";
  const src = `/agent-icons/${variant}/${icon}.svg`;

  return (
    <div
      className={cn(
        "relative isolate shrink-0 overflow-hidden rounded-full",
        className,
      )}
      style={{
        width: size,
        height: size,
        backgroundColor: AGENT_COLORS[color],
      }}
    >
      <img
        src={src}
        alt={icon}
        className="absolute inset-[5%] size-[90%] object-contain"
        draggable={false}
      />
    </div>
  );
}
