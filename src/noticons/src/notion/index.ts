import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const notionIconGroup: IconGroup<"default"> = createIconGroup(
  "notion",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
