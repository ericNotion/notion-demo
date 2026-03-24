import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const homeIconGroup: IconGroup<"default"> = createIconGroup(
  "home",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
