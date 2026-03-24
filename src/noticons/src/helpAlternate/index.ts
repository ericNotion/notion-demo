import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const helpAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "helpAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
