import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const ornamentIconGroup: IconGroup<"default"> = createIconGroup(
  "ornament",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
