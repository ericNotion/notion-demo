import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const coffeeIconGroup: IconGroup<"default"> = createIconGroup(
  "coffee",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
