import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const heartBoxBowIconGroup: IconGroup<"default"> = createIconGroup(
  "heartBoxBow",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
