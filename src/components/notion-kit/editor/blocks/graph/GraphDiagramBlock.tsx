import { Icon } from "@nds-icons";
import { graphAreaIcon } from "@nds-icons/graphArea/default.icon";
import { magnifyingGlassPlusIcon } from "@nds-icons/magnifyingGlassPlus/default.icon";
import { plusMinusIcon } from "@nds-icons/plusMinus/default.icon";
import { useEffect, useRef, useState } from "react";
import { CmdIcon, DragHandle } from "../DragHandle";
import type { BlockComponentProps, BlockDefinition } from "../types";
import { mockGraphData } from "./mockData";
import type { GraphNode } from "./types";
import { useForceDirectedLayout } from "./useForceDirectedLayout";

function GraphDiagramBlockComponent({ block, wrapperRef }: BlockComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [canvasSize] = useState({ width: 800, height: 600 });

  const positions = useForceDirectedLayout({
    data: mockGraphData,
    width: canvasSize.width,
    height: canvasSize.height,
  });

  // Get colors from CSS custom properties
  const getColors = () => {
    const style = getComputedStyle(document.documentElement);
    return {
      background: style.getPropertyValue("--color-background-secondary").trim() || "#f8f9fa",
      border: style.getPropertyValue("--color-border-primary").trim() || "#e5e7eb",
      elevated: style.getPropertyValue("--color-background-elevated").trim() || "#ffffff",
      textPrimary: style.getPropertyValue("--color-text-primary").trim() || "#111827",
      textSecondary: style.getPropertyValue("--color-text-secondary").trim() || "#6b7280",
      textTertiary: style.getPropertyValue("--color-text-tertiary").trim() || "#9ca3af",
      blue: style.getPropertyValue("--color-blue-500").trim() || "#3b82f6",
      blueLight: style.getPropertyValue("--color-blue-100").trim() || "#dbeafe",
      green: style.getPropertyValue("--color-green-500").trim() || "#10b981",
      purple: style.getPropertyValue("--color-purple-500").trim() || "#8b5cf6",
      orange: style.getPropertyValue("--color-orange-500").trim() || "#f97316",
      pink: style.getPropertyValue("--color-pink-500").trim() || "#ec4899",
    };
  };

  // Get node color based on type
  const getNodeColor = (type?: string, colors = getColors()) => {
    switch (type) {
      case "planning":
        return colors.blue;
      case "design":
        return colors.purple;
      case "technical":
        return colors.green;
      case "feature":
        return colors.orange;
      case "research":
        return colors.pink;
      default:
        return colors.textSecondary;
    }
  };

  // Get node size based on connection count
  const getNodeSize = (nodeId: string) => {
    const connections = mockGraphData.edges.filter(
      (e) => e.source === nodeId || e.target === nodeId
    ).length;
    return 10 + Math.min(connections * 2, 10); // Base 10px, max 20px
  };

  // Draw the graph
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = getColors();
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Apply transformations
    ctx.save();
    ctx.translate(pan.x, pan.y);
    ctx.scale(zoom, zoom);

    // Draw edges
    mockGraphData.edges.forEach((edge) => {
      const sourcePos = positions.get(edge.source);
      const targetPos = positions.get(edge.target);
      
      if (!sourcePos || !targetPos) return;

      ctx.beginPath();
      ctx.moveTo(sourcePos.x, sourcePos.y);
      ctx.lineTo(targetPos.x, targetPos.y);
      ctx.strokeStyle = colors.border;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw arrow
      const dx = targetPos.x - sourcePos.x;
      const dy = targetPos.y - sourcePos.y;
      const angle = Math.atan2(dy, dx);
      const targetSize = getNodeSize(edge.target);
      const arrowX = targetPos.x - targetSize * Math.cos(angle);
      const arrowY = targetPos.y - targetSize * Math.sin(angle);
      
      const arrowSize = 6;
      ctx.beginPath();
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(
        arrowX - arrowSize * Math.cos(angle - Math.PI / 6),
        arrowY - arrowSize * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        arrowX - arrowSize * Math.cos(angle + Math.PI / 6),
        arrowY - arrowSize * Math.sin(angle + Math.PI / 6)
      );
      ctx.closePath();
      ctx.fillStyle = colors.border;
      ctx.fill();
    });

    // Draw nodes
    mockGraphData.nodes.forEach((node) => {
      const pos = positions.get(node.id);
      if (!pos) return;

      const size = getNodeSize(node.id);
      const isSelected = selectedNode?.id === node.id;
      const isHovered = hoveredNode === node.id;

      // Node circle
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size, 0, 2 * Math.PI);
      
      if (isSelected) {
        ctx.fillStyle = colors.blue;
        ctx.strokeStyle = colors.blue;
        ctx.lineWidth = 3;
      } else {
        ctx.fillStyle = getNodeColor(node.type, colors);
        ctx.strokeStyle = isHovered ? colors.blue : colors.elevated;
        ctx.lineWidth = isHovered ? 2 : 1;
      }
      
      ctx.fill();
      ctx.stroke();

      // Node label
      if (isHovered || isSelected) {
        ctx.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
        ctx.fillStyle = colors.textPrimary;
        ctx.textAlign = "center";
        ctx.fillText(node.label, pos.x, pos.y + size + 15);
      }
    });

    ctx.restore();
  }, [positions, zoom, pan, selectedNode, hoveredNode]);

  // Handle mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - pan.x) / zoom;
    const y = (e.clientY - rect.top - pan.y) / zoom;

    // Check if clicking on a node
    let clickedNode: GraphNode | null = null;
    for (const node of mockGraphData.nodes) {
      const pos = positions.get(node.id);
      if (!pos) continue;

      const size = getNodeSize(node.id);
      const dist = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
      
      if (dist <= size) {
        clickedNode = node;
        break;
      }
    }

    if (clickedNode) {
      setSelectedNode(clickedNode);
    } else {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
      return;
    }

    // Check hover
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - pan.x) / zoom;
    const y = (e.clientY - rect.top - pan.y) / zoom;

    let hoveredId: string | null = null;
    for (const node of mockGraphData.nodes) {
      const pos = positions.get(node.id);
      if (!pos) continue;

      const size = getNodeSize(node.id);
      const dist = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
      
      if (dist <= size) {
        hoveredId = node.id;
        break;
      }
    }

    setHoveredNode(hoveredId);
    canvas.style.cursor = hoveredId ? "pointer" : isDragging ? "grabbing" : "grab";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setZoom((z) => Math.min(z + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom((z) => Math.max(z - 0.2, 0.5));
  };

  const handleResetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedNode(null);
  };

  // Get connection count for selected node
  const getConnectionCount = (nodeId: string) => {
    return mockGraphData.edges.filter(
      (e) => e.source === nodeId || e.target === nodeId
    ).length;
  };

  return (
    <div ref={wrapperRef} className="group relative my-1">
      <DragHandle blockId={block.id} />
      
      <div className="ml-6 rounded-lg border border-primary bg-secondary p-4">
        <div className="relative">
          {/* Canvas */}
          <canvas
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            className="rounded border border-primary bg-elevated"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            data-block-id={block.id}
            tabIndex={0}
          />

          {/* Controls */}
          <div className="absolute right-2 top-2 flex flex-col gap-1">
            <button
              onClick={handleZoomIn}
              className="rounded bg-elevated p-2 shadow-sm-outline transition-colors hover:bg-secondary"
              title="Zoom In"
            >
              <Icon icon={magnifyingGlassPlusIcon} size="small" />
            </button>
            <button
              onClick={handleZoomOut}
              className="rounded bg-elevated p-2 shadow-sm-outline transition-colors hover:bg-secondary"
              title="Zoom Out"
            >
              <Icon icon={plusMinusIcon} size="small" />
            </button>
            <button
              onClick={handleResetView}
              className="rounded bg-elevated p-2 shadow-sm-outline transition-colors hover:bg-secondary"
              title="Reset View"
            >
              <Icon icon={graphAreaIcon} size="small" />
            </button>
          </div>

          {/* Info overlay */}
          {selectedNode && (
            <div className="absolute bottom-2 left-2 max-w-xs rounded bg-elevated p-3 shadow-md-outline">
              <div className="mb-1 flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: getNodeColor(selectedNode.type) }}
                />
                <h4 className="text-body font-semibold text-primary">
                  {selectedNode.label}
                </h4>
              </div>
              <p className="text-caption text-secondary">
                {getConnectionCount(selectedNode.id)} connections
              </p>
              <p className="text-caption text-tertiary">
                Path: {selectedNode.link}
              </p>
              <button
                onClick={() => setSelectedNode(null)}
                className="mt-2 text-caption text-blue-500 hover:text-blue-600"
              >
                Close
              </button>
            </div>
          )}
        </div>

        <div className="mt-2 text-caption text-tertiary">
          {mockGraphData.nodes.length} pages • {mockGraphData.edges.length} connections
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
    description: "Visualize relationships between pages",
    icon: (
      <CmdIcon>
        <Icon icon={graphAreaIcon} size="small" />
      </CmdIcon>
    ),
    keywords: ["graph", "diagram", "network", "nodes", "relationships", "connections", "roam"],
    section: "basic",
  },
  Component: GraphDiagramBlockComponent,
};
