import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const buttonIconGroup: IconGroup<"default"> = createIconGroup(
  "button",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
