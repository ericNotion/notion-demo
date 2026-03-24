import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const orangeIconGroup: IconGroup<"default"> = createIconGroup(
  "orange",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
