import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const rowIconGroup: IconGroup<"default"> = createIconGroup(
  "row",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
