import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const infoAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "infoAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
