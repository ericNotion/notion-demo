import { atom } from 'jotai';
import type { WhiteboardElement, Viewport, Tool } from './types';

export const elementsAtom = atom<WhiteboardElement[]>([]);

export const viewportAtom = atom<Viewport>({
  x: 0,
  y: 0,
  zoom: 1,
});

export const selectedToolAtom = atom<Tool>('select');

export const selectedElementsAtom = atom<string[]>([]);

export const isMinimapVisibleAtom = atom(true);

export const isDraggingAtom = atom(false);

export const isInlineViewAtom = atom(false);
