import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cameraRollIconGroup: IconGroup<"default"> = createIconGroup(
  "cameraRoll",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
