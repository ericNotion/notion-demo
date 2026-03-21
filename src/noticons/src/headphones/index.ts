import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const headphonesIconGroup: IconGroup<"default"> = createIconGroup(
  "headphones",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
