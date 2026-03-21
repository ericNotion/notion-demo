import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const wifiIconGroup: IconGroup<"default"> = createIconGroup(
  "wifi",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
