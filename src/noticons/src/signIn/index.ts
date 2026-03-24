import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const signInIconGroup: IconGroup<"default"> = createIconGroup(
  "signIn",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
