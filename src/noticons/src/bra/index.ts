import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const braIconGroup: IconGroup<"default"> = createIconGroup(
  "bra",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
