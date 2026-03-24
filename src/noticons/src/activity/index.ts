import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const activityIconGroup: IconGroup<"default"> = createIconGroup(
  "activity",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
