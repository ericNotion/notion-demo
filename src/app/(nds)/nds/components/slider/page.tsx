"use client";
import { Slider } from "@/components/ui/slider";
import { Example } from "../components/Example";

export default function SliderPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Slider */}
      <Example code={`<Slider defaultValue={[50]} max={100} step={1} />`}>
        <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
      </Example>

      {/* With Default Value */}
      <Example code={`<Slider defaultValue={[33]} max={100} step={1} />`}>
        <Slider defaultValue={[33]} max={100} step={1} className="w-[60%]" />
      </Example>

      {/* Multiple Values (Range) */}
      <Example code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}>
        <Slider
          defaultValue={[25, 75]}
          max={100}
          step={1}
          className="w-[60%]"
        />
      </Example>

      {/* Step Size */}
      <Example code={`<Slider defaultValue={[50]} max={100} step={10} />`}>
        <Slider defaultValue={[50]} max={100} step={10} className="w-[60%]" />
      </Example>

      {/* Disabled */}
      <Example code={`<Slider defaultValue={[50]} max={100} disabled />`}>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          disabled
          className="w-[60%]"
        />
      </Example>

      {/* Small Range */}
      <Example code={`<Slider defaultValue={[5]} max={10} step={1} />`}>
        <Slider defaultValue={[5]} max={10} step={1} className="w-[60%]" />
      </Example>
    </div>
  );
}
