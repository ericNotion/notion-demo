import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const videoGameIconGroup: IconGroup<"default"> = createIconGroup(
  "videoGame",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
