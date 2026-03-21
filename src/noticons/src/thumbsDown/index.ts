import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const thumbsDownIconGroup: IconGroup<"default"> = createIconGroup(
  "thumbsDown",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
