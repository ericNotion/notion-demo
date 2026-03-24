import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const kiteIconGroup: IconGroup<"default"> = createIconGroup(
  "kite",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
