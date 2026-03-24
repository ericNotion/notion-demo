import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowUpIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowUp",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
