import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const downloadIconGroup: IconGroup<"default"> = createIconGroup(
  "download",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
