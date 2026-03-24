import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const conversationIconGroup: IconGroup<"default"> = createIconGroup(
  "conversation",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
