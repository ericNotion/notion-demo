import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gearsIconGroup: IconGroup<"default"> = createIconGroup(
  "gears",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
