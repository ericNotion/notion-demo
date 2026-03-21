import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const lightsIconGroup: IconGroup<"default"> = createIconGroup(
  "lights",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
