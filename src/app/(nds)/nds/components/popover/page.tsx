"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Example } from "../components/Example";

export default function PopoverPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Usage */}
      <Example
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Place content for the popover here.</p>
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">Place content for the popover here.</p>
          </PopoverContent>
        </Popover>
      </Example>

      {/* With Form Content */}
      <Example
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Settings</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <label>Width</label>
          <input className="col-span-2 h-8" defaultValue="100%" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <label>Height</label>
          <input className="col-span-2 h-8" defaultValue="25px" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Settings</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">Dimensions</h4>
                <p className="text-muted-foreground text-sm">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-sm">Width</label>
                  <input
                    className="bg-secondary col-span-2 h-8 rounded border px-2 text-sm"
                    defaultValue="100%"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-sm">Height</label>
                  <input
                    className="bg-secondary col-span-2 h-8 rounded border px-2 text-sm"
                    defaultValue="25px"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </Example>

      {/* With Close Button */}
      <Example
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Info</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="flex flex-col gap-2">
      <p className="text-sm">This is some helpful information.</p>
      <PopoverClose asChild>
        <Button size="sm">Got it</Button>
      </PopoverClose>
    </div>
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Info</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-2">
              <p className="text-sm">This is some helpful information.</p>
              <PopoverClose asChild>
                <Button size="sm">Got it</Button>
              </PopoverClose>
            </div>
          </PopoverContent>
        </Popover>
      </Example>

      {/* Different Alignments */}
      <Example
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Align Start</Button>
  </PopoverTrigger>
  <PopoverContent align="start">
    <p>Aligned to start</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Align End</Button>
  </PopoverTrigger>
  <PopoverContent align="end">
    <p>Aligned to end</p>
  </PopoverContent>
</Popover>`}
      >
        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Align Start</Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <p className="text-sm">Aligned to start</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Align End</Button>
            </PopoverTrigger>
            <PopoverContent align="end">
              <p className="text-sm">Aligned to end</p>
            </PopoverContent>
          </Popover>
        </div>
      </Example>
    </div>
  );
}
