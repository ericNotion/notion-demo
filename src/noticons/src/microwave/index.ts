import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const microwaveIconGroup: IconGroup<"default"> = createIconGroup(
  "microwave",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
