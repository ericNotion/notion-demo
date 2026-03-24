export interface GraphNode {
  id: string;
  label: string;
  link: string;
  type?: string; // Node type for visual grouping
}

export interface GraphEdge {
  source: string;
  target: string;
  label?: string; // Optional edge label
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface NodePosition {
  x: number;
  y: number;
  vx: number;
  vy: number;
}
