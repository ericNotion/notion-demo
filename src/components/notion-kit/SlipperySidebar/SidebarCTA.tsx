"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { aiFaceIcon } from "@/nds-icons/src/aiFace/default.icon";
import { pageIcon } from "@/nds-icons/src/page/default.icon";
import { Icon } from "@nds-icons";
import { chatBubbleIcon } from "@nds-icons/chatBubble/default.icon";
import { composeIcon } from "@nds-icons/compose/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";
import { waveformIcon } from "@nds-icons/waveform/default.icon";
import { useSlipperySidebarContext } from "./context";

const FLOATING_PILL_SHADOW_LIGHT =
  "0px 14px 28px -6px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(84, 72, 49, 0.08)";
const FLOATING_PILL_SHADOW_DARK =
  "0 0 0 1px rgba(56, 56, 54, 1), 0px 14px 28px -6px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.12)";

interface FloatingPillButtonProps {
  icon: typeof aiFaceIcon;
  label: string;
  shortcut?: string;
  onClick?: () => void;
}

function FloatingPillButton({
  icon,
  label,
  shortcut,
  onClick,
}: FloatingPillButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-elevated dark:bg-tertiary fill-secondary hover:fill-primary text-secondary hover:text-primary relative flex h-10 w-full cursor-pointer items-center justify-center gap-1 rounded-full border-none pr-2 pl-1.5 shadow-sm ring-[0.5px] ring-black/10 dark:ring-white/15"
      style={{
        boxShadow: `light-dark(${FLOATING_PILL_SHADOW_LIGHT}, ${FLOATING_PILL_SHADOW_DARK})`,
      }}
    >
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full">
        <Icon color="inherit" icon={icon} size={22} />
      </span>
      <span className="text-sm font-medium">{label}</span>
      {shortcut && (
        <span className="text-tertiary bg-secondary-translucent ml-0.5 rounded-[4px] px-1 py-0.5 text-[10px] font-medium">
          {shortcut}
        </span>
      )}
    </button>
  );
}

interface ComposeButtonProps {
  className?: string;
  onPage?: () => void;
  onChat?: () => void;
  onMeeting?: () => void;
  onDatabase?: () => void;
}

function ComposeButton({
  className,
  onPage,
  onChat,
  onMeeting,
  onDatabase,
}: ComposeButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Compose"
          className={`bg-elevated dark:bg-tertiary fill-secondary hover:fill-primary flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-none shadow-sm ring-[0.5px] ring-black/10 dark:ring-white/15 ${className ?? ""}`}
          style={{
            boxShadow: `light-dark(${FLOATING_PILL_SHADOW_LIGHT}, ${FLOATING_PILL_SHADOW_DARK})`,
          }}
        >
          <Icon color="inherit" icon={composeIcon} size={20} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        align="end"
        className="w-[175px] rounded-xl"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem className="min-h-8" onClick={onPage}>
            <Icon icon={pageIcon} size={16} />
            Page
          </DropdownMenuItem>
          <DropdownMenuItem className="min-h-8" onClick={onChat}>
            <Icon icon={chatBubbleIcon} size={16} />
            Chat
          </DropdownMenuItem>
          <DropdownMenuItem className="min-h-8" onClick={onMeeting}>
            <Icon icon={waveformIcon} size={16} />
            AI Meeting Note
          </DropdownMenuItem>
          <DropdownMenuItem className="min-h-8" onClick={onDatabase}>
            <Icon icon={viewTableIcon} size={16} />
            Database
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export interface SidebarCTAProps {
  onNewChat?: () => void;
  onNewMeeting?: () => void;
  onComposePage?: () => void;
  onComposeChat?: () => void;
  onComposeMeeting?: () => void;
  onComposeDatabase?: () => void;
}

export function SidebarCTA({
  onNewChat,
  onNewMeeting,
  onComposePage,
  onComposeChat,
  onComposeMeeting,
  onComposeDatabase,
}: SidebarCTAProps = {}) {
  const { activeTab } = useSlipperySidebarContext();

  const isChat = activeTab === "chats";
  const showNewMeeting = activeTab === "meetings" || activeTab === "inbox";

  const ctaLabel = showNewMeeting ? "New meeting" : "New chat";
  const ctaIcon = showNewMeeting ? waveformIcon : aiFaceIcon;
  const ctaShortcut = isChat ? "\u2318O" : undefined;
  const ctaOnClick = showNewMeeting ? onNewMeeting : onNewChat;

  return (
    <div className="flex shrink-0 px-4 pt-2 pb-4">
      <div className="flex flex-1 items-center" style={{ gap: 10 }}>
        <FloatingPillButton
          icon={ctaIcon}
          label={ctaLabel}
          shortcut={ctaShortcut}
          onClick={ctaOnClick}
        />
        <ComposeButton
          onPage={onComposePage}
          onChat={onComposeChat}
          onMeeting={onComposeMeeting}
          onDatabase={onComposeDatabase}
        />
      </div>
    </div>
  );
}
