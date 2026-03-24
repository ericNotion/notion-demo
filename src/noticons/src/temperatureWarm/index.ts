import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const temperatureWarmIconGroup: IconGroup<"default"> = createIconGroup(
  "temperatureWarm",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
