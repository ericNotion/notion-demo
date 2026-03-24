import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const logInIconGroup: IconGroup<"default"> = createIconGroup(
  "logIn",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
