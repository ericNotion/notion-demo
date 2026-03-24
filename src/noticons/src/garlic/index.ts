import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const garlicIconGroup: IconGroup<"default"> = createIconGroup(
  "garlic",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
