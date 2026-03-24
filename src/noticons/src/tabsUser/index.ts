import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tabsUserIconGroup: IconGroup<"default"> = createIconGroup(
  "tabsUser",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
