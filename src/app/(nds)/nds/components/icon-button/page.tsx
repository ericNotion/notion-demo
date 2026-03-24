"use client";
import { IconButton } from "@/components/ui/icon-button";
import { Icon } from "@nds-icons";
import { homeFillIcon } from "@nds-icons/home/fill.icon";
import { Example } from "../components/Example";

export default function IconButtonPage() {
  const code = `<IconButton>
  <Icon icon={homeFillIcon} size="sm" />
</IconButton>`;
  return (
    <div className="flex flex-col">
      <Example code={code}>
        <IconButton>
          <Icon icon={homeFillIcon} size="sm" />
        </IconButton>
      </Example>
    </div>
  );
}
