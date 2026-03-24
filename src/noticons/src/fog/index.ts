import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fogIconGroup: IconGroup<"default"> = createIconGroup(
  "fog",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
