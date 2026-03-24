import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const helicopterIconGroup: IconGroup<"default"> = createIconGroup(
  "helicopter",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
