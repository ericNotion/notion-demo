import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const childIconGroup: IconGroup<"default"> = createIconGroup(
  "child",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
