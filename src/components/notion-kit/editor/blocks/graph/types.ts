export interface GraphNode {
  id: string;
  label: string;
  link: string;
  category?: string;
}

export interface GraphEdge {
  source: string;
  target: string;
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
