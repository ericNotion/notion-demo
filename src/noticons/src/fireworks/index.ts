import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fireworksIconGroup: IconGroup<"default"> = createIconGroup(
  "fireworks",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
