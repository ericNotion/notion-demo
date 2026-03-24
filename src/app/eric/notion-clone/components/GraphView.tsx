"use client";

import { Icon } from "@nds-icons";
import { connectionsIcon } from "@nds-icons/connections/default.icon";
import { magnifyingGlassPlusIcon } from "@nds-icons/magnifyingGlassPlus/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { PageEntry } from "../data";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

interface GraphNode {
  id: string;
  label: string;
  emoji: string;
  href: string;
  section: PageEntry["section"];
  kind: PageEntry["kind"];
  createdBy: string;
  lastEdited: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  fx?: number;
  fy?: number;
}

interface GraphEdge {
  source: string;
  target: string;
}

interface GraphViewProps {
  pages: PageEntry[];
}

const COLORS = {
  favorites: {
    node: "rgb(59, 130, 246)", // blue
    nodeHover: "rgb(96, 165, 250)",
    text: "rgb(219, 234, 254)",
  },
  private: {
    node: "rgb(107, 114, 128)", // gray
    nodeHover: "rgb(156, 163, 175)",
    text: "rgb(243, 244, 246)",
  },
  shared: {
    node: "rgb(34, 197, 94)", // green
    nodeHover: "rgb(74, 222, 128)",
    text: "rgb(220, 252, 231)",
  },
};

export function GraphView({ pages }: GraphViewProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [edges, setEdges] = useState<GraphEdge[]>([]);
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const router = useRouter();

  // Initialize graph data
  useEffect(() => {
    const width = containerRef.current?.clientWidth || 800;
    const height = containerRef.current?.clientHeight || 600;

    // Create nodes
    const nodeMap = new Map<string, GraphNode>();
    const graphNodes: GraphNode[] = pages.map((page) => {
      const node: GraphNode = {
        id: page.label,
        label: page.label,
        emoji: page.emoji,
        href: page.href,
        section: page.section,
        kind: page.kind,
        createdBy: page.createdBy,
        lastEdited: page.lastEdited,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
      };
      nodeMap.set(page.label, node);
      return node;
    });

    // Create edges from parent relationships
    const graphEdges: GraphEdge[] = pages
      .filter((page) => page.parent && nodeMap.has(page.parent))
      .map((page) => ({
        source: page.parent!,
        target: page.label,
      }));

    setNodes(graphNodes);
    setEdges(graphEdges);

    // Center the view
    setTransform({ x: width / 2, y: height / 2, scale: 1 });
  }, [pages]);

  // Force simulation
  useEffect(() => {
    if (nodes.length === 0) return;

    const width = containerRef.current?.clientWidth || 800;
    const height = containerRef.current?.clientHeight || 600;

    let iteration = 0;
    const maxIterations = 300;
    const alpha = 0.3;
    const alphaDecay = 1 - Math.pow(0.001, 1 / maxIterations);

    const simulate = () => {
      if (iteration >= maxIterations) return;

      let currentAlpha = alpha * Math.pow(1 - alphaDecay, iteration);
      iteration++;

      setNodes((prevNodes) => {
        const newNodes = [...prevNodes];
        const nodeMap = new Map(newNodes.map((n) => [n.id, n]));

        // Reset forces
        newNodes.forEach((node) => {
          node.vx = 0;
          node.vy = 0;
        });

        // Repulsion between all nodes
        for (let i = 0; i < newNodes.length; i++) {
          for (let j = i + 1; j < newNodes.length; j++) {
            const nodeA = newNodes[i];
            const nodeB = newNodes[j];
            const dx = nodeB.x - nodeA.x;
            const dy = nodeB.y - nodeA.y;
            const distSq = dx * dx + dy * dy + 0.1;
            const dist = Math.sqrt(distSq);
            const force = (currentAlpha * 3000) / distSq;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;

            nodeA.vx -= fx;
            nodeA.vy -= fy;
            nodeB.vx += fx;
            nodeB.vy += fy;
          }
        }

        // Attraction along edges
        edges.forEach((edge) => {
          const source = nodeMap.get(edge.source);
          const target = nodeMap.get(edge.target);
          if (!source || !target) return;

          const dx = target.x - source.x;
          const dy = target.y - source.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = (dist - 100) * currentAlpha * 0.1;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          source.vx += fx;
          source.vy += fy;
          target.vx -= fx;
          target.vy -= fy;
        });

        // Center force
        newNodes.forEach((node) => {
          node.vx += (width / 2 - node.x) * currentAlpha * 0.01;
          node.vy += (height / 2 - node.y) * currentAlpha * 0.01;
        });

        // Apply velocities
        newNodes.forEach((node) => {
          if (node.fx !== undefined && node.fy !== undefined) {
            node.x = node.fx;
            node.y = node.fy;
          } else {
            node.x += node.vx;
            node.y += node.vy;
          }
        });

        return newNodes;
      });

      animationFrameRef.current = requestAnimationFrame(simulate);
    };

    simulate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [nodes.length, edges]);

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(0.3, transform.scale + delta), 3);

    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const worldX = (mouseX - transform.x) / transform.scale;
    const worldY = (mouseY - transform.y) / transform.scale;

    setTransform({
      x: mouseX - worldX * newScale,
      y: mouseY - worldY * newScale,
      scale: newScale,
    });
  };

  // Pan handling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTransform((prev) => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Node click
  const handleNodeClick = (node: GraphNode) => {
    router.push(node.href);
  };

  // Zoom controls
  const handleZoomIn = () => {
    setTransform((prev) => ({
      ...prev,
      scale: Math.min(prev.scale * 1.3, 3),
    }));
  };

  const handleZoomOut = () => {
    setTransform((prev) => ({
      ...prev,
      scale: Math.max(prev.scale / 1.3, 0.3),
    }));
  };

  const handleResetView = () => {
    const width = containerRef.current?.clientWidth || 800;
    const height = containerRef.current?.clientHeight || 600;
    setTransform({ x: width / 2, y: height / 2, scale: 1 });
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-primary" ref={containerRef}>
      {/* Controls */}
      <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
        <Button variant="ghost" size="sm" onClick={handleZoomIn} title="Zoom in">
          <Icon icon={magnifyingGlassPlusIcon} />
        </Button>
        <Button variant="ghost" size="sm" onClick={handleZoomOut} title="Zoom out">
          <Icon icon={magnifyingGlassIcon} />
        </Button>
        <Button variant="ghost" size="sm" onClick={handleResetView} title="Reset view">
          <Icon icon={connectionsIcon} />
        </Button>
      </div>

      {/* Legend */}
      <div className="absolute right-4 top-4 z-10 rounded-lg border border-primary bg-elevated p-3 shadow-md-outline">
        <div className="text-caption font-semibold text-secondary mb-2">Sections</div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS.favorites.node }} />
            <span className="text-caption text-secondary">Favorites</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS.private.node }} />
            <span className="text-caption text-secondary">Private</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS.shared.node }} />
            <span className="text-caption text-secondary">Shared</span>
          </div>
        </div>
      </div>

      {/* Hover tooltip */}
      {hoveredNode && (
        <div className="pointer-events-none absolute left-4 bottom-4 z-10 max-w-xs rounded-lg border border-primary bg-elevated p-3 shadow-lg-outline">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-title-sm">{hoveredNode.emoji}</span>
            <span className="text-body font-semibold text-primary">{hoveredNode.label}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-caption text-secondary">
              <span className="font-medium">Created by:</span> {hoveredNode.createdBy}
            </div>
            <div className="text-caption text-secondary">
              <span className="font-medium">Last edited:</span> {hoveredNode.lastEdited}
            </div>
            <div className="text-caption text-secondary">
              <span className="font-medium">Type:</span> {hoveredNode.kind}
            </div>
          </div>
        </div>
      )}

      {/* SVG Canvas */}
      <svg
        ref={svgRef}
        className={cn("h-full w-full", isDragging ? "cursor-grabbing" : "cursor-grab")}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
          {/* Edges */}
          {edges.map((edge, i) => {
            const source = nodes.find((n) => n.id === edge.source);
            const target = nodes.find((n) => n.id === edge.target);
            if (!source || !target) return null;

            return (
              <line
                key={i}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke="currentColor"
                strokeWidth={1.5 / transform.scale}
                strokeOpacity={0.2}
                className="text-secondary"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const colors = COLORS[node.section];
            const radius = node.kind === "database-item" ? 20 : 25;
            const isHovered = hoveredNode?.id === node.id;

            return (
              <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                {/* Node circle */}
                <circle
                  r={radius}
                  fill={isHovered ? colors.nodeHover : colors.node}
                  stroke="currentColor"
                  strokeWidth={isHovered ? 2.5 / transform.scale : 1.5 / transform.scale}
                  className={cn("text-elevated transition-all cursor-pointer", isHovered && "drop-shadow-lg")}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => handleNodeClick(node)}
                />
                {/* Emoji */}
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={16 / transform.scale}
                  className="pointer-events-none select-none"
                >
                  {node.emoji}
                </text>
                {/* Label */}
                <text
                  textAnchor="middle"
                  dominantBaseline="hanging"
                  y={radius + 5}
                  fontSize={11 / transform.scale}
                  fill={colors.text}
                  className="pointer-events-none select-none font-medium"
                >
                  {node.label.length > 20 ? node.label.slice(0, 20) + "..." : node.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Instructions */}
      <div className="absolute left-1/2 bottom-4 z-10 -translate-x-1/2 rounded-lg border border-primary bg-elevated px-3 py-2 shadow-sm-outline">
        <span className="text-caption text-secondary">
          Scroll to zoom • Drag to pan • Click nodes to navigate
        </span>
      </div>
    </div>
  );
}
