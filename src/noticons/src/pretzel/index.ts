import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pretzelIconGroup: IconGroup<"default"> = createIconGroup(
  "pretzel",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
