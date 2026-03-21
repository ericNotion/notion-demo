import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const scrubBrushIconGroup: IconGroup<"default"> = createIconGroup(
  "scrubBrush",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
