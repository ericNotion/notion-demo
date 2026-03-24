"use client";
import { Switch } from "@/components/ui/switch";
import { Example } from "../components/Example";

export default function SwitchPage() {
  return (
    <div className="flex flex-col">
      <Example code={`<Switch />`}>
        <Switch />
      </Example>
    </div>
  );
}
