import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cowIconGroup: IconGroup<"default"> = createIconGroup(
  "cow",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
