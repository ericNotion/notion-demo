import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const lockIconGroup: IconGroup<"default"> = createIconGroup(
  "lock",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
