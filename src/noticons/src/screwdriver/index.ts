import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const screwdriverIconGroup: IconGroup<"default"> = createIconGroup(
  "screwdriver",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
