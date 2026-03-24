import { useEffect, useRef } from "react";
import type { GraphData, NodePosition } from "./types";

interface UseForceDirectedLayoutProps {
  data: GraphData;
  width: number;
  height: number;
}

export function useForceDirectedLayout({
  data,
  width,
  height,
}: UseForceDirectedLayoutProps) {
  const positionsRef = useRef<Map<string, NodePosition>>(new Map());

  useEffect(() => {
    const positions = new Map<string, NodePosition>();
    
    // Initialize positions in a circle
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35;
    
    data.nodes.forEach((node, i) => {
      const angle = (i / data.nodes.length) * 2 * Math.PI;
      positions.set(node.id, {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        vx: 0,
        vy: 0,
      });
    });

    // Force-directed layout simulation
    const ITERATIONS = 200;
    const REPULSION_FORCE = 3000;
    const ATTRACTION_FORCE = 0.01;
    const CENTER_FORCE = 0.005;
    const DAMPENING = 0.85;
    const PADDING = 50;

    for (let iteration = 0; iteration < ITERATIONS; iteration++) {
      // Apply repulsion between all nodes
      data.nodes.forEach((nodeA) => {
        const posA = positions.get(nodeA.id)!;
        
        data.nodes.forEach((nodeB) => {
          if (nodeA.id === nodeB.id) return;
          
          const posB = positions.get(nodeB.id)!;
          const dx = posA.x - posB.x;
          const dy = posA.y - posB.y;
          const distSq = dx * dx + dy * dy;
          const dist = Math.sqrt(distSq);
          
          if (dist > 0) {
            const force = REPULSION_FORCE / distSq;
            posA.vx += (dx / dist) * force;
            posA.vy += (dy / dist) * force;
          }
        });
      });

      // Apply attraction along edges
      data.edges.forEach((edge) => {
        const posA = positions.get(edge.source);
        const posB = positions.get(edge.target);
        
        if (!posA || !posB) return;
        
        const dx = posB.x - posA.x;
        const dy = posB.y - posA.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > 0) {
          const force = dist * ATTRACTION_FORCE;
          posA.vx += (dx / dist) * force;
          posA.vy += (dy / dist) * force;
          posB.vx -= (dx / dist) * force;
          posB.vy -= (dy / dist) * force;
        }
      });

      // Apply centering force
      data.nodes.forEach((node) => {
        const pos = positions.get(node.id)!;
        pos.vx += (centerX - pos.x) * CENTER_FORCE;
        pos.vy += (centerY - pos.y) * CENTER_FORCE;
      });

      // Update positions and apply dampening
      data.nodes.forEach((node) => {
        const pos = positions.get(node.id)!;
        pos.x += pos.vx;
        pos.y += pos.vy;
        pos.vx *= DAMPENING;
        pos.vy *= DAMPENING;

        // Clamp to boundaries
        pos.x = Math.max(PADDING, Math.min(width - PADDING, pos.x));
        pos.y = Math.max(PADDING, Math.min(height - PADDING, pos.y));
      });
    }

    positionsRef.current = positions;
  }, [data, width, height]);

  return positionsRef.current;
}
