import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bellNotificationIconGroup: IconGroup<"default"> = createIconGroup(
  "bellNotification",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
