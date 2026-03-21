import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { duplicateSmallIcon } from "@nds-icons/duplicate/small.icon";
import { handThumbsDownSmallIcon } from "@nds-icons/handThumbsDown/small.icon";
import { UIMessage } from "ai";
import { ReasoningPartComponent } from "./SimpleReasoningMessagePart";
import { TextPartComponent } from "./SimpleTextMessagePart";
import { ToolInvocationComponent } from "./SimpleToolInvocation";

export function ReasoningAssistantMessage({
  message,
  isLastMessage,
  status,
}: {
  message: UIMessage;
  isLastMessage: boolean;
  status: "submitted" | "streaming" | "ready" | "error";
}) {
  return (
    <div className="group/message flex flex-col gap-1">
      <div className="flex flex-col gap-6">
        <RenderParts isLastMessage={isLastMessage} parts={message.parts} />
      </div>

      <SimpleAssistantActions
        isLastMessage={isLastMessage}
        isReady={status === "ready"}
      />
    </div>
  );
}

function RenderParts({
  parts,
  isLastMessage,
}: {
  parts: UIMessage["parts"];
  isLastMessage: boolean;
}) {
  return (
    <>
      {parts.map((part, index) => {
        const isLastPart = index === parts.length - 1;
        switch (part.type) {
          case "text":
            return <TextPartComponent key={index} text={part.text} />;

          case "reasoning":
            return (
              <ReasoningPartComponent
                key={index}
                text={part.reasoning}
                isLastMessage={isLastMessage}
                isLastPart={isLastPart}
              />
            );

          case "tool-invocation": {
            return (
              <ToolInvocationComponent
                key={part.toolInvocation.toolCallId}
                toolInvocation={part.toolInvocation}
              />
            );
          }
          default:
            return null;
        }
      })}
    </>
  );
}

function SimpleAssistantActions({
  isLastMessage,
  isReady,
}: {
  isLastMessage: boolean;
  isReady: boolean;
}) {
  return (
    <div className="-ml-1 flex h-9 gap-3">
      <div
        className={cn(
          "flex transition-all duration-150",
          isLastMessage
            ? isReady
              ? "pointer-events-auto opacity-100" // Last message and ready: always visible
              : "pointer-events-none opacity-0" // Last message but not ready: hidden
            : "pointer-events-none opacity-0 group-hover/message:pointer-events-auto group-hover/message:opacity-100", // Not last message: show on hover
        )}
      >
        <IconButton className="text-tertiary hover:text-primary" size="xs">
          <Icon icon={duplicateSmallIcon} size="sm" />
        </IconButton>
        <IconButton className="text-tertiary hover:text-primary" size="xs">
          <Icon icon={handThumbsDownSmallIcon} size="sm" />
        </IconButton>
      </div>
    </div>
  );
}
