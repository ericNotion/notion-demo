import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const replyIconGroup: IconGroup<"default"> = createIconGroup(
  "reply",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
