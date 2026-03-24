import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const ovenIconGroup: IconGroup<"default"> = createIconGroup(
  "oven",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
