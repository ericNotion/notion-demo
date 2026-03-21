import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const timelineIconGroup: IconGroup<"default"> = createIconGroup(
  "timeline",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
