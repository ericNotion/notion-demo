import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const rainIconGroup: IconGroup<"default"> = createIconGroup(
  "rain",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
