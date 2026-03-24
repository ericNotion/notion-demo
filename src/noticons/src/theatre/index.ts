import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const theatreIconGroup: IconGroup<"default"> = createIconGroup(
  "theatre",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
