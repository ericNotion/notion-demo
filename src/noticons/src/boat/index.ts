import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const boatIconGroup: IconGroup<"default"> = createIconGroup(
  "boat",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
