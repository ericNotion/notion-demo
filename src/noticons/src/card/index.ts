import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cardIconGroup: IconGroup<"default"> = createIconGroup(
  "card",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
