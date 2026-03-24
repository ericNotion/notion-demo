import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const squareIconGroup: IconGroup<"default"> = createIconGroup(
  "square",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
