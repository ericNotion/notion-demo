import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const alienPixelIconGroup: IconGroup<"default"> = createIconGroup(
  "alienPixel",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
