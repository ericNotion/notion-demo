import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cactusIconGroup: IconGroup<"default"> = createIconGroup(
  "cactus",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
