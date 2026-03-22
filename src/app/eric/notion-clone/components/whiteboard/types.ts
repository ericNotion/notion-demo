export type Tool =
  | "select"
  | "draw"
  | "rectangle"
  | "circle"
  | "arrow"
  | "text"
  | "eraser";

export type Point = {
  x: number;
  y: number;
};

export type DrawElement = {
  id: string;
  type: "draw";
  points: Point[];
  color: string;
  strokeWidth: number;
};

export type RectangleElement = {
  id: string;
  type: "rectangle";
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  strokeWidth: number;
  fill?: string;
};

export type CircleElement = {
  id: string;
  type: "circle";
  x: number;
  y: number;
  radius: number;
  color: string;
  strokeWidth: number;
  fill?: string;
};

export type ArrowElement = {
  id: string;
  type: "arrow";
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
  strokeWidth: number;
};

export type TextElement = {
  id: string;
  type: "text";
  x: number;
  y: number;
  text: string;
  color: string;
  fontSize: number;
};

export type WhiteboardElement =
  | DrawElement
  | RectangleElement
  | CircleElement
  | ArrowElement
  | TextElement;

export type ViewportState = {
  offsetX: number;
  offsetY: number;
  scale: number;
};
