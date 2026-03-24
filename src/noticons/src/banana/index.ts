import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bananaIconGroup: IconGroup<"default"> = createIconGroup(
  "banana",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
