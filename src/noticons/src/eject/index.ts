import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const ejectIconGroup: IconGroup<"default"> = createIconGroup(
  "eject",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
