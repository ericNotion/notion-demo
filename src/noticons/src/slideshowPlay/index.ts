import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const slideshowPlayIconGroup: IconGroup<"default"> = createIconGroup(
  "slideshowPlay",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
