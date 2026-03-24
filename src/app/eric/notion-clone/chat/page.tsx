"use client";

import { chatStateAtom } from "@/components/chat-kit/atoms";
import { SimpleTranscript } from "@/components/chat-kit/SimpleTranscript";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { useChat } from "@ai-sdk/react";
import { Icon } from "@nds-icons";
import { aiFaceIcon } from "@nds-icons/aiFace/default.icon";
import { arrowStraightUpIcon } from "@nds-icons/arrowStraightUp/default.icon";
import { ellipsisIcon } from "@nds-icons/ellipsis/default.icon";
import { equalSquareIcon } from "@nds-icons/equalSquare/default.icon";
import { gearIcon } from "@nds-icons/gear/default.icon";
import { globeIcon } from "@nds-icons/globe/default.icon";
import { microphoneIcon } from "@nds-icons/microphone/default.icon";
import { paperClipIcon } from "@nds-icons/paperClip/default.icon";
import { pencilLineIcon } from "@nds-icons/pencilLine/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { sparklesIcon } from "@nds-icons/sparkles/default.icon";
import { createIdGenerator } from "ai";
import { useAtom } from "jotai";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { agents, chatGroups, chatThreads, type ThreadMessage } from "../data";

const NOTION_AI_ID = "6";

function AgentAvatar({
  agent,
  size,
}: {
  agent: { id: string; avatar: string; name: string };
  size: number;
}) {
  if (agent.id === NOTION_AI_ID) {
    return <Icon icon={aiFaceIcon} size={size} color="primary" />;
  }
  return (
    <Image
      src={agent.avatar}
      alt={agent.name}
      width={size}
      height={size}
      className={cn(
        size >= 48 ? "rounded-2xl" : size >= 24 ? "rounded-md" : "rounded-sm",
      )}
    />
  );
}

const RECENT_CHATS = [
  "Create files and store database",
  "Check Notion file types, Claude ses...",
  "Create and add 15 file types",
];

const SUGGESTED = [
  "Create custom agent",
  "Write meeting agenda",
  "Analyze PDFs or images",
];

function NotionChatInput({
  status,
  input,
  handleInputChange,
  handleSubmit,
  centered,
  placeholder = "Do anything with AI...",
}: {
  status: string;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  centered?: boolean;
  placeholder?: string;
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
      className={cn("mx-auto w-full max-w-[700px] px-4", {
        "pb-4": !centered,
      })}
      onSubmit={onSubmit}
    >
      <div
        className={cn(
          "bg-elevated border-primary-translucent dark:border-primary border shadow-xs ring-[0.5px] ring-black/10 dark:ring-white/15",
          centered ? "rounded-xl" : "rounded-2xl",
        )}
      >
        <textarea
          autoFocus
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
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
            <span className="text-tertiary text-xs">Auto</span>
            <IconButton
              variant="ghost"
              size="sm"
              aria-label="Voice input"
              className="rounded-full"
              onClick={(e) => e.preventDefault()}
            >
              <Icon icon={microphoneIcon} size={16} color="secondary" />
            </IconButton>
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
                <Icon icon={arrowStraightUpIcon} size={14} />
              </IconButton>
            ) : null}
          </div>
        </div>
      </div>
    </form>
  );
}

function RecentAndSuggested({
  onSelectPrompt,
}: {
  onSelectPrompt: (text: string) => void;
}) {
  return (
    <div className="mx-auto mt-4 flex w-full max-w-[700px] gap-8 px-4">
      <div className="flex-1">
        <p className="text-tertiary mb-2 text-xs font-medium">Recent chats</p>
        <div className="flex flex-col gap-0.5">
          {RECENT_CHATS.map((chat) => (
            <button
              key={chat}
              className="text-secondary hover:bg-tertiary flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors"
              onClick={() => onSelectPrompt(chat)}
            >
              <Icon
                icon={pencilLineIcon}
                size={14}
                className="text-tertiary shrink-0"
              />
              <span className="truncate">{chat}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-tertiary mb-2 text-xs font-medium">Suggested</p>
        <div className="flex flex-col gap-0.5">
          {SUGGESTED.map((item) => (
            <button
              key={item}
              className="text-secondary hover:bg-tertiary flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors"
              onClick={() => onSelectPrompt(item)}
            >
              <Icon
                icon={sparklesIcon}
                size={14}
                className="text-tertiary shrink-0"
              />
              <span className="truncate">{item}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const AGENT_ACTIVITIES: Record<
  string,
  { icon: string; text: string; source: string; time: string }[]
> = {
  "1": [
    {
      icon: "🔍",
      text: "Searched workspace for",
      source: "Q2 planning docs",
      time: "1h",
    },
    {
      icon: "📄",
      text: "Summarized findings from",
      source: "Research archive",
      time: "3h",
    },
    {
      icon: "🔍",
      text: "Deep research on",
      source: "competitor pricing",
      time: "1d",
    },
    {
      icon: "📄",
      text: "Generated report for",
      source: "Sophie Tran",
      time: "2d",
    },
    {
      icon: "🔍",
      text: "Searched web for",
      source: "market analysis 2026",
      time: "4d",
    },
  ],
  "2": [
    {
      icon: "✏️",
      text: "Reviewed draft of",
      source: "Product handbook",
      time: "2h",
    },
    {
      icon: "📄",
      text: "Suggested edits on",
      source: "API migration guide",
      time: "5h",
    },
    {
      icon: "✏️",
      text: "Tone adjustment for",
      source: "customer email",
      time: "1d",
    },
    {
      icon: "📄",
      text: "Grammar check on",
      source: "launch announcement",
      time: "3d",
    },
    {
      icon: "✏️",
      text: "Rewrote section in",
      source: "onboarding flow copy",
      time: "5d",
    },
  ],
  "3": [
    {
      icon: "📋",
      text: "Summarized meeting",
      source: "Sprint planning",
      time: "3h",
    },
    {
      icon: "📄",
      text: "Extracted action items from",
      source: "Design review",
      time: "1d",
    },
    {
      icon: "📋",
      text: "Created summary for",
      source: "1:1 with manager",
      time: "2d",
    },
    {
      icon: "📄",
      text: "Generated notes from",
      source: "All-hands recording",
      time: "4d",
    },
    {
      icon: "📋",
      text: "Summarized transcript for",
      source: "Client call",
      time: "1w",
    },
  ],
  "4": [
    {
      icon: "🎯",
      text: "Prioritized tasks in",
      source: "Launch tracker",
      time: "1h",
    },
    {
      icon: "📄",
      text: "Analyzed deadlines for",
      source: "Q2 milestones",
      time: "6h",
    },
    {
      icon: "🎯",
      text: "Suggested reordering of",
      source: "sprint backlog",
      time: "1d",
    },
    {
      icon: "📄",
      text: "Flagged blockers in",
      source: "Self-serve onboarding",
      time: "3d",
    },
    {
      icon: "🎯",
      text: "Effort estimation for",
      source: "API v2 rollout",
      time: "5d",
    },
  ],
  "5": [
    {
      icon: "💻",
      text: "Reviewed PR #142",
      source: "payments service",
      time: "4h",
    },
    { icon: "📄", text: "Found bug in", source: "auth middleware", time: "1d" },
    {
      icon: "💻",
      text: "Performance review of",
      source: "search endpoint",
      time: "2d",
    },
    {
      icon: "📄",
      text: "Suggested refactor for",
      source: "data pipeline",
      time: "4d",
    },
    {
      icon: "💻",
      text: "Security audit on",
      source: "session handler",
      time: "1w",
    },
  ],
  "6": [
    {
      icon: "✨",
      text: "Drafted content for",
      source: "Product workspace",
      time: "30m",
    },
    {
      icon: "📄",
      text: "Answered question about",
      source: "Design system",
      time: "2h",
    },
    {
      icon: "✨",
      text: "Brainstormed ideas for",
      source: "feature roadmap",
      time: "1d",
    },
    {
      icon: "📄",
      text: "Created page",
      source: "Weekly sync notes",
      time: "2d",
    },
    {
      icon: "✨",
      text: "Summarized thread in",
      source: "Product ideas",
      time: "4d",
    },
  ],
};

const DEFAULT_ACTIVITY = [
  {
    icon: "📄",
    text: "Started a conversation with",
    source: "Eric Liu",
    time: "1d",
  },
  {
    icon: "📄",
    text: "Completed task for",
    source: "workspace setup",
    time: "3d",
  },
  {
    icon: "📄",
    text: "Generated output in",
    source: "Product workspace",
    time: "5d",
  },
];

function AgentEmptyState({
  agent,
  status,
  input,
  handleInputChange,
  handleSubmit,
}: {
  agent: (typeof agents)[number];
  status: string;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const activity = AGENT_ACTIVITIES[agent.id] || DEFAULT_ACTIVITY;

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div
        className="relative shrink-0"
        style={{ backgroundColor: agent.bannerColor, height: 120 }}
      >
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
          <AgentAvatar agent={agent} size={80} />
        </div>
      </div>

      <div className="mx-auto mt-14 w-full max-w-[560px] px-4">
        <h1 className="text-primary text-center text-2xl font-bold">
          {agent.name}
        </h1>

        <div className="mt-5">
          <NotionChatInput
            status={status}
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            centered
            placeholder={`Ask ${agent.name}...`}
          />
        </div>

        <div className="mt-8 pb-16">
          <p className="text-tertiary mb-3 text-xs font-medium">
            Recent activity
          </p>
          <div className="flex flex-col">
            {activity.map((item, i) => (
              <div
                key={i}
                className="hover:bg-secondary-translucent flex items-center gap-3 rounded-md px-2 py-2 text-sm"
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-primary min-w-0 flex-1 truncate">
                  {item.text}{" "}
                  <span className="text-tertiary">{item.source}</span>
                </span>
                <span className="text-tertiary shrink-0 text-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState({
  status,
  input,
  handleInputChange,
  handleSubmit,
  onSelectPrompt,
}: {
  status: string;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onSelectPrompt: (text: string) => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4">
      <div className="mb-4">
        <Icon icon={aiFaceIcon} size={48} color="primary" />
      </div>
      <p className="text-primary mb-6 text-xl font-medium">
        What can I help you with?
      </p>
      <NotionChatInput
        status={status}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        centered
      />
      <RecentAndSuggested onSelectPrompt={onSelectPrompt} />
    </div>
  );
}

function ThreadUserMessage({ content }: { content: string }) {
  return (
    <div className="mb-6 flex justify-end">
      <div className="bg-blue-secondary max-w-[85%] rounded-2xl rounded-br-sm px-4 py-2.5">
        <p className="text-primary text-[15px]">{content}</p>
      </div>
    </div>
  );
}

function ThreadAssistantMessage({
  content,
  agent,
  showAvatar,
}: {
  content: string;
  agent?: (typeof agents)[number];
  showAvatar?: boolean;
}) {
  return (
    <div className="mb-8">
      {showAvatar && (
        <div className="mb-3 flex items-center gap-2">
          {agent ? (
            <AgentAvatar agent={agent} size={24} />
          ) : (
            <Icon icon={aiFaceIcon} size={24} color="primary" />
          )}
          <span className="text-primary text-sm font-semibold">
            {agent?.name || "Notion AI"}
          </span>
        </div>
      )}
      <div className="text-primary max-w-none text-[15px]/7">
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 className="text-primary mt-5 mb-2 text-base font-bold">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-primary mt-4 mb-1.5 text-[15px] font-bold">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-primary mb-3 text-[15px]/7">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="mb-3 list-disc pl-6">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="mb-3 list-decimal pl-6">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="text-primary mb-1 text-[15px]/7">{children}</li>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold">{children}</strong>
            ),
            code: ({ children }) => (
              <code className="bg-red-secondary rounded-xs px-1.5 py-0.5 text-[13px] text-red-600 dark:text-red-400">
                {children}
              </code>
            ),
            hr: () => <hr className="border-primary my-5" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

function ThreadView({
  agent,
  threadTitle,
  messages: threadMessages,
  input,
  handleInputChange,
  handleSubmit,
  status,
}: {
  agent?: (typeof agents)[number];
  threadTitle: string;
  messages: ThreadMessage[];
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  status: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, []);

  const displayName = agent?.name || "Notion AI";

  return (
    <div className="flex h-full flex-col">
      <div className="border-primary flex shrink-0 items-center justify-between border-b px-4 py-2">
        <div className="flex min-w-0 items-center gap-2 text-sm">
          {agent ? (
            <AgentAvatar agent={agent} size={20} />
          ) : (
            <Icon icon={aiFaceIcon} size={20} color="primary" />
          )}
          <span className="text-primary shrink-0 font-medium">
            {displayName}
          </span>
          <span className="text-quaternary shrink-0">/</span>
          <span className="text-secondary truncate">{threadTitle}</span>
        </div>
        <div className="flex shrink-0 items-center gap-0.5">
          <IconButton variant="ghost" size="sm" className="rounded-sm">
            <Icon icon={gearIcon} size={16} color="tertiary" />
          </IconButton>
          <IconButton variant="ghost" size="sm" className="rounded-sm">
            <Icon icon={ellipsisIcon} size={16} color="tertiary" />
          </IconButton>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto pt-10 pb-8">
        <div className="mx-auto w-full max-w-[700px] px-4">
          <div className="mb-10 flex flex-col items-center">
            {agent ? (
              <div className="mb-3">
                <AgentAvatar agent={agent} size={48} />
              </div>
            ) : (
              <div className="mb-3">
                <Icon icon={aiFaceIcon} size={48} color="primary" />
              </div>
            )}
            <h2 className="text-primary text-xl font-bold">{displayName}</h2>
          </div>

          {threadMessages.map((msg, i) =>
            msg.role === "user" ? (
              <ThreadUserMessage key={i} content={msg.content} />
            ) : (
              <ThreadAssistantMessage
                key={i}
                content={msg.content}
                agent={agent}
                showAvatar={
                  i === 0 || (i > 0 && threadMessages[i - 1].role === "user")
                }
              />
            ),
          )}
        </div>
      </div>

      <div className="relative shrink-0">
        <div className="pointer-events-none absolute inset-x-0 -top-12 h-12 bg-linear-to-t from-[var(--background-color-primary)] to-transparent" />
        <NotionChatInput
          status={status}
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          placeholder={
            agent ? `Ask ${agent.name}...` : "Do anything with AI..."
          }
        />
      </div>
    </div>
  );
}

export default function Page() {
  const [chatState] = useAtom(chatStateAtom);
  const searchParams = useSearchParams();
  const agentId = searchParams.get("agent");
  const threadId = searchParams.get("thread");

  const agent = useMemo(
    () => (agentId ? agents.find((a) => a.id === agentId) : undefined),
    [agentId],
  );

  const threadData = useMemo(() => {
    if (!threadId) return null;
    const messages = chatThreads[threadId];
    if (!messages) return null;
    const allChats = chatGroups.flatMap((g) => g.chats);
    const chat = allChats.find((c) => c.id === threadId);
    return { messages, title: chat?.title || "Chat" };
  }, [threadId]);

  const { status, messages, input, handleInputChange, handleSubmit, setInput } =
    useChat({
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
    });

  const handleSelectPrompt = (text: string) => {
    setInput(text);
  };

  if (threadData) {
    return (
      <ThreadView
        agent={agent}
        threadTitle={threadData.title}
        messages={threadData.messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        status={status}
      />
    );
  }

  return (
    <div className="flex h-full flex-col">
      {messages.length === 0 ? (
        agent ? (
          <AgentEmptyState
            agent={agent}
            status={status}
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <EmptyState
            status={status}
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            onSelectPrompt={handleSelectPrompt}
          />
        )
      ) : (
        <>
          <SimpleTranscript
            status={status}
            messages={messages}
            gradientColorFrom="from-[var(--background-color-primary)]"
          />
          <div className="relative shrink-0">
            <div className="pointer-events-none absolute inset-x-0 -top-12 h-12 bg-linear-to-t from-[var(--background-color-primary)] to-transparent" />
            <NotionChatInput
              status={status}
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              placeholder={agent ? `Ask ${agent.name}...` : undefined}
            />
          </div>
        </>
      )}
    </div>
  );
}
