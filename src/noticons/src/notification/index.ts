import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const notificationIconGroup: IconGroup<"default"> = createIconGroup(
  "notification",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
