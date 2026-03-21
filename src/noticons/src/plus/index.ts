import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const plusIconGroup: IconGroup<"default"> = createIconGroup(
  "plus",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
