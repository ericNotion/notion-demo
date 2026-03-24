import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pottedPlantIconGroup: IconGroup<"default"> = createIconGroup(
  "pottedPlant",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
