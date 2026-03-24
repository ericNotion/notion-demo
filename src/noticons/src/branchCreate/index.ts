import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const branchCreateIconGroup: IconGroup<"default"> = createIconGroup(
  "branchCreate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
