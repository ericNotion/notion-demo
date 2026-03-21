import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sodaBottleIconGroup: IconGroup<"default"> = createIconGroup(
  "sodaBottle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
