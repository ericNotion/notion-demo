import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const heartRateMonitorIconGroup: IconGroup<"default"> = createIconGroup(
  "heartRateMonitor",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
