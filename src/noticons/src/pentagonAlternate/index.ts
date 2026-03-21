import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pentagonAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "pentagonAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
