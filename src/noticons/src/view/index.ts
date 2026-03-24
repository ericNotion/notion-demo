import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const viewIconGroup: IconGroup<"default"> = createIconGroup(
  "view",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
