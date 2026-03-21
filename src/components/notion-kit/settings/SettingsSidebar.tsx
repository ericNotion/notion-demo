"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { aiFaceIcon } from "@nds-icons/aiFace/default.icon";
import { arrowInCircleDownIcon } from "@nds-icons/arrowInCircleDown/default.icon";
import { arrowLineDownIcon } from "@nds-icons/arrowLineDown/default.icon";
import { arrowUpRightSquareIcon } from "@nds-icons/arrowUpRightSquare/default.icon";
import { badgeCheckIcon } from "@nds-icons/badgeCheck/default.icon";
import { bellIcon } from "@nds-icons/bell/default.icon";
import { chartLineIcon } from "@nds-icons/chartLine/default.icon";
import { checkmarkShieldIcon } from "@nds-icons/checkmarkShield/default.icon";
import { commentArrowUpIcon } from "@nds-icons/commentArrowUp/default.icon";
import { connectionsIcon } from "@nds-icons/connections/default.icon";
import { creditCardIcon } from "@nds-icons/creditCard/default.icon";
import { emojiFaceIcon } from "@nds-icons/emojiFace/default.icon";
import { gearIcon } from "@nds-icons/gear/default.icon";
import { globeIcon } from "@nds-icons/globe/default.icon";
import { keyIcon } from "@nds-icons/key/default.icon";
import { mapIcon } from "@nds-icons/map/default.icon";
import { peopleIcon } from "@nds-icons/people/default.icon";
import { slidersIcon } from "@nds-icons/sliders/default.icon";
import { sparkleMagnifyingGlassIcon } from "@nds-icons/sparkleMagnifyingGlass/default.icon";
import { squareGrid2X2Icon } from "@nds-icons/squareGrid2X2/default.icon";
import { AISettingsControlPopover } from "./pages/ai-usage";

export type SettingsSidebarItem = {
  id: string;
  label: string;
  iconName?: string;
  isAvatar?: boolean;
  avatarInitial?: string;
};

export type SettingsSidebarSection = {
  title: string;
  items: SettingsSidebarItem[];
};

const iconMap: Record<string, any> = {
  sliders: slidersIcon,
  bell: bellIcon,
  arrowUpRightSquare: arrowUpRightSquareIcon,
  arrowInCircleDown: arrowInCircleDownIcon,
  gear: gearIcon,
  people: peopleIcon,
  chartLine: chartLineIcon,
  key: keyIcon,
  checkmarkShield: checkmarkShieldIcon,
  aiFace: aiFaceIcon,
  badgeCheck: badgeCheckIcon,
  globe: globeIcon,
  emojiFace: emojiFaceIcon,
  squareGrid2X2: squareGrid2X2Icon,
  commentArrowUp: commentArrowUpIcon,
  creditCard: creditCardIcon,
  map: mapIcon,
  connections: connectionsIcon,
  arrowLineDown: arrowLineDownIcon,
  sparkleMagnifyingGlass: sparkleMagnifyingGlassIcon,
};

function SidebarSectionComponent({
  title,
  items,
  activeItem,
  onSelect,
}: {
  title: string;
  items: SettingsSidebarItem[];
  activeItem?: string;
  onSelect?: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex h-7 items-center px-2">
        <p className="text-tertiary text-xs leading-4 font-medium">{title}</p>
      </div>
      {items.map((item) => {
        const isActive = activeItem === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelect?.(item.id)}
            className={cn(
              "flex h-7 w-full items-center gap-2 rounded-md px-1.5 py-1",
              isActive ? "bg-tertiary" : "hover:bg-tertiary-translucent",
            )}
          >
            {item.isAvatar ? (
              <Avatar className="h-5 w-5 shrink-0">
                <AvatarImage src="" />
                <AvatarFallback className="bg-elevated border-border-secondary h-5 w-5 border text-[10px] font-semibold text-[var(--icon-color-secondary)]">
                  {item.avatarInitial}
                </AvatarFallback>
              </Avatar>
            ) : item.iconName && iconMap[item.iconName] ? (
              <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                <Icon
                  icon={iconMap[item.iconName]}
                  size="sm"
                  color={isActive ? "primary" : "secondary"}
                />
              </div>
            ) : null}
            <span
              className={cn(
                "truncate text-sm leading-5 font-medium",
                isActive ? "text-primary" : "text-accent-primary",
              )}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// Default sections matching the Notion settings structure
const defaultAccountItems: SettingsSidebarItem[] = [
  {
    id: "profile",
    label: "John Mason",
    isAvatar: true,
    avatarInitial: "J",
  },
  {
    id: "preferences",
    label: "Preferences",
    iconName: "sliders",
  },
  {
    id: "notifications",
    label: "Notifications",
    iconName: "bell",
  },
  {
    id: "connections",
    label: "Connections",
    iconName: "arrowUpRightSquare",
  },
  {
    id: "offline",
    label: "Offline",
    iconName: "arrowInCircleDown",
  },
];

const defaultWorkspaceItems: SettingsSidebarItem[] = [
  {
    id: "general",
    label: "General",
    iconName: "gear",
  },
  {
    id: "people",
    label: "People",
    iconName: "people",
  },
  {
    id: "teamspaces",
    label: "Teamspaces",
    iconName: "chartLine",
  },
  {
    id: "security",
    label: "Security",
    iconName: "key",
  },
  {
    id: "identity",
    label: "Identity",
    iconName: "checkmarkShield",
  },
  {
    id: "notion-ai",
    label: "Notion AI",
    iconName: "aiFace",
  },
  {
    id: "verified-pages",
    label: "Verified pages",
    iconName: "badgeCheck",
  },
  {
    id: "public-pages",
    label: "Public pages",
    iconName: "globe",
  },
  {
    id: "emoji",
    label: "Emoji",
    iconName: "emojiFace",
  },
  {
    id: "workspace-connections",
    label: "Connections",
    iconName: "connections",
  },
  {
    id: "import",
    label: "Import",
    iconName: "squareGrid2X2",
  },
  {
    id: "requests",
    label: "Requests",
    iconName: "commentArrowUp",
  },
  {
    id: "billing",
    label: "Billing",
    iconName: "creditCard",
  },
  {
    id: "explore-plans",
    label: "Explore plans",
    iconName: "map",
  },
];

export const defaultSections: SettingsSidebarSection[] = [
  { title: "Account", items: defaultAccountItems },
  { title: "Workspace", items: defaultWorkspaceItems },
];

interface SettingsSidebarProps {
  sections?: SettingsSidebarSection[];
  activeItem?: string;
  onSelect?: (id: string) => void;
  className?: string;
  footerSlot?: React.ReactNode;
}

export function SettingsSidebar({
  sections = defaultSections,
  activeItem,
  onSelect,
  className,
  footerSlot,
}: SettingsSidebarProps) {
  // Show AI settings control popover when on Notion AI page
  const showAIControls = activeItem === "notion-ai";
  const effectiveFooterSlot =
    footerSlot ?? (showAIControls ? <AISettingsControlPopover /> : null);

  return (
    <div
      className={cn(
        "border-border-primary bg-elevated flex w-[240px] shrink-0 flex-col border-r p-2",
        className,
      )}
    >
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto">
        {sections.map((section) => (
          <SidebarSectionComponent
            key={section.title}
            title={section.title}
            items={section.items}
            activeItem={activeItem}
            onSelect={onSelect}
          />
        ))}
      </div>
      {effectiveFooterSlot && <div className="pt-2">{effectiveFooterSlot}</div>}
    </div>
  );
}
