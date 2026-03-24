import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const die2IconGroup: IconGroup<"default"> = createIconGroup(
  "die2",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
