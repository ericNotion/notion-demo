import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const noteHalfIconGroup: IconGroup<"default"> = createIconGroup(
  "noteHalf",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
