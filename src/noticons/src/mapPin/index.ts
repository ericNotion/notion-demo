import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mapPinIconGroup: IconGroup<"default"> = createIconGroup(
  "mapPin",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
