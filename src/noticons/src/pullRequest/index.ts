import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pullRequestIconGroup: IconGroup<"default"> = createIconGroup(
  "pullRequest",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
