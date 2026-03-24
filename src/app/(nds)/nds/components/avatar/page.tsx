"use client";
import { AvatarWithFallback } from "@/components/ui/avatar";
import { Example } from "../components/Example";

export default function AvatarPage() {
  const code = `<AvatarWithFallback
  src="/img/brian.jpg"
  fallback="JD"
/>`;
  return (
    <div className="flex flex-col">
      <Example code={code}>
        <AvatarWithFallback src="/img/brian.jpg" fallback="JD" />
      </Example>
    </div>
  );
}
