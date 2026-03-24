import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const refrigeratorIconGroup: IconGroup<"default"> = createIconGroup(
  "refrigerator",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
