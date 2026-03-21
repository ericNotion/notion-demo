import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const uploadIconGroup: IconGroup<"default"> = createIconGroup(
  "upload",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
