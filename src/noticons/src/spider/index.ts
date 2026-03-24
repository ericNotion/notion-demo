import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const spiderIconGroup: IconGroup<"default"> = createIconGroup(
  "spider",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
