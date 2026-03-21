import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const babyBottleIconGroup: IconGroup<"default"> = createIconGroup(
  "babyBottle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
