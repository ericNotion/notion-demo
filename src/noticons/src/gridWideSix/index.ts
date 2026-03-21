import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gridWideSixIconGroup: IconGroup<"default"> = createIconGroup(
  "gridWideSix",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
