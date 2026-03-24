import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const die1IconGroup: IconGroup<"default"> = createIconGroup(
  "die1",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
