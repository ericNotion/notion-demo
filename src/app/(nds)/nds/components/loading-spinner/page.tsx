"use client";
import { LoadingSpinner } from "@/components/ui/spinner";
import { Example } from "../components/Example";

export default function LoadingSpinnerPage() {
  return (
    <div className="flex flex-col">
      <Example code={`<LoadingSpinner />`}>
        <LoadingSpinner />
      </Example>
    </div>
  );
}
