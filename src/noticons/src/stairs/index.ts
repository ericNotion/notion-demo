import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const stairsIconGroup: IconGroup<"default"> = createIconGroup(
  "stairs",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
