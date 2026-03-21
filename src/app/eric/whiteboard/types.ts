export type WhiteboardElement = {
  id: string;
  type: "shape" | "sticky" | "text" | "connector" | "image" | "freehand";
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
  color?: string;
  content?: string;
  shapeType?: "rectangle" | "circle" | "diamond" | "triangle";
  connectorPoints?: { x: number; y: number }[];
  imageUrl?: string;
};

export type Viewport = {
  x: number;
  y: number;
  zoom: number;
};

export type Template = {
  id: string;
  name: string;
  description: string;
  preview: string;
  elements: Omit<WhiteboardElement, "id">[];
};

export type Tool =
  | "select"
  | "shape"
  | "sticky"
  | "text"
  | "connector"
  | "freehand"
  | "image";

export type ExportFormat = "png" | "svg" | "pdf";
