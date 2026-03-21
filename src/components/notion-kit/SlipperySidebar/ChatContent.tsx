import { sunIcon } from "@/nds-icons/src/sun/default.icon";
import { Icon, type LoadedIconFunction } from "@nds-icons";
import { chatBubbleIcon } from "@nds-icons/chatBubble/default.icon";

export interface ChatItem {
  id: string;
  title: string;
  time: string;
  isDailyBrief?: boolean;
}

export interface ChatGroup {
  label: string;
  chats: ChatItem[];
}

interface ChatItemRowProps {
  title: string;
  time: string;
  icon: LoadedIconFunction;
  iconColor: "secondary" | "yellowAccentPrimary";
}

function ChatItemRow({ title, time, icon, iconColor }: ChatItemRowProps) {
  return (
    <button
      type="button"
      className="hover:bg-secondary-translucent flex h-[30px] w-full cursor-pointer items-center gap-2 rounded-[6px] px-2 py-1"
    >
      <span className="flex size-6 shrink-0 items-center justify-center">
        <Icon icon={icon} size={20} color={iconColor} />
      </span>
      <span className="text-primary min-w-0 flex-1 truncate text-left text-sm/5 font-medium">
        {title}
      </span>
      <span className="text-tertiary shrink-0 text-xs/4 font-medium">
        {time}
      </span>
    </button>
  );
}

interface ChatContentProps {
  groups?: ChatGroup[];
}

export function ChatContent({ groups }: ChatContentProps) {
  if (!groups || groups.length === 0) {
    return (
      <div className="flex min-h-[220px] grow flex-col items-center justify-center overflow-hidden px-5 text-center">
        <div className="pb-1.5">
          <Icon icon={chatBubbleIcon} size={24} color="secondary" />
        </div>
        <p className="text-primary max-w-[380px] text-sm/5 font-medium">
          No messages yet
        </p>
        <p className="text-tertiary mt-0.5 mb-1 max-w-[380px] text-xs/4">
          Start a conversation to see your chats here
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 grow flex-col px-2 pt-1.5">
      {groups.map((group, i) => (
        <div
          key={group.label}
          className={`flex flex-col ${i < groups.length - 1 ? "pb-3" : ""}`}
        >
          <div className="px-2 py-1.5">
            <span className="text-secondary text-xs/4 font-medium">
              {group.label}
            </span>
          </div>
          <div className="flex flex-col">
            {group.chats.map((chat) => (
              <ChatItemRow
                key={chat.id}
                title={chat.title}
                time={chat.time}
                icon={chat.isDailyBrief ? sunIcon : chatBubbleIcon}
                iconColor={
                  chat.isDailyBrief ? "yellowAccentPrimary" : "secondary"
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
