import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const factoryIconGroup: IconGroup<"default"> = createIconGroup(
  "factory",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
