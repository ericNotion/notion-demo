import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shareIconGroup: IconGroup<"default"> = createIconGroup(
  "share",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
