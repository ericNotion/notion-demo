import { atom } from "jotai";

type CommandMenuPage = "root" | "icons" | "components";

export const commandMenuPageAtom = atom<CommandMenuPage>("root");
