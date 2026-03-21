"use client";
import { Input, Textarea } from "@/components/ui/form-controls";
import { Example } from "../components/Example";

export default function FormControlsPage() {
  return (
    <div className="flex flex-col">
      <Example code={`<Input placeholder="Type" />`}>
        <Input placeholder="Type" />
      </Example>
      <Example code={`<Textarea placeholder="More" />`}>
        <Textarea placeholder="More" />
      </Example>
    </div>
  );
}
