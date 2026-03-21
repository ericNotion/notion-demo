import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const trumpetIconGroup: IconGroup<"default"> = createIconGroup(
  "trumpet",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
