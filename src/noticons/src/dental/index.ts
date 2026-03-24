import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const dentalIconGroup: IconGroup<"default"> = createIconGroup(
  "dental",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
