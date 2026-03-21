import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cityIconGroup: IconGroup<"default"> = createIconGroup(
  "city",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
