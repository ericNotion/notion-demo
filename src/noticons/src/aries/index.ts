import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const ariesIconGroup: IconGroup<"default"> = createIconGroup(
  "aries",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
