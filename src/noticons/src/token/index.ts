import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tokenIconGroup: IconGroup<"default"> = createIconGroup(
  "token",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
