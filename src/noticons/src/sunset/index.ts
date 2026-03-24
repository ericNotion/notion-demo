import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sunsetIconGroup: IconGroup<"default"> = createIconGroup(
  "sunset",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
