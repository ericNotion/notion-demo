import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const noteSixteenthIconGroup: IconGroup<"default"> = createIconGroup(
  "noteSixteenth",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
