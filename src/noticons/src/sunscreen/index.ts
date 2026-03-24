import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sunscreenIconGroup: IconGroup<"default"> = createIconGroup(
  "sunscreen",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
