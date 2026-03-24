"use client";

import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { allPagesAtom } from "../data";

interface Node {
  id: string;
  label: string;
  emoji: string;
  href: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  fx?: number;
  fy?: number;
}

interface Edge {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

const NODE_RADIUS = 24;
const EDGE_STRENGTH = 0.15;
const REPEL_STRENGTH = 2000;
const CENTER_STRENGTH = 0.02;
const DAMPING = 0.85;
const MIN_ZOOM = 0.3;
const MAX_ZOOM = 3;

export function NodeDiagram() {
  const pages = useAtomValue(allPagesAtom);
  const router = useRouter();
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const animationRef = useRef<number>();
  const graphDataRef = useRef<GraphData>({ nodes: [], edges: [] });
  const draggedNodeRef = useRef<string | null>(null);

  // Initialize graph data from pages
  useEffect(() => {
    const nodes: Node[] = pages
      .filter((p) => p.kind !== "database-item" || !p.parent)
      .slice(0, 40)
      .map((page, i) => {
        const angle = (i / pages.length) * Math.PI * 2;
        const radius = 150;
        return {
          id: page.href,
          label: page.label,
          emoji: page.emoji,
          href: page.href,
          x: dimensions.width / 2 + Math.cos(angle) * radius,
          y: dimensions.height / 2 + Math.sin(angle) * radius,
          vx: 0,
          vy: 0,
        };
      });

    const edges: Edge[] = [];
    const nodeMap = new Map(nodes.map((n) => [n.label, n.id]));

    pages.forEach((page) => {
      if (page.parent) {
        const sourceId = nodeMap.get(page.parent);
        const targetId = nodeMap.get(page.label);
        if (sourceId && targetId && sourceId !== targetId) {
          edges.push({ source: sourceId, target: targetId });
        }
      }
    });

    const sectionGroups = new Map<string, string[]>();
    pages.forEach((page) => {
      const group = sectionGroups.get(page.section) || [];
      group.push(page.label);
      sectionGroups.set(page.section, group);
    });

    sectionGroups.forEach((group) => {
      for (let i = 0; i < Math.min(group.length - 1, 3); i++) {
        const sourceId = nodeMap.get(group[i]);
        const targetId = nodeMap.get(group[i + 1]);
        if (
          sourceId &&
          targetId &&
          !edges.find((e) => e.source === sourceId && e.target === targetId)
        ) {
          edges.push({ source: sourceId, target: targetId });
        }
      }
    });

    graphDataRef.current = { nodes, edges };
  }, [pages, dimensions.width, dimensions.height]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const { nodes, edges } = graphDataRef.current;
    if (nodes.length === 0) return;

    let iteration = 0;
    const maxIterations = 300;

    const simulate = () => {
      if (iteration >= maxIterations) {
        cancelAnimationFrame(animationRef.current!);
        return;
      }

      const { nodes, edges } = graphDataRef.current;
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;

      nodes.forEach((node) => {
        if (!node.fx && !node.fy) {
          node.vx *= DAMPING;
          node.vy *= DAMPING;
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = REPEL_STRENGTH / (distance * distance);

          if (!nodeA.fx && !nodeA.fy) {
            nodeA.vx -= (dx / distance) * force;
            nodeA.vy -= (dy / distance) * force;
          }
          if (!nodeB.fx && !nodeB.fy) {
            nodeB.vx += (dx / distance) * force;
            nodeB.vy += (dy / distance) * force;
          }
        }
      }

      edges.forEach((edge) => {
        const source = nodes.find((n) => n.id === edge.source);
        const target = nodes.find((n) => n.id === edge.target);
        if (!source || !target) return;

        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (distance - 100) * EDGE_STRENGTH;

        if (!source.fx && !source.fy) {
          source.vx += (dx / distance) * force;
          source.vy += (dy / distance) * force;
        }
        if (!target.fx && !target.fy) {
          target.vx -= (dx / distance) * force;
          target.vy -= (dy / distance) * force;
        }
      });

      nodes.forEach((node) => {
        if (!node.fx && !node.fy) {
          node.vx += (centerX - node.x) * CENTER_STRENGTH;
          node.vy += (centerY - node.y) * CENTER_STRENGTH;
        }
      });

      nodes.forEach((node) => {
        if (!node.fx && !node.fy) {
          node.x += node.vx;
          node.y += node.vy;
        }
      });

      iteration++;
      animationRef.current = requestAnimationFrame(simulate);
    };

    simulate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    if (e.button !== 0) return;
    const target = e.target as SVGElement;
    if (target.tagName === "circle") return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (isDragging) {
      setTransform({
        ...transform,
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, transform.scale * delta));
    setTransform({ ...transform, scale: newScale });
  };

  const handleNodeMouseDown = (e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation();
    draggedNodeRef.current = nodeId;
    const node = graphDataRef.current.nodes.find((n) => n.id === nodeId);
    if (node) {
      node.fx = node.x;
      node.fy = node.y;
    }
  };

  const handleNodeMouseMove = (e: React.MouseEvent) => {
    if (!draggedNodeRef.current) return;
    const node = graphDataRef.current.nodes.find((n) => n.id === draggedNodeRef.current);
    if (node && node.fx !== undefined && node.fy !== undefined) {
      const svgRect = svgRef.current?.getBoundingClientRect();
      if (svgRect) {
        node.fx = (e.clientX - svgRect.left - transform.x) / transform.scale;
        node.fy = (e.clientY - svgRect.top - transform.y) / transform.scale;
        node.x = node.fx;
        node.y = node.fy;
      }
    }
  };

  const handleNodeMouseUp = () => {
    if (draggedNodeRef.current) {
      const node = graphDataRef.current.nodes.find((n) => n.id === draggedNodeRef.current);
      if (node) {
        delete node.fx;
        delete node.fy;
      }
      draggedNodeRef.current = null;
    }
  };

  const handleNodeClick = (e: React.MouseEvent, href: string) => {
    e.stopPropagation();
    if (!draggedNodeRef.current) {
      router.push(href);
    }
  };

  const { nodes, edges } = graphDataRef.current;

  return (
    <div
      ref={containerRef}
      className="bg-secondary border-primary relative h-[500px] w-full overflow-hidden rounded-lg border"
    >
      <svg
        ref={svgRef}
        className="h-full w-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={(e) => {
          handleMouseMove(e);
          handleNodeMouseMove(e);
        }}
        onMouseUp={() => {
          handleMouseUp();
          handleNodeMouseUp();
        }}
        onMouseLeave={() => {
          handleMouseUp();
          handleNodeMouseUp();
        }}
        onWheel={handleWheel}
      >
        <g transform={`translate(${transform.x},${transform.y}) scale(${transform.scale})`}>
          <g className="edges">
            {edges.map((edge, i) => {
              const source = nodes.find((n) => n.id === edge.source);
              const target = nodes.find((n) => n.id === edge.target);
              if (!source || !target) return null;
              return (
                <line
                  key={`edge-${i}`}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  className="stroke-tertiary"
                  strokeWidth={1.5}
                  strokeOpacity={0.3}
                />
              );
            })}
          </g>
          <g className="nodes">
            {nodes.map((node) => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={NODE_RADIUS}
                  className={`fill-elevated stroke-primary cursor-pointer transition-all ${
                    hoveredNode === node.id ? "stroke-[3px]" : "stroke-[1.5px]"
                  }`}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onMouseDown={(e) => handleNodeMouseDown(e, node.id)}
                  onClick={(e) => handleNodeClick(e, node.href)}
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={20}
                  className="pointer-events-none select-none"
                  onClick={(e) => handleNodeClick(e, node.href)}
                >
                  {node.emoji}
                </text>
                {hoveredNode === node.id && (
                  <text
                    x={node.x}
                    y={node.y + NODE_RADIUS + 16}
                    textAnchor="middle"
                    className="text-primary fill-current text-sm font-medium pointer-events-none select-none"
                  >
                    {node.label}
                  </text>
                )}
              </g>
            ))}
          </g>
        </g>
      </svg>
      <div className="bg-elevated/90 text-secondary shadow-sm-outline pointer-events-none absolute bottom-3 left-3 rounded-md px-3 py-2 text-xs backdrop-blur-sm">
        <div>Click nodes to navigate • Drag to pan • Scroll to zoom</div>
      </div>
    </div>
  );
}
