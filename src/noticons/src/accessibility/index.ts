import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const accessibilityIconGroup: IconGroup<"default"> = createIconGroup(
  "accessibility",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
