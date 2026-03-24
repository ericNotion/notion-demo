"use client";
import { Textarea } from "@/components/ui/form-controls";
import { Example } from "../components/Example";

export default function TextareaPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Usage */}
      <Example code={`<Textarea placeholder="Type your message here." />`}>
        <Textarea placeholder="Type your message here." className="max-w-md" />
      </Example>

      {/* With Default Value */}
      <Example
        code={`<Textarea defaultValue="This textarea has default content that you can edit." />`}
      >
        <Textarea
          defaultValue="This textarea has default content that you can edit."
          className="max-w-md"
        />
      </Example>

      {/* Disabled */}
      <Example code={`<Textarea disabled placeholder="Disabled textarea" />`}>
        <Textarea
          disabled
          placeholder="Disabled textarea"
          className="max-w-md"
        />
      </Example>

      {/* Custom Rows */}
      <Example
        code={`<Textarea placeholder="This textarea has 6 rows" rows={6} />`}
      >
        <Textarea
          placeholder="This textarea has 6 rows"
          rows={6}
          className="max-w-md"
        />
      </Example>

      {/* With Label */}
      <Example
        code={`<div className="flex flex-col gap-1.5">
  <label htmlFor="message" className="text-sm font-medium">
    Your Message
  </label>
  <Textarea
    id="message"
    placeholder="Write your message here..."
  />
</div>`}
      >
        <div className="flex max-w-md flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium">
            Your Message
          </label>
          <Textarea id="message" placeholder="Write your message here..." />
        </div>
      </Example>

      {/* With Character Count */}
      <Example
        code={`<div className="flex flex-col gap-1.5">
  <Textarea
    placeholder="Write your bio"
    maxLength={200}
  />
  <p className="text-muted-foreground text-xs">
    Max 200 characters
  </p>
</div>`}
      >
        <div className="flex max-w-md flex-col gap-1.5">
          <Textarea placeholder="Write your bio" maxLength={200} />
          <p className="text-muted-foreground text-xs">Max 200 characters</p>
        </div>
      </Example>
    </div>
  );
}
