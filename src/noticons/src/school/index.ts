import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const schoolIconGroup: IconGroup<"default"> = createIconGroup(
  "school",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
