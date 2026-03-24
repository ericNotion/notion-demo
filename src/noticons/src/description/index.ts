import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const descriptionIconGroup: IconGroup<"default"> = createIconGroup(
  "description",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
