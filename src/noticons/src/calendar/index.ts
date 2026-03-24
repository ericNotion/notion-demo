import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const calendarIconGroup: IconGroup<"default"> = createIconGroup(
  "calendar",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
