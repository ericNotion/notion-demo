import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bookIconGroup: IconGroup<"default"> = createIconGroup(
  "book",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
