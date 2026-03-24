import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const christmasTreeIconGroup: IconGroup<"default"> = createIconGroup(
  "christmasTree",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
