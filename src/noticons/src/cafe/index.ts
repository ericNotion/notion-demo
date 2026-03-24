import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cafeIconGroup: IconGroup<"default"> = createIconGroup(
  "cafe",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
