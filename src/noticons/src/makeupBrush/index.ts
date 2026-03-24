import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const makeupBrushIconGroup: IconGroup<"default"> = createIconGroup(
  "makeupBrush",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
