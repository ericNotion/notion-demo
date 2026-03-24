import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mopAndBucketIconGroup: IconGroup<"default"> = createIconGroup(
  "mopAndBucket",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
