import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const replyAllIconGroup: IconGroup<"default"> = createIconGroup(
  "replyAll",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
