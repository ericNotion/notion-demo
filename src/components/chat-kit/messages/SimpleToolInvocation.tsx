import { Collapsible } from "@/components/ui/collapsible-animated";
import { LoadingDots } from "@/components/ui/loading-dots";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowChevronSingleRightSmallIcon } from "@nds-icons/arrowChevronSingleRight/small.icon";
import { globeIcon } from "@nds-icons/globe/default.icon";
import { sparklesIcon } from "@nds-icons/sparkles/default.icon";
import { ToolInvocation } from "ai";
import { useState } from "react";
import { ShimmerText } from "../ShimmerText";

export function ToolInvocationComponent({
  toolInvocation,
}: {
  toolInvocation: ToolInvocation;
}) {
  const [expanded, setExpanded] = useState(false);

  switch (toolInvocation.toolName) {
    case "exaWebSearch":
      return (
        <MinimalToolInvocation
          label={<>{getToolInvocationName(toolInvocation.toolName)} </>}
          toolInvocation={toolInvocation}
        >
          <WebSearchContent toolInvocation={toolInvocation} />
        </MinimalToolInvocation>
      );

    default:
      return (
        <div className={cn("flex flex-col", {})}>
          <ToolInvocationHeader
            toolInvocation={toolInvocation}
            expanded={expanded}
            setExpanded={setExpanded}
          />
          <Collapsible expanded={expanded}>
            <ToolInvocationContent toolInvocation={toolInvocation} />
          </Collapsible>
        </div>
      );
  }
}

function ToolInvocationHeader({
  toolInvocation,
  expanded,
  setExpanded,
}: {
  toolInvocation: ToolInvocation;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}) {
  return (
    <button
      className={cn(
        "flex flex-1 items-center gap-3 py-2.5 text-left focus:ring-0 focus:outline-none",
      )}
      onClick={() => setExpanded(!expanded)}
    >
      {toolInvocation.state === "result" && (
        <>{getToolInvocationIcon(toolInvocation.toolName)}</>
      )}

      {toolInvocation.state !== "result" && <LoadingDots />}

      {getToolInvicationHeaderContent(toolInvocation)}
    </button>
  );
}

function getToolInvocationIcon(toolName: string, size: number = 20) {
  switch (toolName) {
    case "exaWebSearch":
      return <Icon icon={globeIcon} size={size} />;
    default:
      return <Icon icon={sparklesIcon} size={size} />;
  }
}

function getToolInvicationHeaderContent(toolInvocation: ToolInvocation) {
  switch (toolInvocation.toolName) {
    case "exaWebSearch":
      return (
        <ShimmerText
          shimmer={toolInvocation.state === "call"}
          className="line-clamp-1 flex-1"
        >
          {getToolInvocationName(toolInvocation.toolName)}
        </ShimmerText>
      );
    default:
      return (
        <ShimmerText shimmer={toolInvocation.state === "call"}>
          {getToolInvocationName(toolInvocation.toolName)}
        </ShimmerText>
      );
  }
}

function getToolInvocationName(toolName: string) {
  switch (toolName) {
    case "exaWebSearch":
      return "Search the web";
    default:
      return toolName;
  }
}

function ToolInvocationContent({
  toolInvocation,
}: {
  toolInvocation: ToolInvocation;
}) {
  return (
    <div>
      {(() => {
        switch (toolInvocation.toolName) {
          case "exaWebSearch": {
            return <WebSearchContent toolInvocation={toolInvocation} />;
          }

          default:
            return null;
        }
      })()}
    </div>
  );
}

type Citation = {
  favicon: string;
  id: string;
  image: string;
  snippet: string;
  title: string;
  url: string;
};

function WebSearchContent({
  toolInvocation,
}: {
  toolInvocation: ToolInvocation;
}) {
  if (toolInvocation.state !== "result") return null;

  return (
    <div className="ml-6 flex flex-col p-2">
      <div className="flex flex-wrap gap-1">
        {toolInvocation.result.citations.map((citation: Citation) => (
          <div
            key={citation.url}
            className="group/context-chip hover:bg-secondary relative grid h-6 cursor-pointer grid-cols-[1fr_auto] items-center gap-1 rounded-md border pr-1.5 pl-1 dark:hover:bg-neutral-700"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={citation.title}
              width={14}
              height={14}
              src={citation.favicon}
              className="size-3.5"
            />
            <div className="text-quaternary max-w-[32ch] truncate text-xs">
              {citation.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MinimalToolInvocation({
  toolInvocation,
  label,
  children,
}: {
  toolInvocation: ToolInvocation;
  label: React.ReactNode;
  children?: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col rounded-xl">
      <button
        onClick={() => {
          if (!children) return;
          setExpanded(!expanded);
        }}
        className={cn("flex items-center gap-3 text-left", {
          "cursor-auto": !children,
          "cursor-pointer": children,
        })}
      >
        {toolInvocation.state === "result" ? (
          <div className="text-quaternary size-5 opacity-80">
            {getToolInvocationIcon(toolInvocation.toolName)}
          </div>
        ) : (
          <LoadingDots />
        )}

        <ShimmerText
          className={cn({
            "text-quaternary": toolInvocation.state === "result",
          })}
          shimmer={toolInvocation.state !== "result"}
        >
          {label}
        </ShimmerText>
        {children && (
          <Icon
            icon={arrowChevronSingleRightSmallIcon}
            size="sm"
            className={cn("-ml-2 opacity-30 transition-transform", {
              "rotate-90": expanded,
            })}
          />
        )}
      </button>
      {children && <Collapsible expanded={expanded}>{children}</Collapsible>}
    </div>
  );
}
