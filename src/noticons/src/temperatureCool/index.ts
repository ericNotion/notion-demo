import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const temperatureCoolIconGroup: IconGroup<"default"> = createIconGroup(
  "temperatureCool",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
