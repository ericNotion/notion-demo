import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const noIconGroup: IconGroup<"default"> = createIconGroup(
  "no",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
