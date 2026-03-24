import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const baseballCapIconGroup: IconGroup<"default"> = createIconGroup(
  "baseballCap",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
