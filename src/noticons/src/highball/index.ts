import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const highballIconGroup: IconGroup<"default"> = createIconGroup(
  "highball",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
