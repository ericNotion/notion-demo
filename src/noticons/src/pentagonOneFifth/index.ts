import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pentagonOneFifthIconGroup: IconGroup<"default"> = createIconGroup(
  "pentagonOneFifth",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
