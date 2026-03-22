import { atom } from "jotai";
import type { Tool } from "./types";

export const whiteboardToolAtom = atom<Tool>("pen");
export const whiteboardColorAtom = atom<string>("#37352F");
