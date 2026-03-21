import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const lungsIconGroup: IconGroup<"default"> = createIconGroup(
  "lungs",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
