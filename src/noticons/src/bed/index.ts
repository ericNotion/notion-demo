import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bedIconGroup: IconGroup<"default"> = createIconGroup(
  "bed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
