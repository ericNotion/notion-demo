import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleFiveEighthsIconGroup: IconGroup<"default"> = createIconGroup(
  "circleFiveEighths",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
