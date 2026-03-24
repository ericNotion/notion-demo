import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const volumeOffIconGroup: IconGroup<"default"> = createIconGroup(
  "volumeOff",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
