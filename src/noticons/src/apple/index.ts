import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const appleIconGroup: IconGroup<"default"> = createIconGroup(
  "apple",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
