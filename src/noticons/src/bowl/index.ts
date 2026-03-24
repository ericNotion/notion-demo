import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bowlIconGroup: IconGroup<"default"> = createIconGroup(
  "bowl",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
