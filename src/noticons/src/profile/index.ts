import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const profileIconGroup: IconGroup<"default"> = createIconGroup(
  "profile",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
