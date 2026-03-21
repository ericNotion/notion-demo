import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const skateboardIconGroup: IconGroup<"default"> = createIconGroup(
  "skateboard",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
