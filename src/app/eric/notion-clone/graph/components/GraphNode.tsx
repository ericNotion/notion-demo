import { cn } from "@/utils/cn";
import type { Node } from "./useForceSimulation";

type GraphNodeProps = {
  node: Node;
  isSelected: boolean;
  scale: number;
  onMouseDown: (e: React.MouseEvent) => void;
  onClick: (e: React.MouseEvent) => void;
};

export function GraphNode({
  node,
  isSelected,
  scale,
  onMouseDown,
  onClick,
}: GraphNodeProps) {
  const radius = 24;
  const strokeWidth = 2;

  const sectionColors = {
    favorites: "#0B7FE5",
    private: "var(--border-color-secondary)",
    shared: "#3D9B6B",
  };

  const strokeColor = sectionColors[node.section];

  return (
    <g
      className="cursor-pointer transition-transform duration-150"
      transform={`translate(${node.x}, ${node.y})`}
      onMouseDown={onMouseDown}
      onClick={onClick}
    >
      <circle
        r={radius}
        fill="var(--background-color-primary)"
        stroke={strokeColor}
        strokeWidth={isSelected ? strokeWidth * 2 : strokeWidth}
        className={cn("transition-all duration-150", {
          "drop-shadow-md": isSelected,
        })}
      />
      {isSelected && (
        <circle
          r={radius + 6}
          fill="none"
          stroke={strokeColor}
          strokeWidth={1}
          opacity={0.3}
        />
      )}
      <text
        className="pointer-events-none select-none"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={16}
      >
        {node.emoji}
      </text>
      {(scale > 0.7 || isSelected) && (
        <text
          className="pointer-events-none select-none fill-[var(--text-color-primary)]"
          textAnchor="middle"
          y={radius + 16}
          fontSize={12}
          fontWeight={500}
        >
          {node.label.length > 20
            ? `${node.label.slice(0, 20)}...`
            : node.label}
        </text>
      )}
    </g>
  );
}
