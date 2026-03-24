import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const branchMergeIconGroup: IconGroup<"default"> = createIconGroup(
  "branchMerge",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
