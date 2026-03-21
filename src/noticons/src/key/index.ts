import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const keyIconGroup: IconGroup<"default"> = createIconGroup(
  "key",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
