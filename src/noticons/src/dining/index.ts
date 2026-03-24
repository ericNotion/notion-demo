import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const diningIconGroup: IconGroup<"default"> = createIconGroup(
  "dining",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
