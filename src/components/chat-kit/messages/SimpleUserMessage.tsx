import { IconButton } from "@/components/ui/icon-button";
import { Icon } from "@nds-icons";
import { duplicateSmallIcon } from "@nds-icons/duplicate/small.icon";
import { pencilSmallIcon } from "@nds-icons/pencil/small.icon";
import { UIMessage } from "ai";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function SimpleUserMessage({ message }: { message: UIMessage }) {
  return (
    <div className="relative flex items-start gap-3">
      <div className="group/message flex flex-1 flex-col self-end">
        <div className="flex max-w-[calc(100%-40px)] flex-col gap-4 self-end rounded-2xl bg-black/5 px-4 py-2.5 text-sm text-[15px] dark:bg-white/5">
          <Markdown rehypePlugins={[rehypeRaw]}>{message.content}</Markdown>
        </div>

        <UserMessageActions />
      </div>
    </div>
  );
}

function UserMessageActions() {
  return (
    <div className="pointer-events-none flex h-9 items-center justify-end opacity-0 group-hover/message:pointer-events-auto group-hover/message:opacity-100">
      <IconButton className="text-tertiary hover:text-primary" size="xs">
        <Icon icon={duplicateSmallIcon} size="sm" />
      </IconButton>
      <IconButton className="text-tertiary hover:text-primary" size="xs">
        <Icon icon={pencilSmallIcon} size="sm" />
      </IconButton>
    </div>
  );
}
