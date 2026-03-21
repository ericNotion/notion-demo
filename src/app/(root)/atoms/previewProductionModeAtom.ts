import { atom } from "jotai";

/**
 * When true, simulates production mode locally for previewing
 * how the app will look/behave when deployed.
 * Only has effect in development mode.
 */
export const previewProductionModeAtom = atom(false);
