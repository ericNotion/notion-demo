import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bikiniIconGroup: IconGroup<"default"> = createIconGroup(
  "bikini",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
