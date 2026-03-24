import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const skirtIconGroup: IconGroup<"default"> = createIconGroup(
  "skirt",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
