import { useEffect, useRef, useState } from "react";

export type Node = {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  fx?: number;
  fy?: number;
  emoji: string;
  label: string;
  href: string;
  section: "favorites" | "private" | "shared";
};

export type Edge = {
  source: string;
  target: string;
};

export type SimulationConfig = {
  width: number;
  height: number;
  centerForce: number;
  repelForce: number;
  linkForce: number;
  damping: number;
};

const DEFAULT_CONFIG: SimulationConfig = {
  width: 800,
  height: 600,
  centerForce: 0.1,
  repelForce: 3000,
  linkForce: 0.5,
  damping: 0.9,
};

export function useForceSimulation(
  initialNodes: Omit<Node, "x" | "y" | "vx" | "vy">[],
  edges: Edge[],
  config: Partial<SimulationConfig> = {},
) {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };
  const [nodes, setNodes] = useState<Node[]>([]);
  const [isRunning, setIsRunning] = useState(true);
  const animationFrameRef = useRef<number>();
  const iterationRef = useRef(0);

  // Initialize nodes with random positions
  useEffect(() => {
    const centerX = fullConfig.width / 2;
    const centerY = fullConfig.height / 2;
    const radius = Math.min(fullConfig.width, fullConfig.height) / 4;

    const initializedNodes = initialNodes.map((node, i) => {
      const angle = (i / initialNodes.length) * Math.PI * 2;
      return {
        ...node,
        x: centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 100,
        y: centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 100,
        vx: 0,
        vy: 0,
      };
    });

    setNodes(initializedNodes);
    setIsRunning(true);
    iterationRef.current = 0;
  }, [initialNodes, fullConfig.width, fullConfig.height]);

  // Run force simulation
  useEffect(() => {
    if (!isRunning || nodes.length === 0) return;

    const tick = () => {
      setNodes((currentNodes) => {
        const newNodes = currentNodes.map((node) => ({ ...node }));
        const nodeMap = new Map(newNodes.map((n) => [n.id, n]));

        // Apply forces
        newNodes.forEach((node) => {
          if (node.fx !== undefined && node.fy !== undefined) {
            node.x = node.fx;
            node.y = node.fy;
            node.vx = 0;
            node.vy = 0;
            return;
          }

          // Center gravity
          const centerX = fullConfig.width / 2;
          const centerY = fullConfig.height / 2;
          const dx = centerX - node.x;
          const dy = centerY - node.y;
          node.vx += dx * fullConfig.centerForce;
          node.vy += dy * fullConfig.centerForce;

          // Repulsion between all nodes
          newNodes.forEach((other) => {
            if (node.id === other.id) return;
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > 0) {
              const dist = Math.sqrt(distSq);
              const force = fullConfig.repelForce / distSq;
              node.vx += (dx / dist) * force;
              node.vy += (dy / dist) * force;
            }
          });
        });

        // Link forces
        edges.forEach((edge) => {
          const source = nodeMap.get(edge.source);
          const target = nodeMap.get(edge.target);
          if (!source || !target) return;

          const dx = target.x - source.x;
          const dy = target.y - source.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0) {
            const force = (dist - 100) * fullConfig.linkForce;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;

            if (source.fx === undefined && source.fy === undefined) {
              source.vx += fx;
              source.vy += fy;
            }
            if (target.fx === undefined && target.fy === undefined) {
              target.vx -= fx;
              target.vy -= fy;
            }
          }
        });

        // Update positions
        newNodes.forEach((node) => {
          if (node.fx !== undefined && node.fy !== undefined) return;

          node.vx *= fullConfig.damping;
          node.vy *= fullConfig.damping;
          node.x += node.vx;
          node.y += node.vy;

          // Keep nodes within bounds
          const padding = 40;
          node.x = Math.max(
            padding,
            Math.min(fullConfig.width - padding, node.x),
          );
          node.y = Math.max(
            padding,
            Math.min(fullConfig.height - padding, node.y),
          );
        });

        return newNodes;
      });

      iterationRef.current++;

      // Stop after 150 iterations or if movement is minimal
      if (iterationRef.current < 150) {
        animationFrameRef.current = requestAnimationFrame(tick);
      } else {
        setIsRunning(false);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRunning, nodes.length, edges, fullConfig]);

  const updateNodePosition = (id: string, x: number, y: number) => {
    setNodes((currentNodes) =>
      currentNodes.map((node) =>
        node.id === id ? { ...node, fx: x, fy: y, x, y, vx: 0, vy: 0 } : node,
      ),
    );
  };

  const releaseNode = (id: string) => {
    setNodes((currentNodes) =>
      currentNodes.map((node) => {
        if (node.id === id) {
          const { fx, fy, ...rest } = node;
          return rest;
        }
        return node;
      }),
    );
  };

  const restart = () => {
    iterationRef.current = 0;
    setIsRunning(true);
  };

  return {
    nodes,
    updateNodePosition,
    releaseNode,
    restart,
    isRunning,
  };
}
