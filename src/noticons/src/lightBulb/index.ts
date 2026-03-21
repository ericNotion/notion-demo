import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const lightBulbIconGroup: IconGroup<"default"> = createIconGroup(
  "lightBulb",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
