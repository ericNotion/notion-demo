import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const copyIconGroup: IconGroup<"default"> = createIconGroup(
  "copy",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
