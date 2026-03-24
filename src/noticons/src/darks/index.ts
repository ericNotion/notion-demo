import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const darksIconGroup: IconGroup<"default"> = createIconGroup(
  "darks",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
