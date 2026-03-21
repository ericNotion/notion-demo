import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const browserStopIconGroup: IconGroup<"default"> = createIconGroup(
  "browserStop",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
