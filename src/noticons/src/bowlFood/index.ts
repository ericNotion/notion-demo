import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bowlFoodIconGroup: IconGroup<"default"> = createIconGroup(
  "bowlFood",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
