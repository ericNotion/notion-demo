import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const upwardIconGroup: IconGroup<"default"> = createIconGroup(
  "upward",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
