import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bathtubShowerIconGroup: IconGroup<"default"> = createIconGroup(
  "bathtubShower",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
