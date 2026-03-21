"use client";

import { atom } from "jotai";

// Current day of month (1-30) for chart visualization
export const currentDayAtom = atom(17);

// Purchase mode: Self Serve or Sales Assist
export type PurchaseMode = "self-serve" | "sales-assist";
export const purchaseModeAtom = atom<PurchaseMode>("self-serve");

// Toggle for showing workspace usage line
export const showWorkspaceLineAtom = atom(false);

// Pre-enforcement toggle (off by default)
export const preEnforcementAtom = atom(false);
