"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CreateAgentModal } from "../components/CreateAgentModal";
import { type Agent, agents as builtInAgents } from "../data";
import { NotionShell } from "../shell";

type Category = "all" | "custom" | "workspace";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "workspace", label: "Workspace" },
  { id: "custom", label: "Custom" },
];

export default function Page() {
  const router = useRouter();
  const [category, setCategory] = useState<Category>("all");
  const [createOpen, setCreateOpen] = useState(false);
  const [customAgents, setCustomAgents] = useState<Agent[]>([]);

  const allAgents = [...builtInAgents, ...customAgents];
  const filtered =
    category === "all"
      ? allAgents
      : allAgents.filter((a) => a.category === category);

  return (
    <NotionShell title="Agents">
      <div className="mx-auto w-full max-w-4xl px-8 pt-10 pb-40">
        <div className="mb-2 text-[78px] leading-[86px]">🤖</div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-primary text-[40px] font-bold tracking-tight">
              Agents
            </h1>
            <p className="text-secondary mt-1 text-[15px]">
              AI agents that work autonomously on your behalf.
            </p>
          </div>
          <Button variant="primary" onClick={() => setCreateOpen(true)}>
            <Icon icon={plusIcon} size={14} className="text-white" />
            New agent
          </Button>
        </div>

        <div className="mt-6 flex items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                category === cat.id
                  ? "bg-secondary text-primary"
                  : "text-tertiary hover:bg-secondary-translucent",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {filtered.map((agent) => (
            <button
              key={agent.id}
              type="button"
              onClick={() =>
                router.push(`/eric/notion-clone/chat?agent=${agent.id}`)
              }
              className="bg-elevated border-primary-translucent group flex gap-3 rounded-xl border p-4 text-left transition-shadow hover:shadow-sm"
            >
              <span className="bg-secondary flex size-10 shrink-0 items-center justify-center rounded-lg text-xl">
                {agent.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-sm font-semibold">
                    {agent.name}
                  </span>
                  {agent.category === "notion" && (
                    <span className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      Built-in
                    </span>
                  )}
                </div>
                <p className="text-tertiary mt-0.5 line-clamp-2 text-xs leading-relaxed">
                  {agent.description}
                </p>
                <div className="text-quaternary mt-2 flex items-center gap-3 text-[11px]">
                  <span>by {agent.author}</span>
                  <span>{agent.tools.length} tools</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <CreateAgentModal
        open={createOpen}
        onOpenChange={setCreateOpen}
        onCreateAgent={(agent) => setCustomAgents((prev) => [...prev, agent])}
      />
    </NotionShell>
  );
}
