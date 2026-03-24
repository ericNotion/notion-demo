import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const playbackNextIconGroup: IconGroup<"default"> = createIconGroup(
  "playbackNext",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
