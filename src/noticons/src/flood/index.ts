import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const floodIconGroup: IconGroup<"default"> = createIconGroup(
  "flood",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
