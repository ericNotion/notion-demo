import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const campingTrailerIconGroup: IconGroup<"default"> = createIconGroup(
  "campingTrailer",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
