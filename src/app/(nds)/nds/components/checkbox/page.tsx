"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Example } from "../components/Example";

export default function CheckboxPage() {
  return (
    <div className="flex flex-col">
      <Example code={`<Checkbox label="Check me" />`}>
        <Checkbox label="Check me" />
      </Example>
    </div>
  );
}
