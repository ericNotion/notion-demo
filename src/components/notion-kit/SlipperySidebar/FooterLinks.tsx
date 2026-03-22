import { bookshelfIcon } from "@/nds-icons/src/bookshelf/default.icon";
import { Icon, type LoadedIconFunction } from "@nds-icons";
import { paperMicrophoneIcon } from "@nds-icons/paperMicrophone/default.icon";
import { questionMarkCircleIcon } from "@nds-icons/questionMarkCircle/default.icon";
import { templatesIcon } from "@nds-icons/templates/default.icon";
import { trashIcon } from "@nds-icons/trash/default.icon";
import { useSlipperySidebarContext } from "./context";

interface FooterItem {
  label: string;
  icon: LoadedIconFunction;
  action?: "meetings" | "library";
}

const footerItems: FooterItem[] = [
  { label: "Meetings", icon: paperMicrophoneIcon, action: "meetings" },
  { label: "Library", icon: bookshelfIcon, action: "library" },
  { label: "Marketplace", icon: templatesIcon },
  { label: "Help", icon: questionMarkCircleIcon },
  { label: "Trash", icon: trashIcon },
];

export function FooterLinks() {
  const { setActiveTab } = useSlipperySidebarContext();

  return (
    <div className="flex flex-col gap-px">
      {footerItems.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={() => item.action && setActiveTab(item.action)}
          className="text-secondary hover:bg-secondary-translucent flex h-[30px] w-full cursor-pointer items-center gap-2 rounded-[6px] px-2 py-1"
        >
          <span className="flex size-6 shrink-0 items-center justify-center">
            <Icon icon={item.icon} size={20} color="secondary" />
          </span>
          <span className="text-sm/5 font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
