import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type PostItColor =
  | "yellow"
  | "blue"
  | "green"
  | "pink"
  | "purple"
  | "orange";

export type PostIt = {
  id: string;
  text: string;
  color: PostItColor;
  x: number;
  y: number;
  convertedToTask: boolean;
};

export type TaskStatus = "not-started" | "in-progress" | "completed";

export type Task = {
  id: string;
  name: string;
  status: TaskStatus;
  owner: string;
  dueDate: string;
  createdFrom: string; // Post-it ID
  createdAt: string;
};

export const postItsAtom = atomWithStorage<PostIt[]>(
  "eric-nc-whiteboard-postits",
  [
    {
      id: "postit-1",
      text: "Research user feedback",
      color: "yellow",
      x: 100,
      y: 100,
      convertedToTask: false,
    },
    {
      id: "postit-2",
      text: "Design new onboarding flow",
      color: "blue",
      x: 300,
      y: 150,
      convertedToTask: false,
    },
    {
      id: "postit-3",
      text: "Update documentation",
      color: "green",
      x: 500,
      y: 120,
      convertedToTask: false,
    },
  ],
);

export const tasksAtom = atomWithStorage<Task[]>(
  "eric-nc-whiteboard-tasks",
  [],
);

export const selectedPostItAtom = atom<string | null>(null);

export const taskPanelOpenAtom = atom<boolean>(true);

export const convertingPostItAtom = atom<string | null>(null);
