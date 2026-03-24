import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hammerIconGroup: IconGroup<"default"> = createIconGroup(
  "hammer",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
