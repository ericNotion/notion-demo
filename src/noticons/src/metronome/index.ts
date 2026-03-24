import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const metronomeIconGroup: IconGroup<"default"> = createIconGroup(
  "metronome",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
