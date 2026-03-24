import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const newsIconGroup: IconGroup<"default"> = createIconGroup(
  "news",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
