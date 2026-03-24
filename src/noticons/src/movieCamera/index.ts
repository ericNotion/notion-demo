import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const movieCameraIconGroup: IconGroup<"default"> = createIconGroup(
  "movieCamera",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
