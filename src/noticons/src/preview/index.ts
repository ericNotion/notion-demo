import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const previewIconGroup: IconGroup<"default"> = createIconGroup(
  "preview",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
