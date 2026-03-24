import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const playlistIconGroup: IconGroup<"default"> = createIconGroup(
  "playlist",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
