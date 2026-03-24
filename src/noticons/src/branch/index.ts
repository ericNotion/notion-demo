import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const branchIconGroup: IconGroup<"default"> = createIconGroup(
  "branch",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
