import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hashtagIconGroup: IconGroup<"default"> = createIconGroup(
  "hashtag",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
