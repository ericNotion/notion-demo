import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mandirIconGroup: IconGroup<"default"> = createIconGroup(
  "mandir",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
