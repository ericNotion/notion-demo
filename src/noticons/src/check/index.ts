import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const checkIconGroup: IconGroup<"default"> = createIconGroup(
  "check",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
