"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { pages } from "../data";
import { Button } from "@/components/ui/button";
import { Icon } from "@nds-icons";
import { magnifyingGlassPlusIcon } from "@nds-icons/magnifyingGlassPlus/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { plusForwardSlashMinusIcon } from "@nds-icons/plusForwardSlashMinus/default.icon";

type Node = {
  id: string;
  emoji: string;
  label: string;
  href: string;
  section: string;
  createdBy: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  pinned: boolean;
};

type Edge = {
  source: string;
  target: string;
};

export function NodeDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isPanning, setIsPanning] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    label: string;
    createdBy: string;
  } | null>(null);

  const animationRef = useRef<number>();

  // Initialize nodes and edges from data
  useEffect(() => {
    const nodeMap = new Map<string, Node>();
    const edgeList: Edge[] = [];

    // Create nodes
    pages.forEach((page) => {
      nodeMap.set(page.label, {
        id: page.label,
        emoji: page.emoji,
        label: page.label,
        href: page.href,
        section: page.section,
        createdBy: page.createdBy,
        x: Math.random() * 800 - 400,
        y: Math.random() * 600 - 300,
        vx: 0,
        vy: 0,
        pinned: false,
      });
    });

    // Create edges from parent relationships
    pages.forEach((page) => {
      if (page.parent && nodeMap.has(page.parent)) {
        edgeList.push({
          source: page.parent,
          target: page.label,
        });
      }
    });

    setNodes(Array.from(nodeMap.values()));
    setEdges(edgeList);
  }, []);

  // Force simulation
  useEffect(() => {
    if (nodes.length === 0) return;

    const simulate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      setNodes((prevNodes) => {
        const newNodes = [...prevNodes];
        let totalEnergy = 0;

        // Apply forces
        for (let i = 0; i < newNodes.length; i++) {
          const node = newNodes[i];
          if (node.pinned) continue;

          let fx = 0;
          let fy = 0;

          // Repulsion between all nodes (Coulomb's law)
          for (let j = 0; j < newNodes.length; j++) {
            if (i === j) continue;
            const other = newNodes[j];
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq) || 1;
            const force = 5000 / distSq;
            fx += (dx / dist) * force;
            fy += (dy / dist) * force;
          }

          // Attraction along edges (spring force)
          edges.forEach((edge) => {
            let other: Node | undefined;
            if (edge.source === node.id) {
              other = newNodes.find((n) => n.id === edge.target);
            } else if (edge.target === node.id) {
              other = newNodes.find((n) => n.id === edge.source);
            }
            if (other) {
              const dx = other.x - node.x;
              const dy = other.y - node.y;
              const dist = Math.sqrt(dx * dx + dy * dy) || 1;
              const force = dist * 0.01;
              fx += (dx / dist) * force;
              fy += (dy / dist) * force;
            }
          });

          // Centering force
          const dx = centerX - node.x;
          const dy = centerY - node.y;
          fx += dx * 0.0005;
          fy += dy * 0.0005;

          // Update velocity with damping
          node.vx = (node.vx + fx) * 0.85;
          node.vy = (node.vy + fy) * 0.85;

          // Update position
          node.x += node.vx;
          node.y += node.vy;

          totalEnergy += node.vx * node.vx + node.vy * node.vy;
        }

        // Stop simulation if energy is low
        if (totalEnergy < 0.1) {
          cancelAnimationFrame(animationRef.current!);
        } else {
          animationRef.current = requestAnimationFrame(simulate);
        }

        return newNodes;
      });
    };

    animationRef.current = requestAnimationFrame(simulate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodes.length, edges]);

  // Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Get CSS variables
    const root = document.documentElement;
    const styles = getComputedStyle(root);
    const textPrimary = styles.getPropertyValue("--text-color-primary").trim();
    const textSecondary = styles.getPropertyValue("--text-color-secondary").trim();
    const bgSecondary = styles.getPropertyValue("--background-color-secondary").trim();
    const borderSecondary = styles.getPropertyValue("--border-color-secondary").trim();

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Apply transform
      ctx.save();
      ctx.translate(transform.x, transform.y);
      ctx.scale(transform.scale, transform.scale);

      // Draw edges
      ctx.strokeStyle = borderSecondary || "#e0e0e0";
      ctx.lineWidth = 1 / transform.scale;
      edges.forEach((edge) => {
        const source = nodes.find((n) => n.id === edge.source);
        const target = nodes.find((n) => n.id === edge.target);
        if (source && target) {
          ctx.beginPath();
          ctx.moveTo(source.x, source.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        }
      });

      // Draw nodes
      nodes.forEach((node) => {
        const radius = hoveredNode === node.id ? 28 : 24;

        // Get section color
        let nodeColor = bgSecondary || "#f5f5f5";
        let borderColor = borderSecondary || "#e0e0e0";
        if (node.section === "favorites") {
          borderColor = "#5e9fe8";
        } else if (node.section === "shared") {
          borderColor = "#4a7c4f";
        }

        // Draw circle
        ctx.fillStyle = nodeColor;
        ctx.strokeStyle = hoveredNode === node.id ? borderColor : borderSecondary || "#e0e0e0";
        ctx.lineWidth = hoveredNode === node.id ? 2 / transform.scale : 1 / transform.scale;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Draw emoji
        ctx.font = `${16 / transform.scale}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.emoji, node.x, node.y);

        // Draw label
        ctx.font = `${12 / transform.scale}px sans-serif`;
        ctx.fillStyle = textPrimary || "#000";
        ctx.textBaseline = "top";
        const maxWidth = 100 / transform.scale;
        const text = node.label.length > 20 ? node.label.slice(0, 17) + "..." : node.label;
        ctx.fillText(text, node.x, node.y + radius + 4);
      });

      ctx.restore();

      requestAnimationFrame(render);
    };

    render();
  }, [nodes, edges, hoveredNode, transform]);

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - transform.x) / transform.scale;
    const mouseY = (e.clientY - rect.top - transform.y) / transform.scale;

    // Check if clicking on a node
    const clickedNode = nodes.find((node) => {
      const dx = mouseX - node.x;
      const dy = mouseY - node.y;
      return Math.sqrt(dx * dx + dy * dy) <= 24;
    });

    if (clickedNode) {
      setDraggedNode(clickedNode.id);
      setNodes((prev) =>
        prev.map((n) =>
          n.id === clickedNode.id ? { ...n, pinned: true } : n
        )
      );
    } else {
      setIsPanning(true);
      setLastMouse({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - transform.x) / transform.scale;
    const mouseY = (e.clientY - rect.top - transform.y) / transform.scale;

    if (draggedNode) {
      setNodes((prev) =>
        prev.map((n) =>
          n.id === draggedNode
            ? { ...n, x: mouseX, y: mouseY, vx: 0, vy: 0 }
            : n
        )
      );
    } else if (isPanning) {
      const dx = e.clientX - lastMouse.x;
      const dy = e.clientY - lastMouse.y;
      setTransform((prev) => ({
        ...prev,
        x: prev.x + dx,
        y: prev.y + dy,
      }));
      setLastMouse({ x: e.clientX, y: e.clientY });
    } else {
      // Check hover
      const hovered = nodes.find((node) => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        return Math.sqrt(dx * dx + dy * dy) <= 24;
      });

      setHoveredNode(hovered?.id || null);

      if (hovered) {
        setTooltip({
          x: e.clientX,
          y: e.clientY,
          label: hovered.label,
          createdBy: hovered.createdBy,
        });
      } else {
        setTooltip(null);
      }
    }
  };

  const handleMouseUp = () => {
    setDraggedNode(null);
    setIsPanning(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (draggedNode || isPanning) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - transform.x) / transform.scale;
    const mouseY = (e.clientY - rect.top - transform.y) / transform.scale;

    const clickedNode = nodes.find((node) => {
      const dx = mouseX - node.x;
      const dy = mouseY - node.y;
      return Math.sqrt(dx * dx + dy * dy) <= 24;
    });

    if (clickedNode) {
      router.push(clickedNode.href);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(0.1, Math.min(5, transform.scale * delta));

    setTransform((prev) => ({
      scale: newScale,
      x: mouseX - (mouseX - prev.x) * (newScale / prev.scale),
      y: mouseY - (mouseY - prev.y) * (newScale / prev.scale),
    }));
  };

  const handleZoomIn = () => {
    setTransform((prev) => ({
      ...prev,
      scale: Math.min(5, prev.scale * 1.2),
    }));
  };

  const handleZoomOut = () => {
    setTransform((prev) => ({
      ...prev,
      scale: Math.max(0.1, prev.scale / 1.2),
    }));
  };

  const handleReset = () => {
    setTransform({ x: 0, y: 0, scale: 1 });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "600px" }}>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        onWheel={handleWheel}
        style={{ 
          display: "block",
          width: "100%",
          height: "100%",
          cursor: draggedNode || isPanning ? "grabbing" : "grab" 
        }}
      />

      {/* Toolbar */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          display: "flex",
          gap: 8,
          background: "var(--background-color-primary)",
          padding: 8,
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Button variant="ghost" size="sm" onClick={handleZoomIn}>
          <Icon icon={plusIcon} />
        </Button>
        <Button variant="ghost" size="sm" onClick={handleZoomOut}>
          <Icon icon={plusForwardSlashMinusIcon} />
        </Button>
        <Button variant="ghost" size="sm" onClick={handleReset}>
          <Icon icon={magnifyingGlassPlusIcon} />
        </Button>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x + 10,
            top: tooltip.y + 10,
            background: "var(--background-color-primary)",
            padding: "8px 12px",
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            pointerEvents: "none",
            fontSize: 14,
            border: "1px solid var(--border-color-secondary)",
          }}
        >
          <div style={{ fontWeight: 600 }}>{tooltip.label}</div>
          <div style={{ fontSize: 12, color: "var(--text-color-secondary)" }}>
            by {tooltip.createdBy}
          </div>
        </div>
      )}
    </div>
  );
}
