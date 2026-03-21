import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const escalatorIconGroup: IconGroup<"default"> = createIconGroup(
  "escalator",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
