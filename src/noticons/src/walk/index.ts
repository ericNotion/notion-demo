import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const walkIconGroup: IconGroup<"default"> = createIconGroup(
  "walk",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
