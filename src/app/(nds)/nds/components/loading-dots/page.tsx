"use client";
import { LoadingDots } from "@/components/ui/loading-dots";
import { Example } from "../components/Example";

export default function LoadingDotsPage() {
  return (
    <div className="flex flex-col">
      <Example code={`<LoadingDots />`}>
        <LoadingDots />
      </Example>
    </div>
  );
}
