import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const carIconGroup: IconGroup<"default"> = createIconGroup(
  "car",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
