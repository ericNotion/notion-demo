import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fireIconGroup: IconGroup<"default"> = createIconGroup(
  "fire",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
