import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const meetingIconGroup: IconGroup<"default"> = createIconGroup(
  "meeting",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
