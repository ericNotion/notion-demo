import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const departuresIconGroup: IconGroup<"default"> = createIconGroup(
  "departures",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
