import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cursorButtonIconGroup: IconGroup<"default"> = createIconGroup(
  "cursorButton",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
