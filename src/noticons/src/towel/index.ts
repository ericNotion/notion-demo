import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const towelIconGroup: IconGroup<"default"> = createIconGroup(
  "towel",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
