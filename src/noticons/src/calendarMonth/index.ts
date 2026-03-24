import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const calendarMonthIconGroup: IconGroup<"default"> = createIconGroup(
  "calendarMonth",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
