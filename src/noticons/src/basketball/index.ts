import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const basketballIconGroup: IconGroup<"default"> = createIconGroup(
  "basketball",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
