import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hexagonAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "hexagonAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
