import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const broomAndDustpanIconGroup: IconGroup<"default"> = createIconGroup(
  "broomAndDustpan",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
