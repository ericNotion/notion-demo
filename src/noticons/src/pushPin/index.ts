import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pushPinIconGroup: IconGroup<"default"> = createIconGroup(
  "pushPin",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
