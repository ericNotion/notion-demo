import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tortoiseIconGroup: IconGroup<"default"> = createIconGroup(
  "tortoise",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
