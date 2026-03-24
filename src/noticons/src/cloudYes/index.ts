import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cloudYesIconGroup: IconGroup<"default"> = createIconGroup(
  "cloudYes",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
