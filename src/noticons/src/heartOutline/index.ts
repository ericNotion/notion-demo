import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const heartOutlineIconGroup: IconGroup<"default"> = createIconGroup(
  "heartOutline",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
