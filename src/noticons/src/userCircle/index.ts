import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const userCircleIconGroup: IconGroup<"default"> = createIconGroup(
  "userCircle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
