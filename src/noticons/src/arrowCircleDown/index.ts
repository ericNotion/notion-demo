import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowCircleDownIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowCircleDown",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
