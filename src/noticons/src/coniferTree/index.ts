import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const coniferTreeIconGroup: IconGroup<"default"> = createIconGroup(
  "coniferTree",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
