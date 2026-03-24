import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const paintBrushIconGroup: IconGroup<"default"> = createIconGroup(
  "paintBrush",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
