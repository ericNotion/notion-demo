import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const strollerIconGroup: IconGroup<"default"> = createIconGroup(
  "stroller",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
