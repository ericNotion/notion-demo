import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const beerBottleIconGroup: IconGroup<"default"> = createIconGroup(
  "beerBottle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
