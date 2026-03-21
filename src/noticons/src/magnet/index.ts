import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const magnetIconGroup: IconGroup<"default"> = createIconGroup(
  "magnet",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
