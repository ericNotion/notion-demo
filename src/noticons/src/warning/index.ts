import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const warningIconGroup: IconGroup<"default"> = createIconGroup(
  "warning",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
