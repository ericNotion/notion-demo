"use client";

import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { magnifyingGlassMinusIcon } from "@nds-icons/magnifyingGlassMinus/default.icon";
import { magnifyingGlassPlusIcon } from "@nds-icons/magnifyingGlassPlus/default.icon";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createBlockId } from "../../atoms";
import { CmdIcon, DragHandle } from "../DragHandle";
import type { BlockComponentProps, BlockDefinition } from "../types";
import { mockGraphData } from "./mockData";
import type { GraphData, GraphNode } from "./types";
import { useForceDirectedLayout } from "./useForceDirectedLayout";

function GraphDiagramBlockComponent({
  block,
  isGripSelected,
  isDragging,
  wrapperRef,
  insertAfter,
  remove,
  focusPrev,
  focusNext,
  startDrag,
  selectGrip,
}: BlockComponentProps) {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [graphData] = useState<GraphData>(mockGraphData);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDraggingCanvas, setIsDraggingCanvas] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const { positions, animate } = useForceDirectedLayout(
    graphData.nodes,
    graphData.edges,
    800,
    400,
  );

  useEffect(() => {
    animate();
  }, [animate]);

  // Render the graph on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    ctx.save();
    ctx.translate(pan.x, pan.y);
    ctx.scale(zoom, zoom);

    // Draw edges
    ctx.strokeStyle =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-border-secondary")
        .trim() || "#e0e0e0";
    ctx.lineWidth = 1.5;

    graphData.edges.forEach((edge) => {
      const sourcePos = positions[edge.source];
      const targetPos = positions[edge.target];
      if (sourcePos && targetPos) {
        ctx.beginPath();
        ctx.moveTo(sourcePos.x, sourcePos.y);
        ctx.lineTo(targetPos.x, targetPos.y);
        ctx.stroke();
      }
    });

    // Draw nodes
    graphData.nodes.forEach((node) => {
      const pos = positions[node.id];
      if (!pos) return;

      const isSelected = selectedNode === node.id;
      const isHovered = hoveredNode === node.id;

      // Node circle
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);

      if (isSelected) {
        ctx.fillStyle =
          getComputedStyle(document.documentElement)
            .getPropertyValue("--color-bg-blue-primary")
            .trim() || "#0066FF";
      } else if (isHovered) {
        ctx.fillStyle =
          getComputedStyle(document.documentElement)
            .getPropertyValue("--color-bg-tertiary")
            .trim() || "#888888";
      } else {
        ctx.fillStyle =
          getComputedStyle(document.documentElement)
            .getPropertyValue("--color-bg-primary")
            .trim() || "#333333";
      }
      ctx.fill();

      // Node border
      ctx.strokeStyle =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--color-border-primary")
          .trim() || "#cccccc";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw label
      ctx.fillStyle =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--color-text-primary")
          .trim() || "#000000";
      ctx.font =
        '12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.label, pos.x, pos.y + 20);
    });

    ctx.restore();
  }, [positions, zoom, pan, selectedNode, hoveredNode, graphData]);

  const findNodeAt = (x: number, y: number): GraphNode | null => {
    for (const node of graphData.nodes) {
      const pos = positions[node.id];
      if (!pos) continue;
      const dx = x - pos.x;
      const dy = y - pos.y;
      // Hit area covers the circle (r=8) and label below it (y+20)
      if (Math.abs(dx) <= 40 && dy >= -10 && dy <= 30) return node;
    }
    return null;
  };

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - pan.x) / zoom;
    const y = (e.clientY - rect.top - pan.y) / zoom;

    const clickedNode = findNodeAt(x, y);

    if (clickedNode) {
      setSelectedNode(clickedNode.id);
    } else {
      setSelectedNode(null);
      setIsDraggingCanvas(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (isDraggingCanvas) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - pan.x) / zoom;
    const y = (e.clientY - rect.top - pan.y) / zoom;

    const hovered = findNodeAt(x, y);
    setHoveredNode(hovered?.id ?? null);
    canvas.style.cursor = hovered
      ? "pointer"
      : isDraggingCanvas
        ? "grabbing"
        : "grab";
  };

  const handleCanvasMouseUp = () => {
    setIsDraggingCanvas(false);
  };

  const handleCanvasMouseLeave = () => {
    setIsDraggingCanvas(false);
    setHoveredNode(null);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev * 1.2, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev / 1.2, 0.3));
  };

  const handleResetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div
      ref={wrapperRef}
      className={cn("pt-[4px] pb-[4px]", isDragging && "opacity-40")}
    >
      <div className="group/block relative">
        <DragHandle
          className="top-4 -left-[52px]"
          onAdd={() =>
            insertAfter({
              id: createBlockId(),
              type: "paragraph",
              text: "",
            })
          }
          onGripPointerDown={(e) => startDrag(e)}
          onGripClick={() => selectGrip()}
        />
        <div
          data-block-id={block.id}
          className={cn(
            "overflow-hidden rounded-lg",
            isGripSelected && "bg-blue-50 dark:bg-blue-950/30",
          )}
          onKeyDown={(e) => {
            if (e.key === "Backspace" || e.key === "Delete") {
              e.preventDefault();
              focusPrev();
              remove();
            }
            if (e.key === "Enter") {
              e.preventDefault();
              insertAfter({
                id: createBlockId(),
                type: "paragraph",
                text: "",
              });
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              focusPrev();
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              focusNext();
            }
          }}
          tabIndex={0}
        >
          <div
            ref={containerRef}
            className="bg-secondary border-primary relative overflow-hidden rounded-lg border"
          >
            {/* Controls */}
            <div className="absolute top-2 right-2 z-10 flex gap-1">
              <button
                type="button"
                onClick={handleZoomIn}
                className="bg-elevated hover:bg-secondary shadow-sm-outline text-secondary flex h-7 w-7 items-center justify-center rounded-md transition-colors"
                title="Zoom in"
              >
                <Icon icon={magnifyingGlassPlusIcon} size="small" />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                className="bg-elevated hover:bg-secondary shadow-sm-outline text-secondary flex h-7 w-7 items-center justify-center rounded-md transition-colors"
                title="Zoom out"
              >
                <Icon icon={magnifyingGlassMinusIcon} size="small" />
              </button>
              <button
                type="button"
                onClick={handleResetView}
                className="bg-elevated hover:bg-secondary shadow-sm-outline text-tertiary rounded-md px-2 py-1 text-xs font-medium transition-colors"
                title="Reset view"
              >
                Reset
              </button>
            </div>

            {/* Canvas */}
            <canvas
              ref={canvasRef}
              className="h-[400px] w-full"
              onMouseDown={handleCanvasMouseDown}
              onMouseMove={handleCanvasMouseMove}
              onMouseUp={handleCanvasMouseUp}
              onMouseLeave={handleCanvasMouseLeave}
            />

            {/* Info overlay */}
            {selectedNode &&
              (() => {
                const node = graphData.nodes.find((n) => n.id === selectedNode);
                return node ? (
                  <button
                    type="button"
                    onClick={() => router.push(node.link)}
                    className="bg-elevated shadow-md-outline text-primary hover:bg-tertiary absolute bottom-2 left-2 cursor-pointer rounded-lg p-3 text-left text-sm transition-colors"
                  >
                    <div className="text-body font-medium">{node.label}</div>
                    <div className="text-caption text-tertiary mt-1">
                      Click to open page
                    </div>
                  </button>
                ) : null;
              })()}

            {!selectedNode && (
              <div className="text-tertiary absolute bottom-2 left-2 text-xs">
                <div className="text-caption">
                  Click and drag to pan • Scroll to zoom • Click node to open
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const graphDiagramBlockDef: BlockDefinition = {
  type: "graph",
  slashCommand: {
    id: "graph",
    label: "Graph Diagram",
    description: "Visualize relationships between pages.",
    icon: (
      <CmdIcon>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-secondary"
        >
          <circle cx="5" cy="5" r="2.5" fill="currentColor" />
          <circle cx="15" cy="5" r="2.5" fill="currentColor" />
          <circle cx="10" cy="15" r="2.5" fill="currentColor" />
          <line
            x1="6.5"
            y1="6.5"
            x2="8.5"
            y2="13.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="13.5"
            y1="6.5"
            x2="11.5"
            y2="13.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </CmdIcon>
    ),
    keywords: [
      "graph",
      "diagram",
      "network",
      "nodes",
      "relationships",
      "connections",
      "roam",
    ],
    section: "basic",
  },
  Component: GraphDiagramBlockComponent,
};
