import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const handIconGroup: IconGroup<"default"> = createIconGroup(
  "hand",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
