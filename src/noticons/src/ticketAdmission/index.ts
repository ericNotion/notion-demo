import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const ticketAdmissionIconGroup: IconGroup<"default"> = createIconGroup(
  "ticketAdmission",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
