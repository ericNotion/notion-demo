import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const postcardIconGroup: IconGroup<"default"> = createIconGroup(
  "postcard",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
