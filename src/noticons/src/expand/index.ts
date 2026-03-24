import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const expandIconGroup: IconGroup<"default"> = createIconGroup(
  "expand",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
