import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cloverFourLeafIconGroup: IconGroup<"default"> = createIconGroup(
  "cloverFourLeaf",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
