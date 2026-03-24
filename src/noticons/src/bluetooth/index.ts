import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bluetoothIconGroup: IconGroup<"default"> = createIconGroup(
  "bluetooth",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
