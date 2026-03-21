import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const starIconGroup: IconGroup<"default"> = createIconGroup(
  "star",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
