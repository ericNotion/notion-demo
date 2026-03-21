import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const checkmarkLineIconGroup: IconGroup<"default"> = createIconGroup(
  "checkmarkLine",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
