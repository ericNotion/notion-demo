"use client";

import { PlaygroundButton } from "@/components/playground-kit";
import { plusFillIcon } from "@/nds-icons/src/plus/fill.icon";
import { createPrototypeDialogOpenAtom } from "@/root/atoms/createPrototypeDialogOpenAtom";
import { Icon } from "@nds-icons";
import { useSetAtom } from "jotai";

export function CreatePrototypeButtonLink() {
  const setOpen = useSetAtom(createPrototypeDialogOpenAtom);
  return (
    <PlaygroundButton
      variant="primary"
      className="bg-black fill-white dark:bg-white dark:fill-black dark:text-black"
      onClick={() => setOpen(true)}
    >
      <Icon icon={plusFillIcon} weight="bold" color="inherit" />
      New
    </PlaygroundButton>
  );
}
