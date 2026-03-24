import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const graduateIconGroup: IconGroup<"default"> = createIconGroup(
  "graduate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
