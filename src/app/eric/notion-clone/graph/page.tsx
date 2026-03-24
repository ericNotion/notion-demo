"use client";

import { Agentation } from "@/components/playground-kit";
import { NodeDiagram } from "../components/NodeDiagram";

export default function GraphPage() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "calc(100vh - 100px)" }}>
      <Agentation>
        <NodeDiagram />
      </Agentation>
    </div>
  );
}
