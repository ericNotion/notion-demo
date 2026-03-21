import { atom } from "jotai";

export type Point = { x: number; y: number };

export type ShapeType = "rectangle" | "ellipse" | "diamond" | "triangle" | "rounded-rectangle";

export type BaseObject = {
  id: string;
  position: Point;
  selected: boolean;
  rotation: number;
};

export type ShapeObject = BaseObject & {
  type: "shape";
  shapeType: ShapeType;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  text?: string;
};

export type StickyNoteObject = BaseObject & {
  type: "sticky-note";
  width: number;
  height: number;
  color: string;
  text: string;
};

export type ConnectorObject = BaseObject & {
  type: "connector";
  startId?: string;
  endId?: string;
  startPoint: Point;
  endPoint: Point;
  style: "straight" | "elbow" | "curved";
  arrowEnd: boolean;
};

export type FreehandObject = BaseObject & {
  type: "freehand";
  points: Point[];
  color: string;
  strokeWidth: number;
};

export type TextObject = BaseObject & {
  type: "text";
  text: string;
  fontSize: number;
  color: string;
};

export type ImageObject = BaseObject & {
  type: "image";
  width: number;
  height: number;
  src: string;
};

export type FrameObject = BaseObject & {
  type: "frame";
  width: number;
  height: number;
  name: string;
  color: string;
};

export type CanvasObject =
  | ShapeObject
  | StickyNoteObject
  | ConnectorObject
  | FreehandObject
  | TextObject
  | ImageObject
  | FrameObject;

export type Tool =
  | "select"
  | "rectangle"
  | "ellipse"
  | "diamond"
  | "triangle"
  | "rounded-rectangle"
  | "sticky-note"
  | "connector"
  | "pen"
  | "text"
  | "image"
  | "frame";

export type ViewTransform = {
  x: number;
  y: number;
  scale: number;
};

// Atoms
export const objectsAtom = atom<CanvasObject[]>([]);
export const selectedToolAtom = atom<Tool>("select");
export const viewTransformAtom = atom<ViewTransform>({ x: 0, y: 0, scale: 1 });
export const isDraggingAtom = atom(false);
export const isDrawingAtom = atom(false);
export const historyAtom = atom<CanvasObject[][]>([[]]);
export const historyIndexAtom = atom(0);
