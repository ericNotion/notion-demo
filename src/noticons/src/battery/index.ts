import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const batteryIconGroup: IconGroup<"default"> = createIconGroup(
  "battery",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
