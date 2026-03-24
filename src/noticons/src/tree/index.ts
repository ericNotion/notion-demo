import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const treeIconGroup: IconGroup<"default"> = createIconGroup(
  "tree",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
