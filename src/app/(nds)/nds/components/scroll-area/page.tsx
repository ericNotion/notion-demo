"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Example } from "../components/Example";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export default function ScrollAreaPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Vertical ScrollArea */}
      <Example
        code={`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag} className="text-sm">
        {tag}
        <Separator className="my-2" />
      </div>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
            {tags.map((tag) => (
              <div key={tag} className="text-sm">
                {tag}
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </Example>

      {/* Horizontal ScrollArea */}
      <Example
        code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md border bg-tertiary"
      >
        Item {i + 1}
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
      >
        <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
          <div className="flex w-max space-x-4 p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="bg-tertiary flex h-20 w-20 shrink-0 items-center justify-center rounded-md border"
              >
                Item {i + 1}
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Example>

      {/* Both Directions */}
      <Example
        code={`<ScrollArea className="h-72 w-72 rounded-md border">
  <div className="w-[400px] p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Content</h4>
    {Array.from({ length: 20 }).map((_, i) => (
      <p key={i} className="text-sm mb-2">
        This is line {i + 1} with some extra long content that extends beyond the container width.
      </p>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
  <ScrollBar orientation="vertical" />
</ScrollArea>`}
      >
        <ScrollArea className="h-72 w-72 rounded-md border">
          <div className="w-[400px] p-4">
            <h4 className="mb-4 text-sm leading-none font-medium">Content</h4>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="mb-2 text-sm">
                This is line {i + 1} with some extra long content that extends
                beyond the container width.
              </p>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </Example>
    </div>
  );
}
