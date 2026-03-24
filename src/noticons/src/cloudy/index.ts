import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cloudyIconGroup: IconGroup<"default"> = createIconGroup(
  "cloudy",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
