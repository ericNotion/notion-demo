import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const templeIconGroup: IconGroup<"default"> = createIconGroup(
  "temple",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
