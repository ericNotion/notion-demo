import { atom } from "jotai";
import type { Shape, ToolType, ViewState } from "./types";

export const selectedToolAtom = atom<ToolType>("select");
export const selectedColorAtom = atom<string>("#0b6e99");
export const shapesAtom = atom<Shape[]>([]);
export const historyAtom = atom<Shape[][]>([[]]);
export const historyIndexAtom = atom<number>(0);
export const viewStateAtom = atom<ViewState>({
  zoom: 1,
  panX: 0,
  panY: 0,
});
