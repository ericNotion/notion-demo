import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cashIconGroup: IconGroup<"default"> = createIconGroup(
  "cash",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
