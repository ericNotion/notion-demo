import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleOneEighthIconGroup: IconGroup<"default"> = createIconGroup(
  "circleOneEighth",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
