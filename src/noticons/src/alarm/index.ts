import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const alarmIconGroup: IconGroup<"default"> = createIconGroup(
  "alarm",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
