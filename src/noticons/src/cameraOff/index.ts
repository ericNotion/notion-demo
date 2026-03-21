import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cameraOffIconGroup: IconGroup<"default"> = createIconGroup(
  "cameraOff",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
