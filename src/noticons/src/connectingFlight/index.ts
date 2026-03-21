import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const connectingFlightIconGroup: IconGroup<"default"> = createIconGroup(
  "connectingFlight",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
