import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const menstrualPadIconGroup: IconGroup<"default"> = createIconGroup(
  "menstrualPad",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
