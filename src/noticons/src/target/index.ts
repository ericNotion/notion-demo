import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const targetIconGroup: IconGroup<"default"> = createIconGroup(
  "target",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
