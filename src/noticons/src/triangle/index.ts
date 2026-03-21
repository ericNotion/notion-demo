import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const triangleIconGroup: IconGroup<"default"> = createIconGroup(
  "triangle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
