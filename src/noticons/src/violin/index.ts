import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const violinIconGroup: IconGroup<"default"> = createIconGroup(
  "violin",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
