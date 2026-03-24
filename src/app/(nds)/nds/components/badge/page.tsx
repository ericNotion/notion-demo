"use client";
import { Badge } from "@/components/ui/badge";
import { Example } from "../components/Example";

export default function BadgePage() {
  return (
    <div className="flex flex-col">
      <Example code={`<Badge>Badge</Badge>`}>
        <Badge>Badge</Badge>
      </Example>
      <Example
        code={`<Badge variant="secondary">
  Badge
</Badge>`}
      >
        <Badge variant="secondary">Badge</Badge>
      </Example>
      <Example
        code={`<Badge variant="outline">
  Badge
</Badge>`}
      >
        <Badge variant="outline">Badge</Badge>
      </Example>
    </div>
  );
}
