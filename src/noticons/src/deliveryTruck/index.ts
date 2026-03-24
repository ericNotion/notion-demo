import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const deliveryTruckIconGroup: IconGroup<"default"> = createIconGroup(
  "deliveryTruck",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
