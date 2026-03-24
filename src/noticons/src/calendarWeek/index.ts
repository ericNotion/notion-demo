import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const calendarWeekIconGroup: IconGroup<"default"> = createIconGroup(
  "calendarWeek",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
