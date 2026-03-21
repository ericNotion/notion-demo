"use client";

import { PlaygroundButton } from "@/components/playground-kit/button";
import { Icon } from "@nds-icons";
import { arrowChevronSingleLeftIcon } from "@nds-icons/arrowChevronSingleLeft/default.icon";
import Link from "next/link";

export function BackToGuidesLink() {
  return (
    <PlaygroundButton variant="ghost" asChild className="-ml-3 self-start">
      <Link href="/guides">
        <Icon icon={arrowChevronSingleLeftIcon} weight="bold" />
        <span>Back</span>
      </Link>
    </PlaygroundButton>
  );
}
