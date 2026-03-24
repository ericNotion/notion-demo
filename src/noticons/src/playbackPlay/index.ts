import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const playbackPlayIconGroup: IconGroup<"default"> = createIconGroup(
  "playbackPlay",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
