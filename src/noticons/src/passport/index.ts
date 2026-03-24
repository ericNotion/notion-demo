import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const passportIconGroup: IconGroup<"default"> = createIconGroup(
  "passport",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
