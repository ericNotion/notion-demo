import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const starOfLifeIconGroup: IconGroup<"default"> = createIconGroup(
  "starOfLife",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
