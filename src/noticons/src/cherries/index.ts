import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cherriesIconGroup: IconGroup<"default"> = createIconGroup(
  "cherries",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
