"use client";

import { Agentation } from "@/components/playground-kit/Agentation";
import { DJBeatMachine } from "../components/dj-beat-machine/DJBeatMachine";

export default function Page() {
  return (
    <Agentation>
      <div className="mx-auto w-full max-w-5xl px-8 py-12">
        <DJBeatMachine />
      </div>
    </Agentation>
  );
}
