import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const coatIconGroup: IconGroup<"default"> = createIconGroup(
  "coat",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
