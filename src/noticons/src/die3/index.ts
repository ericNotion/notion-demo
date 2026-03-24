import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const die3IconGroup: IconGroup<"default"> = createIconGroup(
  "die3",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
