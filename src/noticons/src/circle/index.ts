import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleIconGroup: IconGroup<"default"> = createIconGroup(
  "circle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
