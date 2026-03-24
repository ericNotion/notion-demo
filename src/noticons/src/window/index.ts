import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const windowIconGroup: IconGroup<"default"> = createIconGroup(
  "window",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
