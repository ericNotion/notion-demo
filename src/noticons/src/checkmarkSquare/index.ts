import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const checkmarkSquareIconGroup: IconGroup<"default"> = createIconGroup(
  "checkmarkSquare",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
