import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const steeringWheelIconGroup: IconGroup<"default"> = createIconGroup(
  "steeringWheel",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
