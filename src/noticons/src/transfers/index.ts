import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const transfersIconGroup: IconGroup<"default"> = createIconGroup(
  "transfers",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
