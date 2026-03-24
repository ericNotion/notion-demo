import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const phoneIconGroup: IconGroup<"default"> = createIconGroup(
  "phone",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
