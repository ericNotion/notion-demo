import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const serviceCounterIconGroup: IconGroup<"default"> = createIconGroup(
  "serviceCounter",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
