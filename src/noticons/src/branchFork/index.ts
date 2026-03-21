import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const branchForkIconGroup: IconGroup<"default"> = createIconGroup(
  "branchFork",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
