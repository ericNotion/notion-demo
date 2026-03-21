"use client";

import { componentsData } from "@/app/(nds)/nds/components-data";
import { useCurrentUsername } from "@/app/(root)/lib/useCurrentUser";
import staticData from "@/data/static-data.json";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useIsProduction } from "@/hooks/usePreviewProductionMode";
import { commandMenuOpenAtom } from "@/root/atoms/commandMenuOpenAtom";
import { commandMenuPageAtom } from "@/root/atoms/commandMenuPageAtom";
import { createPrototypeDialogOpenAtom } from "@/root/atoms/createPrototypeDialogOpenAtom";
import { Prototype, UserPrototypes } from "@/types/prototypes";
import { Icon, LoadedIconFunction } from "@nds-icons";
import { codeIcon } from "@nds-icons/code/default.icon";
import { homeIcon } from "@nds-icons/home/default.icon";
import { paintPaletteSmallIcon } from "@nds-icons/paintPalette/small.icon";
import { pencilAndOutlineIcon } from "@nds-icons/pencilAndOutline/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { textFormatSmallIcon } from "@nds-icons/textFormat/small.icon";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Command } from "cmdk";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import useSWR from "swr";

async function fetchPrototypes() {
  try {
    const response = await fetch("/api/prototypes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      redirect: "error",
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to load prototypes`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

type IconItem = {
  id: string;
  dir: string;
  name: string;
  variant: "default" | "small" | "fill" | "fillSmall";
  label: string;
  tags: string[];
  icon: LoadedIconFunction;
};

const variantLabels: Record<IconItem["variant"], string> = {
  default: "Default",
  small: "Small",
  fill: "Fill",
  fillSmall: "Fill Small",
};

// Load icon items only when the icons page is accessed
let iconItemsCache: IconItem[] | null = null;

async function loadIconItems(): Promise<IconItem[]> {
  if (iconItemsCache) {
    return iconItemsCache;
  }

  // Dynamically import both manifest and import map only when needed
  const [{ iconManifest }, { iconImportMap }] = await Promise.all([
    import("@nds-icons/icon-manifest"),
    import("@nds-icons/icon-import-map"),
  ]);

  const iconItems: IconItem[] = [];

  for (const group of iconManifest) {
    for (const variant of group.variants) {
      const icon =
        iconImportMap[group.dir]?.[
          variant as keyof (typeof iconImportMap)[typeof group.dir]
        ];
      if (icon !== undefined) {
        iconItems.push({
          id: `${group.dir}-${variant}`,
          dir: group.dir,
          name: group.name,
          variant: variant as IconItem["variant"],
          label: `${group.name} ${variantLabels[variant as IconItem["variant"]]}`,
          tags: Array.isArray(group.tags) ? [...group.tags] : [],
          icon,
        });
      }
    }
  }

  iconItemsCache = iconItems;
  return iconItems;
}

type ComponentItem = {
  id: string;
  name: string;
  snippet: string;
};

const COMPONENT_ITEMS: ComponentItem[] = componentsData.map((c) => ({
  id: c.slug,
  name: c.name,
  snippet: c.snippet,
}));

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useAtom(commandMenuOpenAtom);
  const [page, setPage] = useAtom(commandMenuPageAtom);
  const [, setCreateOpen] = useAtom(createPrototypeDialogOpenAtom);
  const { username: currentUsername } = useCurrentUsername();
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [copy] = useCopyToClipboard();
  const cmdKeyPressed = useRef(false);
  const [iconItems, setIconItems] = useState<IconItem[]>([]);
  const [iconsLoading, setIconsLoading] = useState(false);

  // Disable icon search in production to prevent bundling entire icon library
  const isProd = useIsProduction();
  const iconsEnabled = !isProd;

  useEffect(() => {
    if (open) {
      setSearch("");
      setPage((prev) =>
        prev === "icons" || prev === "components" ? prev : "root",
      );
    }
  }, [open, setPage]);

  // Load icons when the icons page is accessed (development only)
  useEffect(() => {
    if (
      iconsEnabled &&
      page === "icons" &&
      iconItems.length === 0 &&
      !iconsLoading
    ) {
      setIconsLoading(true);
      loadIconItems()
        .then((items) => {
          setIconItems(items);
          setIconsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to load icons:", error);
          setIconsLoading(false);
        });
    }
  }, [iconsEnabled, page, iconItems.length, iconsLoading]);

  // Track cmd key state
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey) {
        cmdKeyPressed.current = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.metaKey) {
        cmdKeyPressed.current = false;
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
        cmdKeyPressed.current = false;
      };
    }
  }, [open]);

  // Use static data in production, API in development
  const { data, error, isLoading } = useSWR(
    isProd ? null : "/api/prototypes",
    isProd ? null : fetchPrototypes,
  );

  // Use static data in production
  const prototypesData = isProd ? staticData.users : data;

  function goHome() {
    setOpen(false);
    setSearch("");
    if (cmdKeyPressed.current) {
      window.open("/", "_blank");
    } else {
      router.push("/");
    }
  }

  function openIconsMenu() {
    setPage("icons");
    setSearch("");
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }

  function openComponentsMenu() {
    setPage("components");
    setSearch("");
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }

  const prototypes = prototypesData
    ? (prototypesData as UserPrototypes[]).flatMap((user: UserPrototypes) =>
        user.prototypes.map((proto: Prototype) => ({
          ...proto,
          username: user.username,
          createdAt: new Date(proto.createdAt),
        })),
      )
    : [];

  function getPrototypeHandlers() {
    const handlers = new Map();
    prototypes.forEach((proto: Prototype & { username: string }) => {
      const key = `${proto.username}/${proto.slug}`;
      handlers.set(key, function () {
        setOpen(false);
        setSearch("");
        const url = `/${proto.username}/${proto.slug}`;
        if (cmdKeyPressed.current) {
          window.open(url, "_blank");
        } else {
          router.push(url);
        }
      });
    });
    return handlers;
  }

  const prototypeHandlers = getPrototypeHandlers();

  const filteredIconItems = useMemo(
    () =>
      iconItems.filter(
        (item) =>
          search.trim() === "" ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase()),
          ),
      ),
    [search, iconItems],
  );

  const filteredComponentItems = useMemo(
    () =>
      COMPONENT_ITEMS.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  const iconVirtualizer = useVirtualizer({
    count: page === "icons" ? filteredIconItems.length : 0,
    getScrollElement: () => listRef.current,
    estimateSize: () => 40,
    overscan: 8,
  });

  // Reset the scroll position whenever the icons page is entered or the search term changes
  useEffect(() => {
    if (page === "icons") {
      // Scroll container back to the top so the virtualizer can correctly calculate positions
      if (listRef.current) {
        listRef.current.scrollTop = 0;
      }
      // Also tell the virtualizer to jump to the first item
      try {
        // react-virtual exposes scrollToIndex – guard in case the API changes
        (
          iconVirtualizer as unknown as {
            scrollToIndex?: (index: number) => void;
          }
        ).scrollToIndex?.(0);
      } catch {
        /* noop – fallback is the manual scrollTop above */
      }
    }
  }, [search, page, iconVirtualizer]);

  useEffect(() => {
    if (open && page === "icons") {
      // Delay measurement to ensure the dialog and list are fully rendered
      const timeout = setTimeout(() => {
        iconVirtualizer.measure();
        // Optionally scroll to the top
        iconVirtualizer.scrollToIndex(0);
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [open, page, filteredIconItems.length, iconVirtualizer]);

  function getIconSnippet(dir: string, variant: IconItem["variant"]): string {
    const iconProp =
      variant === "default"
        ? `${dir}Icon`
        : variant === "small"
          ? `${dir}SmallIcon`
          : variant === "fill"
            ? `${dir}FillIcon`
            : `${dir}FillSmallIcon`;
    const sizeProp =
      variant === "small" || variant === "fillSmall" ? ' size="sm"' : "";
    return `<Icon icon={${iconProp}}${sizeProp} />`;
  }

  function handleIconSelect(item: IconItem) {
    copy(getIconSnippet(item.dir, item.variant));
    setOpen(false);
    setSearch("");
    setPage("root");
  }

  function handleComponentSelect(item: ComponentItem) {
    copy(item.snippet);
    setOpen(false);
    setSearch("");
    setPage("root");
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      (page === "icons" || page === "components") &&
      e.key === "Backspace" &&
      search === "" &&
      document.activeElement === inputRef.current
    ) {
      e.preventDefault();
      setPage("root");
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 dark:bg-black/60" />
        <Dialog.Content className="bg-primary dark:shadow-contrast fixed top-[15vh] left-1/2 z-50 w-full max-w-2xl -translate-x-1/2 overflow-hidden rounded-2xl p-0 ring-[0.5px] ring-black/10">
          <VisuallyHidden.Root>
            <Dialog.Title>Command Menu</Dialog.Title>
          </VisuallyHidden.Root>

          <Command
            className="w-full"
            label="Command Menu"
            shouldFilter={page !== "icons"}
          >
            {page && page !== "root" && (
              <div className="-mb-1 flex items-center gap-1 px-4 pt-4">
                <button
                  className="text-secondary bg-tertiary flex h-5 items-center justify-center rounded px-1.5 text-xs font-medium"
                  value="back"
                  onClick={() => setPage("root")}
                >
                  Index
                </button>
                <button
                  className="text-secondary bg-tertiary flex h-5 items-center justify-center rounded px-1.5 text-xs font-medium"
                  value="back"
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              </div>
            )}

            <Command.Input
              ref={inputRef}
              value={search}
              onValueChange={setSearch}
              className="border-primary w-full border-b px-5 py-4 text-base focus:ring-0 focus:outline-none"
              placeholder={
                page === "icons"
                  ? "Search icons..."
                  : page === "components"
                    ? "Search components..."
                    : "Search commands, prototypes..."
              }
              autoFocus
              onKeyDown={handleKeyDown}
            />
            <Command.List
              ref={listRef}
              className="relative max-h-[min(70vh,400px)] w-full flex-1 overflow-y-auto"
            >
              {(page !== "icons" || search.trim() !== "") && !iconsLoading && (
                <Command.Empty className="text-quaternary py-6 text-center text-base font-medium">
                  No results
                </Command.Empty>
              )}
              {iconsEnabled && page === "icons" && iconsLoading && (
                <Command.Empty className="text-quaternary py-6 text-center text-base font-medium">
                  Loading icons...
                </Command.Empty>
              )}
              <Fragment>
                {page === "root" && (
                  <>
                    <CommandGroup>
                      <CommandItem value="home" onSelect={goHome}>
                        <div className="flex items-center">
                          <div className="mr-2.5 flex h-5 w-5 items-center justify-center">
                            <Icon icon={homeIcon} />
                          </div>
                          <span className="font-medium">Home</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <KBD>⌘</KBD>
                          <KBD>⇧</KBD>
                          <KBD>H</KBD>
                        </div>
                      </CommandItem>
                      {iconsEnabled && (
                        <CommandItem value="icons" onSelect={openIconsMenu}>
                          <div className="flex items-center">
                            <div className="mr-2.5 flex h-5 w-5 items-center justify-center">
                              <Icon icon={pencilAndOutlineIcon} />
                            </div>
                            <span className="font-medium">Icons</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <KBD>⌘</KBD>
                            <KBD>⇧</KBD>
                            <KBD>I</KBD>
                          </div>
                        </CommandItem>
                      )}
                      <CommandItem
                        value="components"
                        onSelect={openComponentsMenu}
                      >
                        <div className="flex items-center">
                          <div className="mr-2.5 flex h-5 w-5 items-center justify-center">
                            <Icon icon={codeIcon} />
                          </div>
                          <span className="font-medium">Components</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <KBD>⌘</KBD>
                          <KBD>⇧</KBD>
                          <KBD>D</KBD>
                        </div>
                      </CommandItem>
                      <CommandItem
                        value="nds-colors"
                        onSelect={() => {
                          setOpen(false);
                          setSearch("");
                          if (cmdKeyPressed.current) {
                            window.open("/nds/colors", "_blank");
                          } else {
                            router.push("/nds/colors");
                          }
                        }}
                      >
                        <div className="flex items-center">
                          <div className="mr-2.5 flex h-5 w-5 items-center justify-center">
                            <Icon icon={paintPaletteSmallIcon} />
                          </div>
                          <span className="font-medium">Colors</span>
                        </div>
                      </CommandItem>
                      <CommandItem
                        value="nds-typography"
                        onSelect={() => {
                          setOpen(false);
                          setSearch("");
                          if (cmdKeyPressed.current) {
                            window.open("/nds/typography", "_blank");
                          } else {
                            router.push("/nds/typography");
                          }
                        }}
                      >
                        <div className="flex items-center">
                          <div className="mr-2.5 flex h-5 w-5 items-center justify-center">
                            <Icon icon={textFormatSmallIcon} />
                          </div>
                          <span className="font-medium">Typography</span>
                        </div>
                      </CommandItem>
                      {currentUsername && (
                        <CommandItem
                          value="new-prototype"
                          onSelect={() => {
                            setOpen(false);
                            setSearch("");
                            setCreateOpen(true);
                          }}
                        >
                          <div className="flex items-center">
                            <div className="mr-2.5 flex h-5 w-5 items-center justify-center">
                              <Icon icon={plusIcon} />
                            </div>
                            <span className="font-medium">New prototype</span>
                          </div>
                        </CommandItem>
                      )}
                    </CommandGroup>

                    {isLoading && !isProd ? (
                      <CommandGroup heading="Prototypes">
                        <Command.Empty>Loading prototypes...</Command.Empty>
                      </CommandGroup>
                    ) : error && !isProd ? (
                      <CommandGroup heading="Prototypes">
                        <Command.Empty>Unable to load prototypes</Command.Empty>
                      </CommandGroup>
                    ) : (
                      (search !== "" || prototypes.length > 0) && (
                        <CommandGroup heading="Prototypes">
                          {prototypes
                            .filter(
                              (proto: Prototype & { username: string }) =>
                                proto.title
                                  .toLowerCase()
                                  .includes(search.toLowerCase()) ||
                                proto.username
                                  .toLowerCase()
                                  .includes(search.toLowerCase()) ||
                                proto.slug
                                  .toLowerCase()
                                  .includes(search.toLowerCase()) ||
                                (proto.description ?? "")
                                  .toLowerCase()
                                  .includes(search.toLowerCase()),
                            )
                            .map((proto: Prototype & { username: string }) => (
                              <CommandItem
                                key={`${proto.username}/${proto.slug}`}
                                value={`${proto.title}-${proto.description}-${proto.username}-${proto.slug}`}
                                onSelect={prototypeHandlers.get(
                                  `${proto.username}/${proto.slug}`,
                                )}
                              >
                                <div className="flex items-center overflow-hidden select-none">
                                  <div className="min-w-0 flex-1">
                                    <span className="block truncate font-medium">
                                      {proto.title}
                                    </span>
                                  </div>
                                </div>
                                <span className="text-secondary bg-tertiary ml-2 flex-shrink-0 rounded px-1.5 py-0.5 font-mono text-xs">
                                  {proto.username}/{proto.slug}
                                </span>
                              </CommandItem>
                            ))}
                        </CommandGroup>
                      )
                    )}
                  </>
                )}

                {iconsEnabled &&
                  page === "icons" &&
                  !iconsLoading &&
                  iconItems.length > 0 && (
                    <>
                      <CommandGroup>
                        <div
                          style={{
                            height: iconVirtualizer.getTotalSize(),
                            position: "relative",
                          }}
                        >
                          {iconVirtualizer
                            .getVirtualItems()
                            .map((virtualRow) => {
                              const item = filteredIconItems[virtualRow.index];
                              return (
                                <div
                                  key={item.id}
                                  ref={iconVirtualizer.measureElement}
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    transform: `translateY(${virtualRow.start}px)`,
                                  }}
                                >
                                  <CommandItem
                                    value={item.id}
                                    onSelect={() => handleIconSelect(item)}
                                  >
                                    <div className="flex flex-1 items-center select-none">
                                      <div className="mr-2.5 flex h-5 w-5 items-center justify-center text-neutral-600 dark:text-neutral-400">
                                        <Icon
                                          icon={item.icon}
                                          size={
                                            item.variant === "default" ||
                                            item.variant === "fill"
                                              ? "default"
                                              : "sm"
                                          }
                                        />
                                      </div>
                                      <span className="flex flex-1 font-medium">
                                        {item.name}
                                      </span>
                                      <span className="text-tertiary ml-auto font-mono text-xs">
                                        {variantLabels[item.variant]
                                          .split(" ")
                                          .map((label) => (
                                            <span
                                              key={label}
                                              className="text-secondary bg-tertiary text-caption-sm ml-2 flex-shrink-0 rounded px-1.5 py-0.5 font-mono uppercase"
                                            >
                                              {label}
                                            </span>
                                          ))}
                                      </span>
                                    </div>
                                  </CommandItem>
                                </div>
                              );
                            })}
                        </div>
                      </CommandGroup>
                    </>
                  )}

                {page === "components" && (
                  <>
                    <CommandGroup>
                      {filteredComponentItems.map((item) => (
                        <CommandItem
                          key={item.id}
                          value={item.id}
                          onSelect={() => handleComponentSelect(item)}
                        >
                          <span className="flex-1 font-medium">
                            {item.name}
                          </span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </>
                )}
              </Fragment>
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function CommandItem({ className = "", ...props }) {
  return (
    <Command.Item
      className={[
        "text-primary hover:bg-secondary aria-selected:bg-secondary -mx-1 mb-px flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-base",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

function CommandGroup({
  heading,
  children,
}: {
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <Command.Group className="px-3 py-2">
      {heading && (
        <div className="text-secondary mb-3 px-2 text-base font-medium select-none">
          {heading}
        </div>
      )}
      {children}
    </Command.Group>
  );
}

function KBD({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="bg-tertiary text-secondary text-caption grid size-5 place-items-center items-center justify-center rounded px-1.5 font-sans leading-none">
      {children}
    </kbd>
  );
}
