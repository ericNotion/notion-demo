import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const batteryChargedIconGroup: IconGroup<"default"> = createIconGroup(
  "batteryCharged",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
