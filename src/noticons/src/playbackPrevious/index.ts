import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const playbackPreviousIconGroup: IconGroup<"default"> = createIconGroup(
  "playbackPrevious",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
