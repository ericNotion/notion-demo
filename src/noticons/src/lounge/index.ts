import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const loungeIconGroup: IconGroup<"default"> = createIconGroup(
  "lounge",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
