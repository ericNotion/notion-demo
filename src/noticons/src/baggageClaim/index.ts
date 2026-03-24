import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const baggageClaimIconGroup: IconGroup<"default"> = createIconGroup(
  "baggageClaim",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
