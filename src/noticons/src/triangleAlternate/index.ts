import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const triangleAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "triangleAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
