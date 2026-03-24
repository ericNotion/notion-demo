import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const inboxIconGroup: IconGroup<"default"> = createIconGroup(
  "inbox",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
