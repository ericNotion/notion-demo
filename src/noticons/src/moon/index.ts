import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const moonIconGroup: IconGroup<"default"> = createIconGroup(
  "moon",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
