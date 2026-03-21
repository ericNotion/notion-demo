import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const ringedPlanetIconGroup: IconGroup<"default"> = createIconGroup(
  "ringedPlanet",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
