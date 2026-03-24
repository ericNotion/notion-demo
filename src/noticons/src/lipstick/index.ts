import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const lipstickIconGroup: IconGroup<"default"> = createIconGroup(
  "lipstick",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
