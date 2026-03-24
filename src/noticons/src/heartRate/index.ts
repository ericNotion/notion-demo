import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const heartRateIconGroup: IconGroup<"default"> = createIconGroup(
  "heartRate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
