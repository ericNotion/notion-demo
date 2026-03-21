import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const checklistIconGroup: IconGroup<"default"> = createIconGroup(
  "checklist",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
