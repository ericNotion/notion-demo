import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const watchAnalogIconGroup: IconGroup<"default"> = createIconGroup(
  "watchAnalog",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
