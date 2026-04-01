"use client";

import { WhiteboardCanvas } from "../components/whiteboard/WhiteboardCanvas";
import { WhiteboardToolbar } from "../components/whiteboard/WhiteboardToolbar";
import { ZoomControls } from "../components/whiteboard/ZoomControls";

export default function WhiteboardPage() {
  return (
    <div className="relative w-full h-full">
      <WhiteboardCanvas />
      <WhiteboardToolbar />
      <ZoomControls />
    </div>
  );
}
