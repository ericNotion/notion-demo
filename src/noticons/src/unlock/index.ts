import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const unlockIconGroup: IconGroup<"default"> = createIconGroup(
  "unlock",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
