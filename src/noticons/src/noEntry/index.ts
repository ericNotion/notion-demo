import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const noEntryIconGroup: IconGroup<"default"> = createIconGroup(
  "noEntry",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
