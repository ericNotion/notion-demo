import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pasteIconGroup: IconGroup<"default"> = createIconGroup(
  "paste",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
