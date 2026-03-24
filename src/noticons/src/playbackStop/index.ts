import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const playbackStopIconGroup: IconGroup<"default"> = createIconGroup(
  "playbackStop",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
