import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const safetyPinIconGroup: IconGroup<"default"> = createIconGroup(
  "safetyPin",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
