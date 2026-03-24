import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowDownIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowDown",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
