"use client";

import { Agentation } from "@/components/playground-kit/Agentation";
import { WhiteboardCanvas } from "../components/whiteboard/WhiteboardCanvas";
import { WhiteboardToolbar } from "../components/whiteboard/WhiteboardToolbar";
import { ZoomControls } from "../components/whiteboard/ZoomControls";

export default function WhiteboardPage() {
  return (
    <Agentation>
      <div className="relative w-full h-full">
        <WhiteboardCanvas />
        <WhiteboardToolbar />
        <ZoomControls />
      </div>
    </Agentation>
  );
}
