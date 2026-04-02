"use client";

import { Agentation } from "@/components/playground-kit";
import { Whiteboard } from "../components/whiteboard/Whiteboard";

export default function WhiteboardPage() {
  return (
    <Agentation>
      <div className="w-full h-[calc(100vh-60px)]">
        <Whiteboard />
      </div>
    </Agentation>
  );
}
