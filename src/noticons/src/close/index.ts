import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const closeIconGroup: IconGroup<"default"> = createIconGroup(
  "close",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
