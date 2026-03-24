import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const numeroIconGroup: IconGroup<"default"> = createIconGroup(
  "numero",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
