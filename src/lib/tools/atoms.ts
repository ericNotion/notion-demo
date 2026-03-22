import { ContextChipState, ToolsState } from "@/lib/tools/types";
import { Message } from "ai";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type ToolInvocationState = {
  id: string; // Unique identifier for the invocation
  toolName: string;
  saved: boolean;
  discarded: boolean;
  timestamp: number; // To maintain order
};

// Store all tool invocations in a Map for better performance
export const toolInvocationsAtom = atom<Map<string, ToolInvocationState>>(
  new Map(),
);

// Get all unsaved and undiscarded invocations
export const unsavedToolInvocationsAtom = atom((get) => {
  const toolInvocations = get(toolInvocationsAtom);
  const saveControlTools = get(saveableToolsAtom);
  return Array.from(toolInvocations)
    .filter(
      ([_, state]) =>
        !state.saved &&
        !state.discarded &&
        saveControlTools.has(state.toolName),
    )

    .map(([_, state]) => state);
});

// Group unsaved invocations by tool name
export const unsavedToolInvocationsGroupedByNameAtom = atom<
  Record<string, ToolInvocationState[]>
>((get) => {
  const unsavedToolInvocations = get(unsavedToolInvocationsAtom);
  const grouped = unsavedToolInvocations.reduce(
    (acc, invocation) => {
      if (!acc[invocation.toolName]) {
        acc[invocation.toolName] = [];
      }
      acc[invocation.toolName].push(invocation);
      return acc;
    },
    {} as Record<string, ToolInvocationState[]>,
  );
  return grouped;
});

// Accept invocations by tool name
export const acceptUnsavedToolCallInvocationsByNameAtom = atom(
  null,
  (get, set, toolName: string) => {
    const toolInvocations = get(toolInvocationsAtom);
    const newInvocations = new Map(toolInvocations);

    for (const [id, state] of newInvocations) {
      if (state.toolName === toolName && !state.saved && !state.discarded) {
        newInvocations.set(id, { ...state, saved: true });
      }
    }

    set(toolInvocationsAtom, newInvocations);
  },
);

// Accept a single invocation by id
export const acceptUnsavedToolCallInvocationByIdAtom = atom(
  null,
  (get, set, toolCallId: string) => {
    const toolInvocations = get(toolInvocationsAtom);
    const newInvocations = new Map(toolInvocations);
    const state = newInvocations.get(toolCallId);

    if (state && !state.saved && !state.discarded) {
      newInvocations.set(toolCallId, { ...state, saved: true });
      set(toolInvocationsAtom, newInvocations);
    }
  },
);

// Discard invocations by tool name
export const discardUnsavedToolCallInvocationsByNameAtom = atom(
  null,
  (get, set, toolName: string) => {
    const toolInvocations = get(toolInvocationsAtom);
    const newInvocations = new Map(toolInvocations);

    for (const [id, state] of newInvocations) {
      if (state.toolName === toolName && !state.saved && !state.discarded) {
        newInvocations.set(id, { ...state, discarded: true });
      }
    }

    set(toolInvocationsAtom, newInvocations);
  },
);

// Discard a single invocation by id
export const discardUnsavedToolCallInvocationByIdAtom = atom(
  null,
  (get, set, toolCallId: string) => {
    const toolInvocations = get(toolInvocationsAtom);
    const newInvocations = new Map(toolInvocations);
    const state = newInvocations.get(toolCallId);

    if (state && !state.saved && !state.discarded) {
      newInvocations.set(toolCallId, { ...state, discarded: true });
      set(toolInvocationsAtom, newInvocations);
    }
  },
);

// Track whether save controls should be shown
export const showSaveControlsAtom = atom<boolean>(false);

// Track whether inline diff should be shown
export const showInlineDiffAtom = atom<boolean>(false);

// yolo mode
export const yoloModeAtom = atomWithStorage<boolean>("yolo-mode", false);

// Track which tool names should trigger save controls
export const saveableToolsAtom = atom<Set<string>>(
  new Set([
    "API-create-a-database",
    "API-update-a-database",
    "API-post-page",
    "API-patch-block-children",
    "API-patch-page",
    "API-update-a-block",
    "API-delete-a-block",
  ]),
);

export const toolsStateAtom = atomWithStorage<ToolsState>("brian-tools-state", {
  github: true,
  stripe: true,
  slack: true,
  websearch: false,
});
export const contextStateAtom = atomWithStorage<ContextChipState>(
  "brian-context-state",
  {
    selected: [],
  },
);

export const addContextAtom = atom(
  null,
  (get, set, context: ContextChipState["selected"][number]) => {
    const currentState = get(contextStateAtom);
    set(contextStateAtom, {
      ...currentState,
      selected: [...currentState.selected, context],
    });
  },
);

export const removeContextAtom = atom(null, (get, set, contextId: string) => {
  const currentState = get(contextStateAtom);
  set(contextStateAtom, {
    ...currentState,
    selected: currentState.selected.filter((c) => c.id !== contextId),
  });
});

export interface FileUpload {
  id: string;
  url: string | null;
  name: string;
  contentType: string;
  loading: boolean;
  error?: string;
}

export const fileUploadsAtom = atom<FileUpload[]>([]);

export const addFileUploadAtom = atom(
  null,
  (get, set, fileUpload: Omit<FileUpload, "loading" | "error">) => {
    const currentState = get(fileUploadsAtom);
    set(fileUploadsAtom, [
      ...currentState,
      {
        id: fileUpload.id,
        url: fileUpload.url,
        name: fileUpload.name,
        contentType: fileUpload.contentType,
        loading: fileUpload.url === null,
      },
    ]);
  },
);

type FileUploadUpdate =
  | { id: string; url: string }
  | { id: string; error: string };

export const updateFileUploadAtom = atom(
  null,
  (get, set, update: FileUploadUpdate) => {
    const currentState = get(fileUploadsAtom);
    set(
      fileUploadsAtom,
      currentState.map((f) =>
        f.id === update.id
          ? {
              ...f,
              ...(update as FileUploadUpdate),
              loading: false,
            }
          : f,
      ),
    );
  },
);

export const removeFileUploadAtom = atom(null, (get, set, fileId: string) => {
  const currentState = get(fileUploadsAtom);
  set(
    fileUploadsAtom,
    currentState.filter((f) => f.id !== fileId),
  );
});

export const chatMessagesAtom = atomWithStorage<Message[]>("chat-messages", []);

type Turn = {
  turnStartedAt: number;
  turnEndedAt: number;
  turnDurationMs: number;
};

export const turnDurationsAtom = atomWithStorage<Record<string, Turn>>(
  "turn-durations",
  {},
);
