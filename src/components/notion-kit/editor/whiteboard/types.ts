export type Tool = "select" | "pen" | "rectangle" | "ellipse" | "text" | "eraser";

export interface Point {
  x: number;
  y: number;
}

export interface WhiteboardElement {
  id: string;
  type: "pen" | "rectangle" | "ellipse" | "text";
  points?: Point[];
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  text?: string;
  color: string;
}

export const NOTION_COLORS = [
  "#37352F", // Default dark
  "#E03E3E", // Red
  "#D9730D", // Orange
  "#DFAB01", // Yellow
  "#0F7B6C", // Green
  "#0B6E99", // Blue
  "#6940A5", // Purple
  "#AD1A72", // Pink
];
