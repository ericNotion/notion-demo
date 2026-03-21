import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowDownBasicIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowDownBasic",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
