import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shovelAndPailIconGroup: IconGroup<"default"> = createIconGroup(
  "shovelAndPail",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
