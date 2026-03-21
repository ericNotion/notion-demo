"use client";

import { chatStateAtom } from "@/components/chat-kit/atoms";
import { SimpleTranscript } from "@/components/chat-kit/SimpleTranscript";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { useChat } from "@ai-sdk/react";
import { Icon } from "@nds-icons";
import { aiFaceIcon } from "@nds-icons/aiFace/default.icon";
import { arrowUpDownIcon } from "@nds-icons/arrowUpDown/default.icon";
import { composeIcon } from "@nds-icons/compose/default.icon";
import { equalSquareIcon } from "@nds-icons/equalSquare/default.icon";
import { globeIcon } from "@nds-icons/globe/default.icon";
import { createIdGenerator } from "ai";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { NotionShell } from "../shell";

function NotionChatInput({
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
  const [chatState, setChatState] = useAtom(chatStateAtom);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
    }
  }, [input]);

  const onSubmit = (e: React.FormEvent) => {
    if (input.trim()) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
    requestAnimationFrame(() => textareaRef.current?.focus());
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (status === "submitted" || status === "streaming") return;
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) onSubmit(e);
    }
  };

  return (
    <form
      className="mx-auto w-full max-w-[700px] px-4 pb-4"
      onSubmit={onSubmit}
    >
      <div className="bg-elevated border-primary-translucent dark:border-primary rounded-2xl border shadow-xs ring-[0.5px] ring-black/10 dark:ring-white/15">
        <textarea
          autoFocus
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          placeholder="Ask Notion AI anything..."
          className="scrollbar-hidden max-h-[200px] min-h-[24px] w-full resize-none bg-transparent px-4 pt-3 pb-2 text-[15px] placeholder-neutral-400 outline-hidden dark:text-neutral-100 dark:placeholder-neutral-500"
        />
        <div className="flex items-center justify-between gap-1 px-2.5 pb-2.5">
          <div className="flex items-center gap-1">
            <IconButton
              variant="ghost"
              size="sm"
              aria-label="Web search"
              className={cn("rounded-full", {
                "bg-blue-100 text-blue-500 hover:bg-blue-200/70":
                  chatState.webSearch,
              })}
              onClick={(e) => {
                e.preventDefault();
                setChatState({ ...chatState, webSearch: !chatState.webSearch });
              }}
            >
              <Icon
                icon={globeIcon}
                size={16}
                color={chatState.webSearch ? "bluePrimary" : "secondary"}
              />
            </IconButton>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-tertiary text-xs">GPT-4.1 mini</span>
            {status === "submitted" || status === "streaming" ? (
              <IconButton
                type="submit"
                variant="default"
                size="sm"
                className="rounded-full"
                disabled
                aria-label="Stop"
              >
                <Icon
                  icon={equalSquareIcon}
                  size={14}
                  className="fill-white text-white"
                />
              </IconButton>
            ) : input.trim() ? (
              <IconButton
                type="submit"
                variant="default"
                size="sm"
                className="rounded-full"
                aria-label="Send"
              >
                <Icon icon={arrowUpDownIcon} size={14} />
              </IconButton>
            ) : null}
          </div>
        </div>
      </div>
    </form>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4">
      <div className="bg-elevated flex size-12 items-center justify-center rounded-full shadow-xs ring-[0.5px] ring-black/10 dark:ring-white/15">
        <Icon icon={aiFaceIcon} size={28} color="primary" />
      </div>
      <div className="text-center">
        <p className="text-primary text-lg font-medium">
          What can I help you with?
        </p>
        <p className="text-tertiary mt-1 text-sm">
          Ask questions, draft content, brainstorm ideas, and more.
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  const [chatState] = useAtom(chatStateAtom);
  const [chatTitle, setChatTitle] = useState("New chat");

  const {
    status,
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
  } = useChat({
    api: "/api/chat",
    maxSteps: 50,
    sendExtraMessageFields: true,
    generateId: createIdGenerator({ prefix: "msg", size: 16 }),
    experimental_prepareRequestBody({ messages }) {
      return {
        messages,
        enableWebsearch: chatState.webSearch,
      };
    },
    onFinish() {
      if (chatTitle === "New chat" && messages.length > 0) {
        const firstMsg = messages[0];
        if (firstMsg?.role === "user") {
          const title =
            typeof firstMsg.content === "string"
              ? firstMsg.content.slice(0, 40) +
                (firstMsg.content.length > 40 ? "..." : "")
              : "Chat";
          setChatTitle(title);
        }
      }
    },
  });

  const handleNewChat = () => {
    setMessages([]);
    setChatTitle("New chat");
  };

  return (
    <NotionShell title="Chat">
      <div className="flex h-full flex-col">
        <div className="border-secondary flex items-center justify-between gap-2 border-b px-4 py-2">
          <div className="flex min-w-0 items-center gap-2">
            <div className="bg-elevated flex size-6 items-center justify-center rounded-full shadow-xs ring-[0.5px] ring-black/8">
              <Icon icon={aiFaceIcon} size={16} color="primary" />
            </div>
            <span className="text-primary text-sm font-medium">Notion AI</span>
            <span className="text-tertiary text-sm">/</span>
            <span className="text-secondary min-w-0 truncate text-sm">
              {chatTitle}
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <Button
              variant="plain"
              size="sm"
              icon={<Icon icon={composeIcon} color="secondary" size={16} />}
              onClick={handleNewChat}
            />
          </div>
        </div>

        {messages.length === 0 ? (
          <EmptyState />
        ) : (
          <SimpleTranscript
            status={status}
            messages={messages}
            gradientColorFrom="from-[var(--background-color-primary)]"
          />
        )}

        <NotionChatInput
          status={status}
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </NotionShell>
  );
}
