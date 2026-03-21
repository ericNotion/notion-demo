import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const triangleOneThirdIconGroup: IconGroup<"default"> = createIconGroup(
  "triangleOneThird",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
