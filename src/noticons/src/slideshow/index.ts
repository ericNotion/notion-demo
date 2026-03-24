import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const slideshowIconGroup: IconGroup<"default"> = createIconGroup(
  "slideshow",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
