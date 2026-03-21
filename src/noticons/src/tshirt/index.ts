import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tshirtIconGroup: IconGroup<"default"> = createIconGroup(
  "tshirt",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
