import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const usernameIconGroup: IconGroup<"default"> = createIconGroup(
  "username",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
