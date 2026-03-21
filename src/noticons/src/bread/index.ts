import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const breadIconGroup: IconGroup<"default"> = createIconGroup(
  "bread",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
