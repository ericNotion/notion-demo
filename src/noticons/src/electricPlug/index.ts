import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const electricPlugIconGroup: IconGroup<"default"> = createIconGroup(
  "electricPlug",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
