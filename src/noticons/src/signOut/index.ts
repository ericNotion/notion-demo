import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const signOutIconGroup: IconGroup<"default"> = createIconGroup(
  "signOut",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
