import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const priorityLowIconGroup: IconGroup<"default"> = createIconGroup(
  "priorityLow",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
