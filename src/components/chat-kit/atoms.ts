import { atomWithStorage } from "jotai/utils";

type ChatState = {
  webSearch: boolean;
};

export const chatStateAtom = atomWithStorage<ChatState>(
  "templates-chat-state",
  {
    webSearch: true,
  },
);
