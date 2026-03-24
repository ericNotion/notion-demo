import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const extensionIconGroup: IconGroup<"default"> = createIconGroup(
  "extension",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
