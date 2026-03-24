import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowStraightRightIcon } from "@nds-icons/arrowStraightRight/default.icon";
import { GraphNode } from "./GraphNode";
import { GraphControls } from "./GraphControls";
import { useForceSimulation, type Edge, type Node } from "./useForceSimulation";
import type { PageEntry } from "../../data";

type NodeGraphProps = {
  pages: PageEntry[];
};

export function NodeGraph({ pages }: NodeGraphProps) {
  const router = useRouter();
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  // Compute nodes and edges from pages data
  const { nodes: initialNodes, edges } = useMemo(() => {
    const nodesMap = new Map<string, Omit<Node, "x" | "y" | "vx" | "vy">>();
    const edgesList: Edge[] = [];

    pages.forEach((page) => {
      nodesMap.set(page.label, {
        id: page.label,
        emoji: page.emoji,
        label: page.label,
        href: page.href,
        section: page.section,
      });

      if (page.parent) {
        edgesList.push({
          source: page.label,
          target: page.parent,
        });
      }
    });

    return {
      nodes: Array.from(nodesMap.values()),
      edges: edgesList,
    };
  }, [pages]);

  const { nodes, updateNodePosition, releaseNode } = useForceSimulation(
    initialNodes,
    edges,
    {
      width: dimensions.width,
      height: dimensions.height,
    },
  );

  // Handle container resize
  useEffect(() => {
    if (!containerRef.current) return;

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

  // Mouse wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform((prev) => ({
      ...prev,
      scale: Math.max(0.3, Math.min(2, prev.scale * delta)),
    }));
  }, []);

  // Node dragging
  const handleNodeMouseDown = useCallback(
    (nodeId: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setDraggingNode(nodeId);
      setSelectedNode(nodeId);
    },
    [],
  );

  const handleNodeClick = useCallback((nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedNode((prev) => (prev === nodeId ? null : nodeId));
  }, []);

  // Background panning
  const handleBackgroundMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button !== 0) return;
      setIsPanning(true);
      setPanStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
      setSelectedNode(null);
    },
    [transform.x, transform.y],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (draggingNode) {
        const svg = svgRef.current;
        if (!svg) return;

        const rect = svg.getBoundingClientRect();
        const x = (e.clientX - rect.left - transform.x) / transform.scale;
        const y = (e.clientY - rect.top - transform.y) / transform.scale;
        updateNodePosition(draggingNode, x, y);
      } else if (isPanning) {
        setTransform((prev) => ({
          ...prev,
          x: e.clientX - panStart.x,
          y: e.clientY - panStart.y,
        }));
      }
    },
    [draggingNode, isPanning, panStart, transform.x, transform.y, transform.scale, updateNodePosition],
  );

  const handleMouseUp = useCallback(() => {
    if (draggingNode) {
      releaseNode(draggingNode);
      setDraggingNode(null);
    }
    setIsPanning(false);
  }, [draggingNode, releaseNode]);

  useEffect(() => {
    if (draggingNode || isPanning) {
      window.addEventListener("mouseup", handleMouseUp);
      return () => window.removeEventListener("mouseup", handleMouseUp);
    }
  }, [draggingNode, isPanning, handleMouseUp]);

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    setTransform((prev) => ({
      ...prev,
      scale: Math.min(2, prev.scale * 1.2),
    }));
  }, []);

  const handleZoomOut = useCallback(() => {
    setTransform((prev) => ({
      ...prev,
      scale: Math.max(0.3, prev.scale / 1.2),
    }));
  }, []);

  const handleFitView = useCallback(() => {
    if (nodes.length === 0) return;

    const padding = 80;
    const xs = nodes.map((n) => n.x);
    const ys = nodes.map((n) => n.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const graphWidth = maxX - minX;
    const graphHeight = maxY - minY;
    const scaleX = (dimensions.width - padding * 2) / graphWidth;
    const scaleY = (dimensions.height - padding * 2) / graphHeight;
    const newScale = Math.min(scaleX, scaleY, 1);

    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    const x = dimensions.width / 2 - centerX * newScale;
    const y = dimensions.height / 2 - centerY * newScale;

    setTransform({ x, y, scale: newScale });
  }, [nodes, dimensions]);

  const selectedNodeData = useMemo(
    () => nodes.find((n) => n.id === selectedNode),
    [nodes, selectedNode],
  );

  const handleNavigateToPage = () => {
    if (selectedNodeData) {
      router.push(selectedNodeData.href);
    }
  };

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <svg
        ref={svgRef}
        className={cn("h-full w-full", {
          "cursor-grab": !isPanning && !draggingNode,
          "cursor-grabbing": isPanning,
        })}
        onWheel={handleWheel}
        onMouseDown={handleBackgroundMouseDown}
        onMouseMove={handleMouseMove}
      >
        <defs>
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1"
              cy="1"
              r="1"
              fill="var(--border-color-secondary)"
              opacity={0.3}
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#dot-pattern)" />

        <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
          {edges.map((edge, i) => {
            const source = nodes.find((n) => n.id === edge.source);
            const target = nodes.find((n) => n.id === edge.target);
            if (!source || !target) return null;

            const midX = (source.x + target.x) / 2;
            const midY = (source.y + target.y) / 2;
            const dx = target.x - source.x;
            const dy = target.y - source.y;
            const offset = 30;
            const controlX = midX + (-dy / Math.sqrt(dx * dx + dy * dy)) * offset;
            const controlY = midY + (dx / Math.sqrt(dx * dx + dy * dy)) * offset;

            return (
              <path
                key={`${edge.source}-${edge.target}-${i}`}
                d={`M ${source.x} ${source.y} Q ${controlX} ${controlY} ${target.x} ${target.y}`}
                stroke="var(--border-color-secondary)"
                strokeWidth={1}
                fill="none"
                opacity={0.4}
              />
            );
          })}

          {nodes.map((node) => (
            <GraphNode
              key={node.id}
              node={node}
              isSelected={selectedNode === node.id}
              scale={transform.scale}
              onMouseDown={(e) => handleNodeMouseDown(node.id, e)}
              onClick={(e) => handleNodeClick(node.id, e)}
            />
          ))}
        </g>
      </svg>

      <GraphControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onFitView={handleFitView}
        scale={transform.scale}
      />

      {selectedNodeData && (
        <div className="absolute left-4 top-4 w-72 rounded-lg border border-primary bg-elevated p-4 shadow-md-outline">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">{selectedNodeData.emoji}</span>
            <h3 className="text-primary text-sm font-semibold">
              {selectedNodeData.label}
            </h3>
          </div>
          <div className="mb-3">
            <p className="text-caption text-tertiary capitalize">
              {selectedNodeData.section}
            </p>
          </div>
          <button
            onClick={handleNavigateToPage}
            className="text-body-sm flex w-full items-center justify-between rounded-md border border-secondary bg-secondary px-3 py-2 text-secondary transition-colors hover:bg-tertiary"
          >
            <span>Open page</span>
            <Icon icon={arrowStraightRightIcon} size={14} color="secondary" />
          </button>
        </div>
      )}
    </div>
  );
}
