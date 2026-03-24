import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const slidersHorizontalIconGroup: IconGroup<"default"> = createIconGroup(
  "slidersHorizontal",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
