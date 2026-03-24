import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const wineIconGroup: IconGroup<"default"> = createIconGroup(
  "wine",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
