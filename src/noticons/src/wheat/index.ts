import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const wheatIconGroup: IconGroup<"default"> = createIconGroup(
  "wheat",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
