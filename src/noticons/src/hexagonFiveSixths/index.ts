import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hexagonFiveSixthsIconGroup: IconGroup<"default"> = createIconGroup(
  "hexagonFiveSixths",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
