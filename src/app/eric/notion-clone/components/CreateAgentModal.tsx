"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { xMarkIcon } from "@nds-icons/xMark/default.icon";
import { useState } from "react";
import type { Agent } from "../data";

const EMOJI_OPTIONS = [
  "🤖",
  "🧠",
  "💡",
  "⚡",
  "🔥",
  "🚀",
  "💎",
  "🎯",
  "🔮",
  "🌟",
  "🎨",
  "📊",
  "🔬",
  "📝",
  "💻",
  "🎭",
  "⭐",
  "🎵",
  "🎬",
  "🔧",
];

const AI_MODELS = [
  { value: "gpt-4.1", label: "GPT-4.1", provider: "OpenAI" },
  { value: "gpt-4.1-mini", label: "GPT-4.1 mini", provider: "OpenAI" },
  {
    value: "claude-4.5-sonnet",
    label: "Claude 4.5 Sonnet",
    provider: "Anthropic",
  },
  {
    value: "claude-4.5-haiku",
    label: "Claude 4.5 Haiku",
    provider: "Anthropic",
  },
];

interface CreateAgentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateAgent: (agent: Agent) => void;
}

export function CreateAgentModal({
  open,
  onOpenChange,
  onCreateAgent,
}: CreateAgentModalProps) {
  const [emoji, setEmoji] = useState("🤖");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [model, setModel] = useState("gpt-4.1");
  const [tools, setTools] = useState({
    notionSearch: true,
    deepResearch: true,
    webBrowsing: false,
    createPages: false,
  });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSubmit = () => {
    const agent: Agent = {
      id: crypto.randomUUID(),
      name,
      emoji,
      description,
      author: "You",
      tools: Object.entries(tools)
        .filter(([, v]) => v)
        .map(([k]) => k),
      model,
      category: "custom",
      avatar: "",
    };
    onCreateAgent(agent);
    onOpenChange(false);
    setName("");
    setDescription("");
    setInstructions("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-[640px] gap-0 overflow-hidden p-0">
        <DialogTitle className="sr-only">Create Custom Agent</DialogTitle>

        <div className="flex items-center justify-between border-b border-[var(--theme-colors-border-primary)] px-5 py-3.5">
          <h2 className="text-primary text-base font-semibold">
            Create Custom Agent
          </h2>
          <IconButton
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
          >
            <Icon icon={xMarkIcon} size={16} />
          </IconButton>
        </div>

        <div className="scrollbar-hidden flex flex-col gap-5 overflow-y-auto px-5 py-4">
          <div className="flex items-start gap-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="bg-secondary hover:bg-tertiary-translucent flex size-12 items-center justify-center rounded-lg text-2xl transition-colors"
              >
                {emoji}
              </button>
              {showEmojiPicker && (
                <div className="bg-elevated absolute top-full left-0 z-10 mt-1 grid grid-cols-5 gap-1 rounded-lg border border-[var(--theme-colors-border-primary)] p-2 shadow-lg">
                  {EMOJI_OPTIONS.map((e) => (
                    <button
                      key={e}
                      type="button"
                      onClick={() => {
                        setEmoji(e);
                        setShowEmojiPicker(false);
                      }}
                      className={cn(
                        "flex size-8 items-center justify-center rounded-md text-lg hover:bg-blue-50 dark:hover:bg-blue-950",
                        emoji === e && "bg-blue-100 dark:bg-blue-900",
                      )}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Agent name"
                className="text-primary placeholder:text-tertiary bg-transparent text-lg font-semibold outline-hidden"
              />
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description..."
                className="text-secondary placeholder:text-tertiary bg-transparent text-sm outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="text-primary mb-1.5 block text-xs font-semibold tracking-wide uppercase">
              Instructions
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Tell the agent what it should do, how to behave, and what to focus on..."
              rows={4}
              className="text-primary placeholder:text-tertiary bg-secondary w-full resize-none rounded-lg px-3 py-2.5 text-sm outline-hidden"
            />
          </div>

          <div>
            <label className="text-primary mb-1.5 block text-xs font-semibold tracking-wide uppercase">
              Tools
            </label>
            <div className="flex flex-col gap-1">
              {[
                {
                  key: "notionSearch" as const,
                  label: "Notion Search",
                  desc: "Search your workspace content",
                },
                {
                  key: "deepResearch" as const,
                  label: "Deep Research",
                  desc: "Advanced research and analysis",
                },
                {
                  key: "webBrowsing" as const,
                  label: "Web Browsing",
                  desc: "Browse the web for information",
                  preview: true,
                },
                {
                  key: "createPages" as const,
                  label: "Create/Update Pages",
                  desc: "Create and modify Notion pages",
                  preview: true,
                },
              ].map((tool) => (
                <div
                  key={tool.key}
                  className="hover:bg-secondary-translucent flex items-center justify-between rounded-lg px-3 py-2.5"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-sm font-medium">
                        {tool.label}
                      </span>
                      {tool.preview && (
                        <span className="rounded-full bg-orange-100 px-1.5 py-0.5 text-[10px] font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                          Preview
                        </span>
                      )}
                    </div>
                    <p className="text-tertiary text-xs">{tool.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setTools((t) => ({ ...t, [tool.key]: !t[tool.key] }))
                    }
                    className={cn(
                      "relative h-5 w-9 rounded-full transition-colors",
                      tools[tool.key]
                        ? "bg-blue-500"
                        : "bg-[var(--theme-colors-border-primary)]",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform",
                        tools[tool.key] && "translate-x-4",
                      )}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="text-primary mb-1.5 block text-xs font-semibold tracking-wide uppercase">
              Model
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="text-primary bg-secondary w-full rounded-lg px-3 py-2 text-sm outline-hidden"
            >
              {AI_MODELS.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label} ({m.provider})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-[var(--theme-colors-border-primary)] px-5 py-3">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={!name.trim()}
            onClick={handleSubmit}
          >
            Create Agent
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
