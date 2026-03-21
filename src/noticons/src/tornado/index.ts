import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tornadoIconGroup: IconGroup<"default"> = createIconGroup(
  "tornado",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
