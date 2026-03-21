import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const headsetIconGroup: IconGroup<"default"> = createIconGroup(
  "headset",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
