import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const unlockKeyholeIconGroup: IconGroup<"default"> = createIconGroup(
  "unlockKeyhole",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
