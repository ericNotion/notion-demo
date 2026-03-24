import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "circleAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
