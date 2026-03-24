import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const heartbrokenIconGroup: IconGroup<"default"> = createIconGroup(
  "heartbroken",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
