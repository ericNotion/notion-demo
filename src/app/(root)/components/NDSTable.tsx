"use client";

import { Card } from "@/components/ui/card";
import { useIsProduction } from "@/hooks/usePreviewProductionMode";
import { Icon } from "@nds-icons";
import { codeSmallIcon } from "@nds-icons/code/small.icon";
import { paintPaletteSmallIcon } from "@nds-icons/paintPalette/small.icon";
import { pencilAndOutlineSmallIcon } from "@nds-icons/pencilAndOutline/small.icon";
import { textFormatSmallIcon } from "@nds-icons/textFormat/small.icon";
import Link from "next/link";

type NDSItem = {
  name: string;
  href: string;
  icon: any;
  description?: string;
};

const ndsItems: NDSItem[] = [
  {
    name: "Components",
    href: "/nds/components",
    icon: codeSmallIcon,
  },
  {
    name: "Icons",
    href: "/nds/icons",
    icon: pencilAndOutlineSmallIcon,
  },
  {
    name: "Colors",
    href: "/nds/colors",
    icon: paintPaletteSmallIcon,
  },
  {
    name: "Typography",
    href: "/nds/typography",
    icon: textFormatSmallIcon,
  },
];

export function NDSTable({ searchQuery }: { searchQuery: string }) {
  const prod = useIsProduction();
  if (prod) return null;

  const filteredItems = searchQuery
    ? ndsItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : ndsItems;

  if (filteredItems.length === 0) {
    return (
      <div className="text-secondary py-8 text-center text-sm">
        {searchQuery
          ? "No NDS resources found matching your search."
          : "No NDS resources available."}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-2">
      {filteredItems.map((item) => (
        <Card
          key={item.href}
          className="group/card hover:bg-secondary border-secondary relative flex h-12 items-center gap-3 overflow-hidden rounded-2xl px-4 py-3"
        >
          <Link href={item.href} className="absolute inset-0 z-0" />

          <Icon icon={item.icon} color="primary" />
          <span className="truncate text-base font-medium">{item.name}</span>
        </Card>
      ))}
    </div>
  );
}
