import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const kindIconGroup: IconGroup<"default"> = createIconGroup(
  "kind",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
