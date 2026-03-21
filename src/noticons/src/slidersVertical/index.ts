import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const slidersVerticalIconGroup: IconGroup<"default"> = createIconGroup(
  "slidersVertical",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
