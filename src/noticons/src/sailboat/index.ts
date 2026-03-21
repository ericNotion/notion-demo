import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sailboatIconGroup: IconGroup<"default"> = createIconGroup(
  "sailboat",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
