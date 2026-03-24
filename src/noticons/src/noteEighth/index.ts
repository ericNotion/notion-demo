import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const noteEighthIconGroup: IconGroup<"default"> = createIconGroup(
  "noteEighth",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
