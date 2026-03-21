import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const volcanoIconGroup: IconGroup<"default"> = createIconGroup(
  "volcano",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
