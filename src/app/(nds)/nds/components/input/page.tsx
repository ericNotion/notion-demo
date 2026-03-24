"use client";
import { Input } from "@/components/ui/form-controls";
import { Example } from "../components/Example";

export default function InputPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Usage */}
      <Example code={`<Input placeholder="Enter your email" />`}>
        <Input placeholder="Enter your email" className="max-w-sm" />
      </Example>

      {/* With Type */}
      <Example
        code={`<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />`}
      >
        <div className="flex max-w-sm flex-col gap-3">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Number" />
        </div>
      </Example>

      {/* File Input */}
      <Example code={`<Input type="file" />`}>
        <Input type="file" className="max-w-sm" />
      </Example>

      {/* Disabled */}
      <Example code={`<Input disabled placeholder="Disabled input" />`}>
        <Input disabled placeholder="Disabled input" className="max-w-sm" />
      </Example>

      {/* With Default Value */}
      <Example code={`<Input defaultValue="Default text" />`}>
        <Input defaultValue="Default text" className="max-w-sm" />
      </Example>

      {/* Full Width */}
      <Example
        code={`<Input placeholder="Full width input" className="w-full" />`}
      >
        <Input placeholder="Full width input" className="w-full" />
      </Example>

      {/* With Label (manual) */}
      <Example
        code={`<div className="flex flex-col gap-1.5">
  <label htmlFor="email" className="text-sm font-medium">
    Email
  </label>
  <Input id="email" type="email" placeholder="name@example.com" />
</div>`}
      >
        <div className="flex max-w-sm flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
      </Example>
    </div>
  );
}
