import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pigIconGroup: IconGroup<"default"> = createIconGroup(
  "pig",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
