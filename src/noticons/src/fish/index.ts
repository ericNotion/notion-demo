import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fishIconGroup: IconGroup<"default"> = createIconGroup(
  "fish",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
