import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const squareCircleIconGroup: IconGroup<"default"> = createIconGroup(
  "squareCircle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
