"use client";
import { Separator } from "@/components/ui/separator";
import { Example } from "../components/Example";

export default function SeparatorPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Horizontal */}
      <Example code={`<Separator />`}>
        <div className="w-full max-w-md">
          <div className="space-y-1">
            <h4 className="text-sm leading-none font-medium">
              Radix Primitives
            </h4>
            <p className="text-muted-foreground text-sm">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="text-muted-foreground flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </Example>

      {/* Horizontal */}
      <Example
        code={`<div>
  <p>Content above</p>
  <Separator className="my-4" />
  <p>Content below</p>
</div>`}
      >
        <div className="w-full max-w-md">
          <p className="text-sm">Content above</p>
          <Separator className="my-4" />
          <p className="text-sm">Content below</p>
        </div>
      </Example>

      {/* Vertical */}
      <Example
        code={`<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
  <Separator orientation="vertical" />
  <div>Item 3</div>
</div>`}
      >
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Item 1</div>
          <Separator orientation="vertical" />
          <div>Item 2</div>
          <Separator orientation="vertical" />
          <div>Item 3</div>
        </div>
      </Example>

      {/* Custom Styling */}
      <Example
        code={`<Separator className="bg-blue-500" />
<Separator className="bg-red-500" />
<Separator className="bg-green-500" />`}
      >
        <div className="flex w-full max-w-md flex-col gap-4">
          <Separator className="bg-blue-500" />
          <Separator className="bg-red-500" />
          <Separator className="bg-green-500" />
        </div>
      </Example>
    </div>
  );
}
