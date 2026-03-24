import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const backwardIconGroup: IconGroup<"default"> = createIconGroup(
  "backward",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
