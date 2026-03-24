"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Example } from "../components/Example";

export default function AspectRatioPage() {
  return (
    <div className="flex flex-col">
      {/* 16:9 Aspect Ratio */}
      <Example
        code={`<AspectRatio ratio={16 / 9}>
  <img
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
    alt="Photo by Drew Beamer"
    className="rounded-md object-cover w-full h-full"
  />
</AspectRatio>`}
      >
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </Example>

      {/* 4:3 Aspect Ratio */}
      <Example
        code={`<AspectRatio ratio={4 / 3}>
  <div className="flex h-full w-full items-center justify-center rounded-md bg-tertiary">
    4:3 Ratio
  </div>
</AspectRatio>`}
      >
        <div className="w-[300px]">
          <AspectRatio ratio={4 / 3}>
            <div className="bg-tertiary flex h-full w-full items-center justify-center rounded-md">
              4:3 Ratio
            </div>
          </AspectRatio>
        </div>
      </Example>

      {/* 1:1 Square Aspect Ratio */}
      <Example
        code={`<AspectRatio ratio={1}>
  <div className="flex h-full w-full items-center justify-center rounded-md bg-tertiary">
    1:1 Square
  </div>
</AspectRatio>`}
      >
        <div className="w-[200px]">
          <AspectRatio ratio={1}>
            <div className="bg-tertiary flex h-full w-full items-center justify-center rounded-md">
              1:1 Square
            </div>
          </AspectRatio>
        </div>
      </Example>

      {/* 21:9 Ultrawide */}
      <Example
        code={`<AspectRatio ratio={21 / 9}>
  <div className="flex h-full w-full items-center justify-center rounded-md bg-tertiary">
    21:9 Ultrawide
  </div>
</AspectRatio>`}
      >
        <div className="w-[450px]">
          <AspectRatio ratio={21 / 9}>
            <div className="bg-tertiary flex h-full w-full items-center justify-center rounded-md">
              21:9 Ultrawide
            </div>
          </AspectRatio>
        </div>
      </Example>
    </div>
  );
}
