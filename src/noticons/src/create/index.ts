import type { IconGroup } from "@nds-icons";
import { createIconGroup as _createIconGroup } from "@nds-icons";

export const createIconGroup: IconGroup<"default"> = _createIconGroup(
  "create",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
