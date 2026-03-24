import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bagIconGroup: IconGroup<"default"> = createIconGroup(
  "bag",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
