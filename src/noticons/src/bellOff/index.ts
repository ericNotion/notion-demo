import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bellOffIconGroup: IconGroup<"default"> = createIconGroup(
  "bellOff",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
