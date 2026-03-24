import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const musicArtistIconGroup: IconGroup<"default"> = createIconGroup(
  "musicArtist",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
