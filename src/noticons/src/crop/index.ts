import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cropIconGroup: IconGroup<"default"> = createIconGroup(
  "crop",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
