import { atom } from "jotai";
import type { Tool, Drawing, PostItNote, ViewTransform } from "./types";

export const currentToolAtom = atom<Tool>("select");
export const currentColorAtom = atom<string>("#000000");
export const drawingsAtom = atom<Drawing[]>([]);
export const postItNotesAtom = atom<PostItNote[]>([]);
export const viewTransformAtom = atom<ViewTransform>({ x: 0, y: 0, scale: 1 });
export const isDrawingAtom = atom<boolean>(false);
