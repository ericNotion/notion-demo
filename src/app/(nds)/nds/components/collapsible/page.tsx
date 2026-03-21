"use client";
import { Button } from "@/components/ui/button";
import { Collapsible } from "@/components/ui/collapsible-animated";
import { useState } from "react";
import { Example } from "../components/Example";

export default function CollapsiblePage() {
  const [expanded, setExpanded] = useState(true);
  const code = `<Button onClick={() => setExpanded(!expanded)}>Toggle</Button>
<Collapsible expanded={expanded}>
  <div className="p-4 bg-secondary">Content</div>
</Collapsible>`;
  return (
    <div className="flex flex-col">
      <Example code={code}>
        <div className="w-full">
          <Button onClick={() => setExpanded(!expanded)}>Toggle</Button>
          <Collapsible expanded={expanded}>
            <div className="bg-secondary p-4">Content</div>
          </Collapsible>
        </div>
      </Example>
    </div>
  );
}
