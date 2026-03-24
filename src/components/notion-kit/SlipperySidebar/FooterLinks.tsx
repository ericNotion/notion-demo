"use client";

import { bookshelfIcon } from "@/nds-icons/src/bookshelf/default.icon";
import { Icon, type LoadedIconFunction } from "@nds-icons";
import { questionMarkCircleIcon } from "@nds-icons/questionMarkCircle/default.icon";
import { templatesIcon } from "@nds-icons/templates/default.icon";
import { trashIcon } from "@nds-icons/trash/default.icon";
import { useRouter } from "next/navigation";

interface FooterItem {
  label: string;
  icon: LoadedIconFunction;
  href?: string;
}

const footerItems: FooterItem[] = [
  { label: "Library", icon: bookshelfIcon, href: "/eric/notion-clone/library" },
  { label: "Marketplace", icon: templatesIcon },
  { label: "Help", icon: questionMarkCircleIcon },
  { label: "Trash", icon: trashIcon },
];

export function FooterLinks() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-px">
      {footerItems.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={() => {
            if (item.href) {
              router.push(item.href, { scroll: false });
            }
          }}
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
