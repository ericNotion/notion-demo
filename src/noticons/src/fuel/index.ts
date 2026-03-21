import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fuelIconGroup: IconGroup<"default"> = createIconGroup(
  "fuel",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
