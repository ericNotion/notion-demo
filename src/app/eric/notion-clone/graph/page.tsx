"use client";

import { Agentation } from "@/components/playground-kit";
import { GraphView } from "../components/GraphView";
import { pages } from "../data";

export default function GraphPage() {
  return (
    <Agentation>
      <div className="h-screen w-full">
        <GraphView pages={pages} />
      </div>
    </Agentation>
  );
}
