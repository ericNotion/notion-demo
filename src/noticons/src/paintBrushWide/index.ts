import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const paintBrushWideIconGroup: IconGroup<"default"> = createIconGroup(
  "paintBrushWide",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
