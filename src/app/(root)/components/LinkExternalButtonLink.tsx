"use client";

import { PlaygroundButton } from "@/components/playground-kit";
import { linkFillIcon } from "@/nds-icons/src/link/fill.icon";
import {
  linkExternalDialogOpenAtom,
  openLinkExternalDialog,
} from "@/root/atoms/linkExternalDialogOpenAtom";
import { Icon } from "@nds-icons";
import { useSetAtom } from "jotai";

export function LinkExternalButtonLink() {
  const setDialogState = useSetAtom(linkExternalDialogOpenAtom);
  return (
    <PlaygroundButton
      variant="tint"
      onClick={() => setDialogState(openLinkExternalDialog())}
    >
      <Icon icon={linkFillIcon} />
      Link
    </PlaygroundButton>
  );
}
