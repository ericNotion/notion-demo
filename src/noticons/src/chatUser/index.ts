import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chatUserIconGroup: IconGroup<"default"> = createIconGroup(
  "chatUser",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
