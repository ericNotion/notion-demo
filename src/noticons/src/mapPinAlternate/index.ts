import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mapPinAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "mapPinAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
