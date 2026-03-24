import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mushroomIconGroup: IconGroup<"default"> = createIconGroup(
  "mushroom",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
