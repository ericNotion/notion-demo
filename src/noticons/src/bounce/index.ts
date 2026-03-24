import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bounceIconGroup: IconGroup<"default"> = createIconGroup(
  "bounce",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
