import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hexagonTwoSixthsIconGroup: IconGroup<"default"> = createIconGroup(
  "hexagonTwoSixths",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
