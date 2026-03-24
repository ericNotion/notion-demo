import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const computerChipIconGroup: IconGroup<"default"> = createIconGroup(
  "computerChip",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
