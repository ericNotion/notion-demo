import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const logOutIconGroup: IconGroup<"default"> = createIconGroup(
  "logOut",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
