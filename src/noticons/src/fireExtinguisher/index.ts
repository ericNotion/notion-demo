import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fireExtinguisherIconGroup: IconGroup<"default"> = createIconGroup(
  "fireExtinguisher",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
