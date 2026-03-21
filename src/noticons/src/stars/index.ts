import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const starsIconGroup: IconGroup<"default"> = createIconGroup(
  "stars",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
