import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sunriseIconGroup: IconGroup<"default"> = createIconGroup(
  "sunrise",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
