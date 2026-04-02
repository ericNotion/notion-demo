export type Tool =
  | "select"
  | "pencil"
  | "rectangle"
  | "circle"
  | "line"
  | "eraser"
  | "postit";

export type DrawingType = "pencil" | "rectangle" | "circle" | "line";

export interface Point {
  x: number;
  y: number;
}

export interface Drawing {
  id: string;
  type: DrawingType;
  points: Point[];
  color: string;
  strokeWidth: number;
}

export interface PostItNote {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  text: string;
  rotation: number;
}

export interface ViewTransform {
  x: number;
  y: number;
  scale: number;
}
