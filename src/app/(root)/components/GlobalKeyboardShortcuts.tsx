"use client";

import { usePreviewProductionMode } from "@/hooks/usePreviewProductionMode";
import { useSetAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";
import { toast } from "sonner";
import { commandMenuOpenAtom } from "../atoms/commandMenuOpenAtom";
import { commandMenuPageAtom } from "../atoms/commandMenuPageAtom";

export function GlobalKeyboardShortcuts() {
  const setOpen = useSetAtom(commandMenuOpenAtom);
  const setPage = useSetAtom(commandMenuPageAtom);
  const pathname = usePathname();
  const {
    enabled: previewProdEnabled,
    toggle: togglePreviewProd,
    canToggle: canTogglePreviewProd,
  } = usePreviewProductionMode();

  // Don't register global Cmd+K on ai-first-cmdk prototype page (it has its own local handler)
  const isAiFirstCmdkPage = pathname?.includes("/ai-first-cmdk");

  useHotkeys(
    "mod+k",
    (e) => {
      e.preventDefault();
      setOpen((prev: boolean) => !prev);
    },
    {
      enableOnContentEditable: true,
      enableOnFormTags: true,
      enabled: !isAiFirstCmdkPage,
    },
  );

  // Icons page shortcut - open command menu at Icons subpage
  useHotkeys(
    "mod+shift+i",
    (e) => {
      e.preventDefault();
      setOpen(true);
      setPage("icons");
    },
    {
      enableOnContentEditable: true,
      enableOnFormTags: true,
    },
  );

  // Components page shortcut
  useHotkeys(
    "mod+shift+d",
    (e) => {
      e.preventDefault();
      setOpen(true);
      setPage("components");
    },
    {
      enableOnContentEditable: true,
      enableOnFormTags: true,
    },
  );

  // Toggle preview production mode (dev only)
  useHotkeys(
    "mod+shift+o",
    (e) => {
      e.preventDefault();
      if (canTogglePreviewProd) {
        togglePreviewProd();
        toast(
          previewProdEnabled
            ? "Preview production mode disabled"
            : "Preview production mode enabled",
          {
            description: previewProdEnabled
              ? "Showing development UI"
              : "Simulating production environment",
          },
        );
      }
    },
    {
      enableOnContentEditable: true,
      enableOnFormTags: true,
      enabled: canTogglePreviewProd,
    },
  );

  // Command menu is handled in CommandMenuProvider with mod+k shortcut

  return null;
}
