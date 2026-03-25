import { useCallback, useRef, useState } from "react";
import type { GraphEdge, GraphNode, NodePosition } from "./types";

export function useForceDirectedLayout(
  nodes: GraphNode[],
  edges: GraphEdge[],
  width: number,
  height: number,
) {
  const [positions, setPositions] = useState<Record<string, NodePosition>>({});
  const animationFrameRef = useRef<number | null>(null);
  const iterationRef = useRef(0);

  const initializePositions = useCallback(() => {
    const newPositions: Record<string, NodePosition> = {};
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;

    nodes.forEach((node, i) => {
      const angle = (i / nodes.length) * 2 * Math.PI;
      newPositions[node.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        vx: 0,
        vy: 0,
      };
    });

    setPositions(newPositions);
    iterationRef.current = 0;
  }, [nodes, width, height]);

  const animate = useCallback(() => {
    if (Object.keys(positions).length === 0) {
      initializePositions();
      return;
    }

    const maxIterations = 200;
    const step = () => {
      if (iterationRef.current >= maxIterations) {
        return;
      }

      setPositions((prevPositions) => {
        const newPositions = { ...prevPositions };
        const centerX = width / 2;
        const centerY = height / 2;

        // Apply forces
        const repulsionForce = 3000;
        const attractionForce = 0.01;
        const dampening = 0.85;
        const centeringForce = 0.005;

        // Repulsion between all nodes
        nodes.forEach((node1) => {
          const pos1 = newPositions[node1.id];
          if (!pos1) return;

          let fx = 0;
          let fy = 0;

          nodes.forEach((node2) => {
            if (node1.id === node2.id) return;
            const pos2 = newPositions[node2.id];
            if (!pos2) return;

            const dx = pos1.x - pos2.x;
            const dy = pos1.y - pos2.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;

            const force = repulsionForce / (distance * distance);
            fx += (dx / distance) * force;
            fy += (dy / distance) * force;
          });

          // Centering force
          const dcx = centerX - pos1.x;
          const dcy = centerY - pos1.y;
          fx += dcx * centeringForce;
          fy += dcy * centeringForce;

          pos1.vx = (pos1.vx + fx) * dampening;
          pos1.vy = (pos1.vy + fy) * dampening;
        });

        // Attraction along edges
        edges.forEach((edge) => {
          const pos1 = newPositions[edge.source];
          const pos2 = newPositions[edge.target];
          if (!pos1 || !pos2) return;

          const dx = pos2.x - pos1.x;
          const dy = pos2.y - pos1.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;

          const force = distance * attractionForce;
          const fx = (dx / distance) * force;
          const fy = (dy / distance) * force;

          pos1.vx += fx;
          pos1.vy += fy;
          pos2.vx -= fx;
          pos2.vy -= fy;
        });

        // Update positions
        nodes.forEach((node) => {
          const pos = newPositions[node.id];
          if (!pos) return;

          pos.x += pos.vx;
          pos.y += pos.vy;

          // Keep nodes within bounds with padding
          const padding = 50;
          pos.x = Math.max(padding, Math.min(width - padding, pos.x));
          pos.y = Math.max(padding, Math.min(height - padding, pos.y));
        });

        return newPositions;
      });

      iterationRef.current++;

      if (iterationRef.current < maxIterations) {
        animationFrameRef.current = requestAnimationFrame(step);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [positions, nodes, edges, width, height, initializePositions]);

  return { positions, animate };
}
