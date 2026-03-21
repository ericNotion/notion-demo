import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const playbackPauseIconGroup: IconGroup<"default"> = createIconGroup(
  "playbackPause",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
