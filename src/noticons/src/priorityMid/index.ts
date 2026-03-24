import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const priorityMidIconGroup: IconGroup<"default"> = createIconGroup(
  "priorityMid",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
