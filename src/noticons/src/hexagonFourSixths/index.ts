import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hexagonFourSixthsIconGroup: IconGroup<"default"> = createIconGroup(
  "hexagonFourSixths",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
