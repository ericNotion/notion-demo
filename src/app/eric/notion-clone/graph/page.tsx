"use client";

import { Agentation } from "@/components/playground-kit";
import { pages } from "../data";
import { NodeGraph } from "./components/NodeGraph";

export default function GraphPage() {
  return (
    <>
      <div className="h-full w-full bg-primary">
        <NodeGraph pages={pages} />
      </div>
      <Agentation />
    </>
  );
}
