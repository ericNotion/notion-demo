import { Collapsible } from "@/components/ui/collapsible-animated";
import { LoadingDots } from "@/components/ui/loading-dots";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowChevronSingleDownIcon } from "@nds-icons/arrowChevronSingleDown/default.icon";
import { useEffect, useState } from "react";
import { ShimmerText } from "../ShimmerText";

export function ReasoningPartComponent({
  text,
  isLastMessage,
  isLastPart,
}: {
  text: string;
  isLastMessage: boolean;
  isLastPart: boolean;
}) {
  const [expanded, setExpanded] = useState(isLastMessage && isLastPart);

  useEffect(() => {
    if (!isLastMessage) {
      setExpanded(false);
    }
  }, [isLastMessage]);

  return (
    <div className="flex flex-col gap-1">
      <button
        className="flex items-center gap-3 self-start text-left opacity-80"
        onClick={() => setExpanded(!expanded)}
      >
        <ShimmerText shimmer={isLastMessage && isLastPart}>
          {isLastMessage && isLastPart ? "Thinking..." : "Thought for 34s"}
        </ShimmerText>
        {isLastMessage && isLastPart ? (
          <LoadingDots />
        ) : (
          <Icon
            icon={arrowChevronSingleDownIcon}
            size="sm"
            color="tertiary"
            className={cn("-ml-1 transition-all", !expanded && "-rotate-90")}
          />
        )}
      </button>

      <Collapsible expanded={expanded} duration={0.2}>
        <div className="text-quaternary mt-1 text-sm opacity-80">{text}</div>
      </Collapsible>
    </div>
  );
}
