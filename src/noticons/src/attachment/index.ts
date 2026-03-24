import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const attachmentIconGroup: IconGroup<"default"> = createIconGroup(
  "attachment",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
