import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const slideIconGroup: IconGroup<"default"> = createIconGroup(
  "slide",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
