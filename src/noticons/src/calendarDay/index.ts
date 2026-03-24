import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const calendarDayIconGroup: IconGroup<"default"> = createIconGroup(
  "calendarDay",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
