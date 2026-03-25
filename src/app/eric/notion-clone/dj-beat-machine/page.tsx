"use client";

import { BeatMachine } from "../components/beat-machine/BeatMachine";

export default function DJBeatMachinePage() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="dark" style={{ colorScheme: "dark" }}>
        <div className="min-h-screen bg-[#0a0a0a] py-12">
          <BeatMachine />
        </div>
      </div>
    </div>
  );
}
