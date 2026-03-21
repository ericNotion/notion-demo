import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const listIndentIconGroup: IconGroup<"default"> = createIconGroup(
  "listIndent",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
