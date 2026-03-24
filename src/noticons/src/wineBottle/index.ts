import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const wineBottleIconGroup: IconGroup<"default"> = createIconGroup(
  "wineBottle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
