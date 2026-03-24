"use client";

import { Agentation } from "@/components/playground-kit/Agentation";
import { BeatMachine } from "../components/beat-machine/BeatMachine";

export default function DJBeatMachinePage() {
  return (
    <Agentation>
      <div className="min-h-screen bg-primary">
        <div className="dark" style={{ colorScheme: "dark" }}>
          <div className="min-h-screen bg-[#0a0a0a] py-12">
            <BeatMachine />
          </div>
        </div>
      </div>
    </Agentation>
  );
}
