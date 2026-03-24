import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fragileIconGroup: IconGroup<"default"> = createIconGroup(
  "fragile",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
