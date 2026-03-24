import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const musicAlbumIconGroup: IconGroup<"default"> = createIconGroup(
  "musicAlbum",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
