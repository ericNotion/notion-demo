import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const strawberryIconGroup: IconGroup<"default"> = createIconGroup(
  "strawberry",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
