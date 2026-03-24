import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const ticketIconGroup: IconGroup<"default"> = createIconGroup(
  "ticket",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
