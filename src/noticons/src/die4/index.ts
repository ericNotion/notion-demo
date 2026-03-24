import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const die4IconGroup: IconGroup<"default"> = createIconGroup(
  "die4",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
