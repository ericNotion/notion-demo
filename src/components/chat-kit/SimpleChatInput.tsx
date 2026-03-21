"use client";
import { Icon } from "@nds-icons";
import { arrowUpDownIcon } from "@nds-icons/arrowUpDown/default.icon";
import { equalSquareIcon } from "@nds-icons/equalSquare/default.icon";
import { globeIcon } from "@nds-icons/globe/default.icon";
import { microphoneIcon } from "@nds-icons/microphone/default.icon";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { chatStateAtom } from "./atoms";

const STORAGE_KEY = "chat-history";
const MAX_HISTORY = 20;

export default function SimpleChatInput({
  status,
  input,
  handleInputChange,
  handleSubmit,
}: {
  status: string;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [reasoningState, setReasoningState] = useAtom(chatStateAtom);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize the textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
    }
  }, [input]);

  function renderSubmitButton() {
    if (status === "submitted" || status === "streaming") {
      return (
        <IconButton
          type="submit"
          variant="default"
          className="rounded-full"
          disabled
          aria-label="Stop generating"
        >
          <Icon
            icon={equalSquareIcon}
            size={18}
            className="fill-white text-white"
          />
        </IconButton>
      );
    }

    if (input.trim().length) {
      return (
        <IconButton
          type="submit"
          variant="default"
          className="rounded-full"
          aria-label="Send message"
          disabled={status === "streaming"}
        >
          <Icon icon={arrowUpDownIcon} />
        </IconButton>
      );
    }

    return (
      <Button
        variant="default"
        className="rounded-full pr-3 pl-2"
        onClick={(e) => e.preventDefault()}
      >
        <div className="flex h-5 w-5 items-center justify-center gap-[3px]">
          <div className="h-[8px] w-0.5 rounded-full bg-white" />
          <div className="h-[14px] w-0.5 rounded-full bg-white" />
          <div className="h-[8px] w-0.5 rounded-full bg-white" />
        </div>
        <span>Talk</span>
      </Button>
    );
  }

  function getMessageHistory() {
    const history = localStorage.getItem(STORAGE_KEY);
    return history ? JSON.parse(history) : [];
  }

  // Custom submit handler to save message to localStorage
  const handleFormSubmit = (e: React.FormEvent) => {
    if (input.trim()) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);

      // Save to history after submission
      const history = getMessageHistory();
      if (history.length >= MAX_HISTORY) history.pop();
      history.unshift(input.trim()); // Add to the beginning instead of the end
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));

      setHistoryIndex(-1); // Reset history index after submitting
    }
    // Immediately focus the textarea after submission
    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (status === "submitted" || status === "streaming") return; // Prevent keyboard shortcuts while loading

    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      handleFormSubmit(e);
    }

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) {
        handleFormSubmit(e);
      }
    }

    const textarea = e.currentTarget;
    const isAtStart =
      textarea.selectionStart === 0 && textarea.selectionEnd === 0;
    const isAtEnd =
      textarea.selectionStart === textarea.value.length &&
      textarea.selectionEnd === textarea.value.length;

    const setCursorToStart = () => {
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = 0;
          textareaRef.current.selectionEnd = 0;
        }
      });
    };

    const setCursorToEnd = () => {
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          const length = textareaRef.current.value.length;
          textareaRef.current.selectionStart = length;
          textareaRef.current.selectionEnd = length;
        }
      });
    };

    // Handle history cycling with up/down arrows
    if (e.key === "ArrowUp" && isAtStart) {
      e.preventDefault();
      const history = getMessageHistory();

      // If we haven't started cycling yet or we're at the end, start from the most recent
      if (historyIndex === -1 && history.length > 0) {
        setHistoryIndex(0); // Start from the most recent message (index 0)
        const event = {
          target: { value: history[0] },
        } as React.ChangeEvent<HTMLTextAreaElement>;
        handleInputChange(event);
        setCursorToStart();
      }
      // If we're already cycling and there are more messages
      else if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        const event = {
          target: { value: history[newIndex] },
        } as React.ChangeEvent<HTMLTextAreaElement>;
        handleInputChange(event);
        setCursorToStart();
      }
    }

    // Handle cycling forward with down arrow
    if (e.key === "ArrowDown" && historyIndex !== -1 && isAtEnd) {
      e.preventDefault();
      const history = getMessageHistory();

      if (historyIndex <= 0) {
        // If we're at the most recent message, clear the input
        setHistoryIndex(-1);
        const event = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLTextAreaElement>;
        handleInputChange(event);
      } else {
        // Move towards more recent messages
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        const event = {
          target: { value: history[newIndex] },
        } as React.ChangeEvent<HTMLTextAreaElement>;
        handleInputChange(event);
        setCursorToEnd();
      }
    }
  };

  return (
    <form
      id="chat-input-form"
      className="group/form relative mx-auto w-full max-w-3xl"
      onSubmit={handleFormSubmit}
    >
      <div
        className={cn(
          "border-primary dark:shadow-contrast bg-elevated relative z-10 rounded-2xl shadow ring-[0.5px] ring-black/10 transition-colors",
        )}
      >
        <textarea
          autoFocus={true}
          id="chat-input"
          ref={textareaRef}
          rows={2}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Send a message"
          className={cn(
            "scrollbar-hidden max-h-[200px] min-h-[24px] w-full resize-none bg-transparent px-4 pt-3 pb-2.5 text-[15px] placeholder-neutral-400 focus:outline-none disabled:opacity-50 dark:text-neutral-100 dark:placeholder-neutral-500",
          )}
        />

        <div className="flex items-center justify-between gap-1 p-2.5 pt-0">
          <IconButton
            variant="ghost"
            aria-label="Web search"
            className={cn("rounded-full", {
              "bg-blue-100 text-blue-500 hover:bg-blue-200/70":
                reasoningState.webSearch,
            })}
            onClick={(e) => {
              e.preventDefault();
              setReasoningState({
                ...reasoningState,
                webSearch: !reasoningState.webSearch,
              });
            }}
          >
            <Icon
              icon={globeIcon}
              size={18}
              color={reasoningState.webSearch ? "bluePrimary" : "primary"}
            />
          </IconButton>
          <div className="ml-auto flex items-center gap-2">
            {!input && (
              <IconButton
                tooltip="Record"
                variant="ghost"
                className="rounded-full"
              >
                <Icon icon={microphoneIcon} />
              </IconButton>
            )}
            {renderSubmitButton()}
          </div>
        </div>
      </div>
    </form>
  );
}
