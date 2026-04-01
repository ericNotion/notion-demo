export type ToolType =
  | "select"
  | "pen"
  | "rectangle"
  | "ellipse"
  | "line"
  | "text"
  | "sticky";

export type Point = {
  x: number;
  y: number;
};

export type Shape = {
  id: string;
  type: Exclude<ToolType, "select">;
  color: string;
  points?: Point[];
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  text?: string;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
};

export type ViewState = {
  zoom: number;
  panX: number;
  panY: number;
};

export const COLORS = [
  { name: "Gray", value: "#9b9a97" },
  { name: "Red", value: "#e03e3e" },
  { name: "Orange", value: "#d9730d" },
  { name: "Yellow", value: "#dfab01" },
  { name: "Green", value: "#4d6461" },
  { name: "Blue", value: "#0b6e99" },
  { name: "Purple", value: "#6940a5" },
  { name: "Pink", value: "#ad1a72" },
];
