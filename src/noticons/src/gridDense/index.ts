import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gridDenseIconGroup: IconGroup<"default"> = createIconGroup(
  "gridDense",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
