import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const anchorIconGroup: IconGroup<"default"> = createIconGroup(
  "anchor",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
