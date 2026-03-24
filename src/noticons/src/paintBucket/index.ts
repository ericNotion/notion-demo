import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const paintBucketIconGroup: IconGroup<"default"> = createIconGroup(
  "paintBucket",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
