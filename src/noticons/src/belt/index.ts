import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const beltIconGroup: IconGroup<"default"> = createIconGroup(
  "belt",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
