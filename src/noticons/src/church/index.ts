import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const churchIconGroup: IconGroup<"default"> = createIconGroup(
  "church",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
