import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mathematicsIconGroup: IconGroup<"default"> = createIconGroup(
  "mathematics",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
