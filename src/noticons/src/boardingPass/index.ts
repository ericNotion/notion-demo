import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const boardingPassIconGroup: IconGroup<"default"> = createIconGroup(
  "boardingPass",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
