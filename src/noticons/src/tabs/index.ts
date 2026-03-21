import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tabsIconGroup: IconGroup<"default"> = createIconGroup(
  "tabs",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
