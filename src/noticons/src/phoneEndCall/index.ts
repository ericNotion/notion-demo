import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const phoneEndCallIconGroup: IconGroup<"default"> = createIconGroup(
  "phoneEndCall",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
