import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const filteredIconGroup: IconGroup<"default"> = createIconGroup(
  "filtered",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
