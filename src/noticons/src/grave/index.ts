import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const graveIconGroup: IconGroup<"default"> = createIconGroup(
  "grave",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
