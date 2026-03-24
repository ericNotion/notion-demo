import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const windIconGroup: IconGroup<"default"> = createIconGroup(
  "wind",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
