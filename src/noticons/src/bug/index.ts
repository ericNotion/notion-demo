import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bugIconGroup: IconGroup<"default"> = createIconGroup(
  "bug",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
