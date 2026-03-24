import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const piscesIconGroup: IconGroup<"default"> = createIconGroup(
  "pisces",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
