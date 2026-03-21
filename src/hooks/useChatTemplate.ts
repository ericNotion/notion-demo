import {
  chatMessagesAtom,
  fileUploadsAtom,
  saveableToolsAtom,
  showSaveControlsAtom,
  toolInvocationsAtom,
  toolsStateAtom,
  turnDurationsAtom,
} from "@/lib/tools/atoms";
import { ToolsState } from "@/lib/tools/types";
import { useChat, UseChatHelpers, UseChatOptions } from "@ai-sdk/react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef } from "react";

export type UseChatTemplateResult = UseChatHelpers & {
  onSubmit: (e: React.FormEvent) => void;
  showSaveControls: boolean;
  setShowSaveControls: (show: boolean) => void;
  toolsState: ToolsState;
  setToolsState: (toolsState: ToolsState) => void;
  toolInvocations: Map<
    string,
    {
      id: string;
      toolName: string;
      saved: boolean;
      discarded: boolean;
      timestamp: number;
    }
  >;
  setToolInvocations: (
    value:
      | Map<
          string,
          {
            id: string;
            toolName: string;
            saved: boolean;
            discarded: boolean;
            timestamp: number;
          }
        >
      | ((
          prev: Map<
            string,
            {
              id: string;
              toolName: string;
              saved: boolean;
              discarded: boolean;
              timestamp: number;
            }
          >,
        ) => Map<
          string,
          {
            id: string;
            toolName: string;
            saved: boolean;
            discarded: boolean;
            timestamp: number;
          }
        >),
  ) => void;
};
export function useChatTemplate(
  id: string,
  opts?: UseChatOptions,
): UseChatTemplateResult {
  const [toolsState, setToolsState] = useAtom(toolsStateAtom);
  const [fileUploads, setFileUploads] = useAtom(fileUploadsAtom);
  const [savedMessages, setSavedMessages] = useAtom(chatMessagesAtom);
  const setShowSaveControls = useSetAtom(showSaveControlsAtom);
  const [toolInvocations, setToolInvocations] = useAtom(toolInvocationsAtom);
  const saveableTools = useAtomValue(saveableToolsAtom);
  const setTurnDurations = useSetAtom(turnDurationsAtom);

  const defaultOpts = {
    id,
    api: "/brian/tools/api/chat",
    maxSteps: 50,
    initialMessages: savedMessages,
    body: {
      toolsState,
      files: fileUploads,
    },
  };

  const { handleSubmit: baseHandleSubmit, ...result } = useChat({
    ...defaultOpts,
    ...opts,
  });

  const lastStatusRef = useRef<string>(result.status);
  const turnStartRef = useRef<number | null>(null);
  const lastAssistantIdRef = useRef<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    const attachments = fileUploads
      .filter((upload) => upload.url !== null)
      .map((upload) => ({
        id: upload.id,
        name: upload.name,
        url: upload.url as string,
        contentType: upload.contentType,
      }));

    const options = !!attachments.length
      ? { experimental_attachments: attachments }
      : {};

    baseHandleSubmit(e, options);
    setFileUploads([]);
  }

  // Save messages whenever status becomes ready
  useEffect(() => {
    if (result.status === "ready" && result.messages.length > 0) {
      setSavedMessages(result.messages);
    }
  }, [result.status, result.messages, setSavedMessages]);

  // Track per-turn timing
  useEffect(() => {
    const prevStatus = lastStatusRef.current;
    const currStatus = result.status;

    // Start turn: ready -> submitted
    if (prevStatus === "ready" && currStatus === "submitted") {
      turnStartRef.current = Date.now();
    }

    // End turn: submitted/streaming -> ready
    if (
      (prevStatus === "submitted" || prevStatus === "streaming") &&
      currStatus === "ready"
    ) {
      const turnEnd = Date.now();
      const turnStart = turnStartRef.current;
      if (turnStart && result.messages.length > 0) {
        // Find last assistant message
        const lastIdx = [...result.messages]
          .reverse()
          .findIndex((m) => m.role === "assistant");
        if (lastIdx !== -1) {
          const idx = result.messages.length - 1 - lastIdx;
          const msg = result.messages[idx];
          // Only store if this is a new assistant message
          if (msg.id !== lastAssistantIdRef.current) {
            const duration = turnEnd - turnStart;
            setTurnDurations((prev) => ({
              ...prev,
              [msg.id]: {
                turnStartedAt: turnStart,
                turnEndedAt: turnEnd,
                turnDurationMs: duration,
              },
            }));
            lastAssistantIdRef.current = msg.id;
          }
        }
      }
      turnStartRef.current = null;
    }

    lastStatusRef.current = currStatus;
  }, [result.status, result.messages, setTurnDurations]);

  // Check for new tool invocations that need save controls
  useEffect(() => {
    let hasPendingChanges = false;

    result.messages.forEach((message) => {
      if (message.role === "assistant") {
        message.parts.forEach((part) => {
          if (
            part.type === "tool-invocation" &&
            part.toolInvocation.state === "result"
          ) {
            const { toolCallId, toolName } = part.toolInvocation;

            // Only process if this tool call hasn't been saved or discarded yet
            if (
              !toolInvocations.get(toolCallId)?.saved &&
              !toolInvocations.get(toolCallId)?.discarded
            ) {
              // Initialize state for this tool call if needed
              if (!toolInvocations.has(toolCallId)) {
                setToolInvocations((prev) => {
                  const newMap = new Map(prev);
                  newMap.set(toolCallId, {
                    id: toolCallId,
                    toolName,
                    saved: false,
                    discarded: false,
                    timestamp: Date.now(),
                  });
                  return newMap;
                });
              }

              // Check if this tool name should trigger save controls
              if (saveableTools.has(toolName)) {
                hasPendingChanges = true;
              }
            }
          }
        });
      }
    });

    setShowSaveControls(hasPendingChanges);
  }, [
    result.messages,
    toolInvocations,
    saveableTools,
    setShowSaveControls,
    setToolInvocations,
  ]);

  return {
    ...result,
    handleSubmit: baseHandleSubmit,
    onSubmit: handleSubmit,
    showSaveControls: useAtomValue(showSaveControlsAtom),
    setShowSaveControls,
    toolInvocations,
    setToolInvocations,
    toolsState,
    setToolsState,
  };
}
