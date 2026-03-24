import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowDownLineIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowDownLine",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
