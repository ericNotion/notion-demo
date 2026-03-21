import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const binocularsIconGroup: IconGroup<"default"> = createIconGroup(
  "binoculars",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
