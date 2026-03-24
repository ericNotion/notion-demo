import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const starHalfIconGroup: IconGroup<"default"> = createIconGroup(
  "starHalf",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
