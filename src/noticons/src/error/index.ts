import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const errorIconGroup: IconGroup<"default"> = createIconGroup(
  "error",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
