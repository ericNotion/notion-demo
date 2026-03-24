import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const inlineSkateIconGroup: IconGroup<"default"> = createIconGroup(
  "inlineSkate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
