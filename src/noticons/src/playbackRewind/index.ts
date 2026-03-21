import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const playbackRewindIconGroup: IconGroup<"default"> = createIconGroup(
  "playbackRewind",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
