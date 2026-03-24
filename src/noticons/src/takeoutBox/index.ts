import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const takeoutBoxIconGroup: IconGroup<"default"> = createIconGroup(
  "takeoutBox",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
