import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bugleIconGroup: IconGroup<"default"> = createIconGroup(
  "bugle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
