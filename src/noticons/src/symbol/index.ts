import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const symbolIconGroup: IconGroup<"default"> = createIconGroup(
  "symbol",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
