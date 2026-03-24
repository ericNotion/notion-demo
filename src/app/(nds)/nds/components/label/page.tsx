"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/form-controls";
import { Label } from "@/components/ui/label";
import { Example } from "../components/Example";

export default function LabelPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Label */}
      <Example code={`<Label>Email</Label>`}>
        <Label>Email</Label>
      </Example>

      {/* Label with Input */}
      <Example
        code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </Example>

      {/* Label with Checkbox */}
      <Example
        code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </Example>

      {/* Disabled Label */}
      <Example
        code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="disabled" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Disabled Input
  </Label>
  <Input type="text" id="disabled" disabled placeholder="Disabled" />
</div>`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="disabled"
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled Input
          </Label>
          <Input type="text" id="disabled" disabled placeholder="Disabled" />
        </div>
      </Example>
    </div>
  );
}
