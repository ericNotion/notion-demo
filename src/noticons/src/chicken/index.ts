import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chickenIconGroup: IconGroup<"default"> = createIconGroup(
  "chicken",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
