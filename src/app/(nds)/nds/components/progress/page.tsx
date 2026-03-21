"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { Example } from "../components/Example";

function AnimatedProgress() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}

export default function ProgressPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Progress */}
      <Example code={`<Progress value={33} />`}>
        <Progress value={33} className="w-[60%]" />
      </Example>

      {/* Different Values */}
      <Example
        code={`<div className="space-y-4">
  <Progress value={0} />
  <Progress value={25} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>`}
      >
        <div className="w-[60%] space-y-4">
          <Progress value={0} />
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </Example>

      {/* Animated Progress */}
      <Example
        code={`const [progress, setProgress] = useState(13)

useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500)
  return () => clearTimeout(timer)
}, [])

<Progress value={progress} />`}
      >
        <AnimatedProgress />
      </Example>

      {/* Custom Styling */}
      <Example
        code={`<Progress value={60} className="h-2" />
<Progress value={60} className="h-4" />
<Progress value={60} className="h-6" />`}
      >
        <div className="w-[60%] space-y-4">
          <Progress value={60} className="h-2" />
          <Progress value={60} className="h-4" />
          <Progress value={60} className="h-6" />
        </div>
      </Example>
    </div>
  );
}
