import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const toiletIconGroup: IconGroup<"default"> = createIconGroup(
  "toilet",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
