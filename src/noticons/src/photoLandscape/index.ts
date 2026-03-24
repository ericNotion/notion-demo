import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const photoLandscapeIconGroup: IconGroup<"default"> = createIconGroup(
  "photoLandscape",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
