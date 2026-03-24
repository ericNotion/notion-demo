import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const videoGameClassicIconGroup: IconGroup<"default"> = createIconGroup(
  "videoGameClassic",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
