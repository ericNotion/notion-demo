import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cloudOffIconGroup: IconGroup<"default"> = createIconGroup(
  "cloudOff",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
