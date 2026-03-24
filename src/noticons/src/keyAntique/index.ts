import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const keyAntiqueIconGroup: IconGroup<"default"> = createIconGroup(
  "keyAntique",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
