import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const trafficLightIconGroup: IconGroup<"default"> = createIconGroup(
  "trafficLight",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
