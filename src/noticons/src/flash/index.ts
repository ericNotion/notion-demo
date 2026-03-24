import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const flashIconGroup: IconGroup<"default"> = createIconGroup(
  "flash",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
