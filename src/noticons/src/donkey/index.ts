import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const donkeyIconGroup: IconGroup<"default"> = createIconGroup(
  "donkey",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
