import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const flashlightIconGroup: IconGroup<"default"> = createIconGroup(
  "flashlight",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
