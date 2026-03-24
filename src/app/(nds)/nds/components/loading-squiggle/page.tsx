"use client";
import { LoadingSquiggle } from "@/components/ui/loading-squiggle";
import { Example } from "../components/Example";

export default function LoadingSquigglePage() {
  return (
    <div className="flex flex-col">
      <Example code={`<LoadingSquiggle />`}>
        <LoadingSquiggle />
      </Example>
      <Example code={`<LoadingSquiggle width={48} height={32} />`}>
        <LoadingSquiggle width={48} height={32} />
      </Example>
      <Example
        code={`<LoadingSquiggle strokeWidth={2.5} strokeColor="#6366f1" />`}
      >
        <LoadingSquiggle strokeWidth={2.5} strokeColor="#6366f1" />
      </Example>
    </div>
  );
}
