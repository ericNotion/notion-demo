import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const triangleTwoThirdsIconGroup: IconGroup<"default"> = createIconGroup(
  "triangleTwoThirds",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
