"use client";
import { Button } from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";
import { Example } from "../components/Example";

export default function TooltipPage() {
  const code = `<Tooltip content="Info">
  <Button>Hover</Button>
</Tooltip>`;
  return (
    <div className="flex flex-col">
      <Example code={code}>
        <Tooltip content="Info">
          <Button>Hover</Button>
        </Tooltip>
      </Example>
    </div>
  );
}
