import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const whistleIconGroup: IconGroup<"default"> = createIconGroup(
  "whistle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
