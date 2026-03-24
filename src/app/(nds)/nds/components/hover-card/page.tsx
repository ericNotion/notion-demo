"use client";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent } from "@/components/ui/hover-card";
import { Example } from "../components/Example";

export default function HoverCardPage() {
  const code = `<HoverCard trigger={<Button>Hover</Button>}>
  <HoverCardContent className="p-2">
    Info
  </HoverCardContent>
</HoverCard>`;
  return (
    <div className="flex flex-col">
      <Example code={code}>
        <HoverCard trigger={<Button>Hover</Button>}>
          <HoverCardContent className="p-2">Info</HoverCardContent>
        </HoverCard>
      </Example>
    </div>
  );
}
