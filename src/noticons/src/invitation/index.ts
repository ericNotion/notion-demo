import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const invitationIconGroup: IconGroup<"default"> = createIconGroup(
  "invitation",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
