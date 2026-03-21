import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleSixEighthsIconGroup: IconGroup<"default"> = createIconGroup(
  "circleSixEighths",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
