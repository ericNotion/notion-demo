import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const privateIconGroup: IconGroup<"default"> = createIconGroup(
  "private",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
