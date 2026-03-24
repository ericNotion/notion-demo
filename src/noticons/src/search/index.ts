import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const searchIconGroup: IconGroup<"default"> = createIconGroup(
  "search",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
