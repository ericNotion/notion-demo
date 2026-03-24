import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const radioIconGroup: IconGroup<"default"> = createIconGroup(
  "radio",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
