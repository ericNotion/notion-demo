import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mosqueIconGroup: IconGroup<"default"> = createIconGroup(
  "mosque",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
