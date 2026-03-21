"use client";

import { componentsData } from "@/app/(nds)/nds/components-data";
import { useCurrentUser } from "@/app/(root)/lib/useCurrentUser";
import { PrimarySidebar } from "@/components/playground-kit/PrimarySidebar";
import { SidebarItem } from "@/components/playground-kit/PrimarySidebar/SidebarItem";
import { Button } from "@/components/ui/button";
import { Icon } from "@nds-icons";
import { codeSmallIcon } from "@nds-icons/code/small.icon";
import { usePathname } from "next/navigation";

function ComponentTopBar() {
  const pathname = usePathname();
  const { data } = useCurrentUser();

  // Extract component slug from pathname like "/nds/components/button"
  const componentSlug = pathname.split("/").pop();
  const currentComponent = componentsData.find((c) => c.slug === componentSlug);

  // Convert kebab-case slug to PascalCase filename (e.g., "icon-button" -> "IconButton")
  const componentFileName = componentSlug
    ? componentSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    : null;

  // Components that exist in /components/ (originals that re-export from ui/)
  const componentsWithOriginal = new Set([
    "Accordion",
    "Avatar",
    "Badge",
    "Button",
    "Checkbox",
    "Collapsible",
    "Dialog",
    "DropdownMenu",
    "HoverCard",
    "IconButton",
    "LoadingSpinner",
    "LoadingSquiggle",
    "Popover",
    "Switch",
    "Textarea",
    "Tooltip",
  ]);

  // Determine the correct path - use /components/ if original exists, otherwise /components/ui/
  const cursorPath =
    data?.sourcePath && componentFileName
      ? componentsWithOriginal.has(componentFileName)
        ? `cursor://file//${data.sourcePath}/src/components/${componentFileName}.tsx`
        : `cursor://file//${data.sourcePath}/src/components/ui/${componentSlug}.tsx`
      : null;

  if (componentSlug === "components") return null;

  return (
    <div className="flex h-11 w-full flex-none items-center justify-between px-2 pr-2">
      <div className="px-2 font-medium">
        {currentComponent?.name || "Component"}
      </div>

      <div className="flex items-center gap-1">
        {cursorPath && (
          <Button variant="plain" className="text-secondary" asChild>
            <a
              href={cursorPath}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in Cursor"
            >
              <Icon icon={codeSmallIcon} size="sm" color="secondary" />
              Open in Cursor
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 flex overflow-hidden">
      <PrimarySidebar
        globalItems={<></>}
        displayHeader={false}
        displayNewButton={false}
        displayFooter={false}
      >
        {componentsData.map((c) => {
          const isActive = pathname === `/nds/components/${c.slug}`;
          return (
            <SidebarItem
              key={c.slug}
              label={c.name}
              href={`/nds/components/${c.slug}`}
              isActive={isActive}
            />
          );
        })}
      </PrimarySidebar>

      <div className="flex flex-1 flex-col overflow-hidden">
        <ComponentTopBar />
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}
